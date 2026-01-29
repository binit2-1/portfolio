import Link from "next/link";

export const Navbar = () => {
  return (
      <div className="flex w-full h-full items-end">
        <Link href="/" className="text-2xl cursor-pointer -ml-px">Home</Link>
        <Link href="/blogs" className="text-2xl cursor-pointer ml-25">Blogs</Link>
        <Link href="/projects" className="text-2xl cursor-pointer ml-26.5">Projects</Link>
        <Link href="/components" className="text-2xl cursor-pointer ml-20.5">Components</Link>
      </div>
  );
};