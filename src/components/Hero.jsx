import { motion } from 'framer-motion';
import { CrystalCanvas } from './canvas';

export default function Hero() {

  return (
    <section className="relative w-full h-screen bg-[#11151c]">
      <div className={`sm:px-16 px-6 absolute inset-0 top-[120px] left-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <p className={"sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-widest mt-2 text-gray-400 pl-6"}>
          Junior full-stack software engineer ⇀
        </p>

      </div>

      <div className="headline-container">
        <div id="text-behind">THEODORE<br /><span className="bottomText">CHOI</span></div>
        <div id="text-behind-blur">THEODORE<br /><span className="bottomText">CHOI</span></div>
        <div id="text-front">THEODORE<br /><span className="bottomText">CHOI</span></div>
        <div className="canvas-container">
            < CrystalCanvas />
        </div>     
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#projects">
          <div className="w-[24px] h-[40px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}