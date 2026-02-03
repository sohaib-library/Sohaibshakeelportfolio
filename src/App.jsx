import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import TechnologyArsenal from './components/TechnologyArsenal'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import Experience from './components/Experience'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-28">
      <Hero />
      <About />
      <TechnologyArsenal />
      <Services />
      <Process />
      <Projects />
      <Experience />
      <CTA />
      <Contact />
      <Footer />
      <BottomNav activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  )
}

export default App
