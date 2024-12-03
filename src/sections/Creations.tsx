"use client";

import Image from "next/image";
import Link from "next/link";
import { Tabs } from "@/components/ui/tabs";
import { projects } from "@/constants/creations";

const Creations = () => {
  const tabs = projects.map((project) => ({
    title: project.title,
    value: project.title.toLowerCase().replace(/\s+/g, "-"),
    content: (
      <div
        className="w-full overflow-hidden relative h-full rounded-2xl p-5 md:p-10 text-lg md:text-2xl lg:text-4xl font-bold text-black"
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #D1CEFA 50%, #E3FAFF 100%)'
        }}
      >
        <ProjectWithImage
          title={project.title}
          image={project.image}
          description={project.description}
          link={project.liveUrl}
        />
      </div>
    ),
  }));

  return (
    <section id="creations" className="w-full">
      <div>
        <h1 className="py-5 px-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-20">Creations</h1>
        <div className="h-[15rem] md:h-[30rem] lg:h-[40rem] [perspective:1000px] relative flex flex-col w-full items-start justify-start my-5">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
};

interface ProjectWithImageProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

const ProjectWithImage: React.FC<ProjectWithImageProps> = ({ title, image, description, link }) => {
  return (
    <Link href={link} passHref legacyBehavior>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full block"
        aria-label={`Visit ${title} project`}
      >
        <div className="flex flex-col justify-start w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold p-4 md:p-6">{title}</h2>
          <p className="text-base md:text-lg lg:text-xl p-4 md:p-6">{description}</p>
          <div className="w-full h-full">
            <Image
              src={image}
              alt={`${title} image`}
              width={1000}
              height={600}
              className="object-cover object-left-top w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Creations;

