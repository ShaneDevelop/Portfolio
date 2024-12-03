"use client";
import { FlipWords } from '@/components/ui/flip-word';
import React from 'react';
import Button from '@/components/Button';
import { skills } from '@/constants/skills';
import { techstack } from '@/constants/techstack';
import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "python",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  "bash",
  "lua",
];

const Skills = () => {
  return (
    <section className="relative margin-y" id="skills">
      <h1 className="py-5 px-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Skills</h1>

      <div className='flex max-lg:flex-col gap-2 justify-evenly items-center'>
        <div className='flex flex-col gap-6 max-md:max-w-sm'>
          {techstack.map((skillRow, rowIndex) => (
            <div className='flex z-20' key={rowIndex}>
              {rowIndex % 2 === 0 ? (
                <button className='w-[50px] h-[50px] border-gray-800 border-[1px] rounded-r-lg inline-flex gap-2 items-center justify-center border-l-0' aria-label={'half button'}></button>
              ) : null}

              {skillRow.map((skill, index) => (
                <Button key={index} text={skill.text} img={skill.img} />
              ))}

              {rowIndex % 2 !== 0 ? (
                <button className='w-[50px] h-[50px] border-gray-800 border-[1px] rounded-l-lg inline-flex gap-2 items-center justify-center border-r-0' aria-label={'half button'}></button>
              ) : null}
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-0 items-center justify-center'>
          <div className="relative w-96 h-196">
            <IconCloud iconSlugs={slugs} />
          </div>
          <span className='text-xl font-bold font-mono tracking-tight py-10'>
            <FlipWords words={skills} />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
