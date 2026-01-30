import { AboutDesc, AboutHeading } from "@/components/sections/about";
import { Navbar } from "../../components/ui/navbar";


export default function HomePage() {
  return (
    <main className="max-w-160 w-full h-full">
      <section className="flex w-160 h-33 items-center font-extrabold text-[176px]">
        <h1 className="-ml-2.5 -mt-0.5">binit.</h1>
      </section>
      <section className="mt-4 h-39 w-full">
        <Navbar />
      </section>
      <section className="h-39 w-full mt-2">
        <AboutHeading />
      </section>
      <section className=" h-37.5 w-full mt-3.5">
        <AboutDesc />
      </section>
      <section className="bg-red-500 h-37.5 w-full mt-3.5">
        {/* Placeholder for future content */}
      </section>
      <section className="bg-red-500 h-37.5 w-full mt-3.5">
        {/* Placeholder for future content */}
      </section>
    </main>
  );
}



