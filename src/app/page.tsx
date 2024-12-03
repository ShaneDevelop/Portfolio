import { navItems } from "@/constants";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Main from "@/sections/Main";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Footer from "@/components/Footer";
import Creations from "@/sections/Creations";

export default function Home() {
  return (
    <div className="bg-white">
      <main className="max-w-[1280px] mx-auto text-black">

        <div>
          <FloatingNav navItems={navItems} />
        </div>
        <div className="mt-20 sm:mt-20 md:mt-20 lg:-mt-20 xl:-mt-20">
          <Main />
        </div>
        <div className="max-lg:ml-7">
          <Experience />
        </div>
        <div className="max-lg:ml-7 max-lg:mr-7">
          <Projects />
        </div>
        <div className="max-lg:ml-7 max-lg:mr-7">
          <Skills />
        </div>
        <div className="mt-20 py-20">
          <Contact />
        </div>
        <div className="max-lg:ml-7 max-lg:mr-7">
          <Footer />
        </div>
      </main>
    </div>
  );
}
