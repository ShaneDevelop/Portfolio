'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"

const Main = () => {
  return (
    <section className="container mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center py-12 px-4 sm:px-6 lg:px-8 gap-12 lg:gap-16" id="main">
      <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          I&apos;m <span className="text-[#8B7FD3]">Shane</span> Web
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700">
          Developer & Designer.
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0">
          I&apos;m a professional UI/UX designer that creates seamless and engaging websites.
        </p>
        <Link
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-xl text-lg font-medium transition-all hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          aria-label='View my GitHub profile'
        >
          Check out my GitHub
          <span className="ml-3">
            <Image
              height={28}
              width={28}
              src="/assets/github.svg"
              alt="GitHub logo"
              className='w-7 h-7'
            />
          </span>
        </Link>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src="/assets/illustration.svg"
          width={600}
          height={600}
          alt="Developer illustration"
          className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
          priority
        />
      </div>
    </section>
  )
}

export default Main

