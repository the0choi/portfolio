import { motion } from 'framer-motion';
import { fadeIn } from "../utilities/motion";
import PropTypes from 'prop-types';

Project.propTypes = {
    projectNo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tech: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    model: PropTypes.object.isRequired,
    isModelFirst: PropTypes.bool
};

export default function Project({ projectNo, title, tech, description, url, website, color, model, isModelFirst }) {
  const colorClasses = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-500' },
    red: { bg: 'bg-red-500', text: 'text-red-500' },
    yellow: { bg: 'bg-yellow-500', text: 'text-yellow-500' },
    green: { bg: 'bg-green-500', text: 'text-green-500' },
  };

  return (
    <section className="relative w-full h-screen">
      <div className={`sm:px-16 px-6 absolute inset-0 top-[120px] left-[120px] max-w-7xl mx-auto flex sm:flex-row flex-col items-start justify-center gap-5`}>

        {isModelFirst ? model : (
          <div className="mx-auto">
            <motion.div 
              className="flex items-center"
              variants={fadeIn("right", "easeOut", 1, 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={`w-16 h-0 border-2 border-black ml-2 mr-4 rounded-xl`}></div>
              <p className={`${colorClasses[color].text} font-semibold`}>Project {projectNo}</p>
            </motion.div>
            <motion.h1 
              className="text-4xl font-semibold text-black mt-6 mb-6"
              variants={fadeIn("up", "easeOut", 0.5, 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.3 }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className={`text-xs text-white-100 ${colorClasses[color].bg} rounded-xl text-center w-fit px-4 py-1`}
              variants={fadeIn("up", "easeOut", 0.55, 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.3 }}
            >
              {tech}
            </motion.p>
            <motion.p 
              className="text-lg text-gray-500 my-8"
              variants={fadeIn("up", "easeOut", 0.6, 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.3 }}
            >
              {description}
            </motion.p>
            <motion.div 
              className="flex gap-4"
              variants={fadeIn("up", "easeOut", 0.6, 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.3 }}
            >
              <button className={`text-xl text-white-100 ${colorClasses[color].bg} py-4 px-4 rounded-xl hover:scale-105 duration-300`}>
                <a href={website} target="_blank" rel="noreferrer">
                View project ⇀
                </a>
              </button>
              <button className={`flex justify-center items-center bg-black-100 px-4 pt-1 rounded-xl hover:scale-105 duration-300`}>
                <a href={url} target="_blank" rel="noreferrer">
                  <i className='bx bx-code-alt bx-sm' style={{color: '#ffffff'}} />
                </a>
              </button>
            </motion.div>
          </div>
        )}

        {isModelFirst ? (
          <div className="mx-auto">
          <motion.div 
            className="flex items-center"
            variants={fadeIn("right", "easeOut", 1, 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={`w-16 h-0 border-2 border-black ml-2 mr-4 rounded-xl`}></div>
            <p className={`${colorClasses[color].text} font-semibold`}>Project {projectNo}</p>
          </motion.div>
          <motion.h1 
            className="text-4xl font-semibold text-black mt-6 mb-6"
            variants={fadeIn("up", "easeOut", 0.5, 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className={`text-xs text-white-100 ${colorClasses[color].bg} rounded-xl text-center w-fit px-4 py-1`}
            variants={fadeIn("up", "easeOut", 0.55, 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            {tech}
          </motion.p>
          <motion.p 
            className="text-lg text-gray-500 my-8"
            variants={fadeIn("up", "easeOut", 0.6, 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            {description}
          </motion.p>
          <motion.div 
            className="flex gap-4"
            variants={fadeIn("up", "easeOut", 0.6, 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            <button className={`text-xl text-white-100 ${colorClasses[color].bg} py-4 px-4 rounded-xl hover:scale-105 duration-300`}>
              <a href={website} target="_blank" rel="noreferrer">
              View project ⇀
              </a>
            </button>
            <button className={`flex justify-center items-center bg-black-100 px-4 pt-1 rounded-xl hover:scale-105 duration-300`}>
              <a href={url} target="_blank" rel="noreferrer">
                <i className='bx bx-code-alt bx-sm' style={{color: '#ffffff'}} />
              </a>
            </button>
          </motion.div>
        </div>
        ) : model }
        
      </div>
    </section>
  )
}