export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold">Project: {slug}</h1>
      <p className="mt-4 text-muted-foreground">Details about this project go here...</p>
    </div>
  );
}