import React from 'react'
import { HoverEffect } from "../components/ui/card-hover-effect";
import { TracingBeam } from "../components/ui/tracing-beam";
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { wordsExp } from '@/constants/words';
import { exp1, exp2, exp3, exp4, exp5 } from '@/constants/experience';



const Experience = () => {
  return (
    <section id="experience" className="pt-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Experience</h1>
      <TypewriterEffectSmooth words={wordsExp} />
      <div className='flex justify-between items-center'>
        <TracingBeam>
          <HoverEffect items={exp1} />
          <HoverEffect items={exp2} />
          <HoverEffect items={exp3} />
          <HoverEffect items={exp4} />
          <HoverEffect items={exp5} />
        </TracingBeam>
      </div>
    </section>
  )
}

export default Experience