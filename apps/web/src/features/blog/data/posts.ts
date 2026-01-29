import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  content: string; // Raw MDX content
};

// Point to where the MDX files live
const BLOG_DIR = path.join(process.cwd(), "src/features/blog/content");

export async function getBlogPosts(): Promise<Post[]> {
  // Ensure the directory exists to prevent crashes
  try {
    await fs.access(BLOG_DIR);
  } catch {
    return [];
  }

  const files = await fs.readdir(BLOG_DIR);

  const posts = await Promise.all(
    files
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = path.join(BLOG_DIR, file);
        const source = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(source);

        return {
          slug: file.replace(".mdx", ""),
          title: data.title,
          publishedAt: data.publishedAt,
          summary: data.summary,
          image: data.image,
          content: content,
        };
      })
  );

  // Sort by newest first
  return posts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}