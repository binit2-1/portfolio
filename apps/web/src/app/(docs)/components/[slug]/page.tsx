export default async function ComponentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold capitalize">{slug}</h1>
      <div className="mt-8 border p-10 rounded-xl">
        {/* This is where the <ComponentPreview /> will live */}
        <p className="text-center text-muted-foreground">Live Demo Component Here</p>
      </div>
    </div>
  );
}