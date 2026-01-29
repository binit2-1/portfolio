import { Navbar } from "../../components/ui/navbar";

export default function HomePage() {
  return (
    <main className="max-w-160 w-full h-full">
      <section className="flex w-160 h-33 items-center font-extrabold text-[176px]">
        <h1 className="-ml-3.5 -mt-0.5">BINIT.</h1>
      </section>
      <section className="mt-4 h-39 w-full">
        <Navbar />
      </section>
    </main>
  );
}

const Navbar1 = () => {
  return (
      <div className="flex w-full h-full items-end">
        <div className="text-2xl -ml-px">Home</div>
      </div>
  );
};

