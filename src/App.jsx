import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Navbar, Tech, Projects, StarsCanvas } from './components';
import Lenis from '@studio-freight/lenis';

export default function App() {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white-100">
        <div>
          <Navbar />
          <Hero />
        </div>
        <Projects />
        <About />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}
