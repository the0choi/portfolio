import { motion } from 'framer-motion';
import { CrystalCanvas, StarsCanvas } from './canvas';

export default function Hero() {

  return (
    <>
    <section className="relative w-full h-screen bg-[#11151c]">
      <StarsCanvas />

      <div className="relative headline-container">
        <p className={"absolute top-16 mt-12 sm:text-[18px] text-[12px] uppercase tracking-widest text-white-100"}>
          Junior full-stack software engineer ⇀
        </p>
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
    </>
  )
}