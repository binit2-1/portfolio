export default function ComponentsPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-6">Registry</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-square border rounded-lg flex items-center justify-center">Button</div>
        <div className="aspect-square border rounded-lg flex items-center justify-center">Card</div>
      </div>
    </div>
  );
}