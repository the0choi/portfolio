import { motion } from 'framer-motion';
import { fadeIn } from "../utilities/motion";
import { useEffect } from 'react';
import { CrystalCanvas, StarsCanvas } from './canvas';

export default function Hero() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function scramble(el) {
    let iterations = 0;
    const interval = setInterval(() => {
      el.innerText = el.innerText.split("").map( (letter, idx) => {
        if (idx < iterations) return el.dataset.value[idx];
        if (!/[a-zA-Z]/.test(letter)) return letter;
        return letters[Math.floor(Math.random() * 26)];
      }).join("")

      if (iterations >= el.dataset.value.length) clearInterval(interval);
      iterations += 1;
      
    }, 100)
  }

  useEffect(() => {
    const subtitle = document.getElementById('subtitle');
    scramble(subtitle);
  }, [])

  return (
    <>
    <section className="relative w-full h-screen bg-[#11151c]">
      <StarsCanvas />

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="relative headline-container prevent-select"
      >
        <p 
          className="absolute top-16 mt-12 sm:text-[18px] text-[12px] uppercase tracking-widest text-white-100"
          id="subtitle"
          data-value="Jr. full-stack software engineer"
        >
          Jr. full-stack software engineer
        </p>
        <div id="text-behind">THEODORE<br /><span className="bottomText">CHOI</span></div>
        <div id="text-behind-blur">THEODORE<br /><span className="bottomText">CHOI</span></div>
        <div id="text-front">THEODORE<br /><span className="bottomText">CHOI</span></div>
        {/* <div className="canvas-container">
            <CrystalCanvas />
        </div>      */}
      </motion.div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <div className="w-[24px] h-[40px] rounded-3xl border-2 border-white-100 opacity-70 flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-2 h-2 rounded-full bg-white-100 mb-1"
          />
        </div>
      </div>
    </section>
    </>
  )
}