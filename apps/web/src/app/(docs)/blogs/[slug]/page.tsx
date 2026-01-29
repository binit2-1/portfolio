export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold">Blog Post: {slug}</h1>
      <p className="mt-4">MDX Content will render here...</p>
    </div>
  );
}