import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Navbar, Tech, Projects, StarsCanvas } from './components';

export default function App() {

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
