import Card from '@/components/Card'
import React from 'react'
import { moreProjects, projects } from '@/constants/projects';
import Image from 'next/image';


const Projects = () => {
  return (
    <section id="projects" className=' py-8 px-4 md:px-6 gap-8 lg:gap-12'>

      <h1 className="py-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Projects</h1>
      <div>
        <div className="flex gap-3 justify-evenly max-lg:flex-col items-center max-lg:gap-20">
          {projects.map((project, index) => (
            <div key={index}>
              <Card
                link={project.link}
                title={project.title}
                content={project.content}
                project={project.projects}
              />
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center m-20'>
          <a href={moreProjects.url} className="inline-flex items-center justify-center  p-[1.5px] rounded-lg w-[250px] h-[50px] bg-[#8B7FD3]">
            <button className="flex items-center justify-center w-full h-full bg-black text-white rounded-md max-lg:text-[13px]" aria-label='more-project-button'>
              More projects on
              <span className="ml-2">
                <Image height={8} width={8} src="/assets/github.svg" alt="Github" className='w-8 h-8 max-lg:w-6 max-lg:h-6' />
              </span>
            </button>
          </a>
        </div>
      </div>
    </section >
  )
}

export default Projects