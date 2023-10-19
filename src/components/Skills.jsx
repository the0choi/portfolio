import { motion } from 'framer-motion';
import { fadeIn } from "../utilities/motion";
import { technologies } from "../constants";

export default function Skills() {
  const randomDuration = () => {
    return Math.random() * 4 + 2; // Generate a random duration between 1 and 6 seconds
  };

  return (
    <>
      <section className="relative w-full h-[400px] sm:h-screen xs:h-[900px] bg-[#11151c]">
        <div className="sm:px-16 absolute inset-0 max-w-7xl mx-auto mt-36 flex md:flex-row flex-col items-start justify-start gap-5">
          <div className='sm:px-16 px-6 flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
              <motion.div 
                className='w-28 h-28 bg-white-100 rounded-full p-6 z-30 skills-effect' 
                key={technology.name}
                style={{ '--glow-duration': `${randomDuration()}s`, '--float-duration': `${randomDuration() * 1.5}s` }}
                variants={fadeIn("up", "easeOut", 0.5, 0.4)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.3 }}
              >
                <img src={technology.icon} draggable="false" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  </>
  );
}