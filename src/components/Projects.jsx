import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utilities/motion";
import { Laptop1Canvas } from './canvas';

export default function Projects() {
  return (
    <section className="relative w-full h-screen">
    <div className={`sm:px-16 px-6 absolute inset-0 top-[120px] left-[120px] max-w-7xl mx-auto flex sm:flex-row flex-col items-start justify-center gap-5`}>

      <div className="mx-auto">
        <div className="flex items-center">
          <div className="w-16 h-0 border-2 border-black ml-2 mr-4"></div>
          <p className="text-black font-semibold">Project 01</p>
        </div>
        <h1 className="text-4xl font-semibold text-black my-6">
          AI Art Generator & Interpretor
        </h1>
        <p className="text-lg text-gray-500 my-8">
          A community platform to share AI art powered from textual prompts.
        </p>
        <button className="text-xl text-white-100 bg-black py-4 px-4">
          <a href="https://github.com/the0choi/envision" target="_blank" rel="noreferrer">
            View project ⇀
          </a>
        </button>
      </div>

      <Laptop1Canvas />

    </div>

    </section>
  )
}