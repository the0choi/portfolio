import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { github, linkedin, menu, close } from '../assets';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav 
        className="sm:px-8 px-3 sm:flex h-full hidden items-center py-10 fixed left-0 z-20 bg-transparent text-gray-500 inverted-text"
      >
        <div className='h-full w-20 flex flex-col justify-start items-center'>
          <Link 
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-black text-[44px] font-bold cursor-pointer bg-red-400 rounded-full px-4 pt-1 w-14 h-14 flex items-center justify-center">T</p>
          </Link>
          
          <div className="gap-2 flex -rotate-90 my-40">
            <a href="#contact" className="hidden sm:flex text-[18px] font-medium cursor-pointer px-4">Contact</a>
            <a href="#about" className="hidden sm:flex text-[18px] font-medium cursor-pointer px-4">About</a>
            <a href="#projects" className="hidden sm:flex text-[18px] font-medium cursor-pointer px-4">Projects</a>
          </div>
          
          <div className="gap-8 flex flex-col justify-end h-full">
            <a href='https://github.com/the0choi' target="_blank" rel="noreferrer">
              <img src={github} alt='github' className='w-6 h-6 object-contain opacity-80' />
            </a>
            <a href='https://www.linkedin.com/in/theodore-choi-70ba61194/' target="_blank" rel="noreferrer">
              <img src={linkedin} alt='linkedin' className='w-6 h-6 object-contain opacity-80' />
            </a>
          </div>
        </div>
      </nav>
      
      <nav 
        className="sm:hidden w-full flex items-center justify-between pt-3 fixed left-0 z-20 bg-white-100 bg-opacity-50 text-gray-700"
      >
        <div className='h-full w-20 px-6 z-20'>
          <Link 
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
              toggle ? setToggle(false) : '';
            }}
          >
            <p className="text-black text-[44px] font-bold cursor-pointer">T</p>
          </Link>
        </div>

        <div className="flex flex-col justify-start items-center px-6">
          <img 
            src={toggle ? close : menu} 
            alt="menu"
            className="w-[20px] h-[20px] object-contain cursor-pointer z-20"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} flex-col items-center justify-center p-6 bg-white-100 bg-opacity-80 backdrop-blur absolute w-screen h-screen top-0 left-0 z-10`}>

            <div className="flex flex-col justify-center items-center gap-10">
              <a href="#contact" className="hover:text-gray-500 text-[18px] font-medium cursor-pointer px-4" onClick={() => setToggle(!toggle)}>Contact</a>
              <a href="#about" className="hover:text-gray-500 text-[18px] font-medium cursor-pointer px-4" onClick={() => setToggle(!toggle)}>About</a>
              <a href="#projects" className="hover:text-gray-500 text-[18px] font-medium cursor-pointer px-4" onClick={() => setToggle(!toggle)}>Projects</a>
            </div>

            <div className="gap-8 flex absolute bottom-20">
            <a href='https://github.com/the0choi' target="_blank" rel="noreferrer">
              <img src={github} alt='github' className='w-8 h-8 object-contain opacity-80' />
            </a>
            <a href='https://www.linkedin.com/in/theodore-choi-70ba61194/' target="_blank" rel="noreferrer">
              <img src={linkedin} alt='linkedin' className='w-8 h-8 object-contain opacity-80' />
            </a>
          </div>

          </div>

        </div>
      </nav>

    </>
  )
}