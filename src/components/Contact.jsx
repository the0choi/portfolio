import { useState, useEffect, useRef, useCallback } from 'react';
import { DogCanvas } from './canvas';
import { motion } from 'framer-motion';

export default function Contact() {

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const containerRef = useRef(null);

  const handleMouseMove = useCallback((event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const offsetX = (event.clientX - centerX) * 0.01; 
      const offsetY = (event.clientY - centerY) * 0.01;
      const maxOffset = 100;

      setMouseX(Math.min(Math.max(offsetX, -maxOffset), maxOffset));
      setMouseY(Math.min(Math.max(offsetY, -maxOffset), maxOffset));
      console.log(offsetX, offsetY);
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);

      return () => {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [containerRef, handleMouseMove]);


  return (
    <>
      <section className="relative w-full h-[600px] bg-white-100" ref={containerRef}>
        <div className={`sm:px-16 relative inset-0 top-[120px] left-16 sm:left-[120px] max-w-7xl mx-auto flex md:flex-row flex-col items-start justify-start gap-5`}>

          <div className="bg-white-100 w-4/5 md:w-1/2 p-6">
            <h1 className="text-black-100 text-4xl font-semibold mb-8 z-30 relative">Let&apos;s connect.</h1>
            <p className="text-black-100 z-10 z-30 relative">
              Shoot me an email, and you can also find me on Linkedin.
            </p>
            <div className="bg-dynamic py-2 px-4 mt-8 rounded-xl w-fit hover:bg-black-100 hover:scale-105 duration-300">
              theodore.choi07@gmail.com
            </div>
          </div>

        <motion.div animate={{ x: mouseX, y: mouseY }}>
          <DogCanvas />
        </motion.div>

        </div>

      </section>
  </>
  )
}