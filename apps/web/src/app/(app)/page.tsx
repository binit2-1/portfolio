import { Button } from "@repo/ui";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold tracking-tighter">My Portfolio</h1>
      <p className="text-xl text-muted-foreground">Turborepo + Next.js 15 + Shadcn</p>
      <div className="flex gap-4">
        <Button>Check Projects</Button>
        <Button variant="outline">Read Blogs</Button>
      </div>
    </div>
  );
}