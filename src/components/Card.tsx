"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

type CardProps = {
  title: string;
  content: string;
  project: any[];
  link: string;
};

const Card = ({ link, title, content, project }: CardProps) => {
  return (
    <a
      href={link}
      className="block max-w-sm p-7 bg-white border-[0.3px] border-black shadow-[0_4px_15px_rgba(100,100,100,0.1)] hover:shadow-[0_6px_25px_rgba(100,100,100,0.2)] group max-lg:max-w-lg "
    >
      <h1 className="pb-5 max-w-[270px] text-4xl font-bold tracking-tight text-gray-800 transition-colors duration-200 ease-in-out group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:text-[#8B7FD3] bg-clip-text bg-gray-800 leading-[40px]">
        {title}
      </h1>
      <p className="font-normal text-gray-600 font-mono leading-relaxed">{content}</p>
      <div className="flex flex-row items-center justify-end mt-10">
        <AnimatedTooltip items={project} />
      </div>
    </a>
  );
};

export default Card;
