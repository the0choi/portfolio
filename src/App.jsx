import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Navbar, Skills, Projects, Footer } from './components';
import Lenis from '@studio-freight/lenis';

export default function App() {  

  useEffect(() => {
    const lenis = new Lenis();
  
    lenis.on('scroll', (e) => {
      // console.log(e);
    });
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white-100">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
