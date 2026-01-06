import { useState, useEffect, useRef } from 'react'
import profileImg from '../assets/profile.png'
import ScrollingImages from './ScrollingImages'

// Custom typewriter hook
const useTypewriter = (texts, speed = 100, deleteSpeed = 50, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]
    let timeout

    if (!isDeleting && displayText === currentText) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
    } else if (isDeleting && displayText === '') {
      // Move to next text
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    } else {
      // Type or delete one character
      const shouldDelete = isDeleting
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + (shouldDelete ? -1 : 1)))
      }, shouldDelete ? deleteSpeed : speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseDuration])

  return displayText
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)
  
  // Typewriter effect for roles
  const roles = ['Frontend Developer', 'React Developer', 'Next.js Developer']
  const typewriterText = useTypewriter(roles, 100, 50, 2000)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      return () => {
        section.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #3d2817 0%, #1a0f08 50%, #0a0a0a 100%)'
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(184, 134, 11, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(184, 134, 11, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Mouse-following glow effect */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: '600px',
          height: '600px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(255, 215, 0, 0.05) 40%, transparent 70%)',
          filter: 'blur(40px)',
          willChange: 'transform'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 text-left w-full">
        {/* "Right" Content (ScrollingImages) should show at top on mobile/tablet, right on desktop */}
        <div className="w-full md:w-auto flex-1 flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
          <ScrollingImages />
        </div>

        {/* Left Content = text content */}
        <div className="flex-1 max-w-2xl w-full order-2 md:order-1">
          <div className="inline-block px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-6">
            <span className="text-yellow-400 font-mono tracking-wide">&lt; &gt; Frontend Developer &lt;/&gt;</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Hey! I'm <span className="text-yellow-500">Sohaib Shakeel</span>,<br className="hidden sm:inline" />
            a{' '}
            <span className="text-white">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
            I build high-performance, type-safe applications with Next.js and TypeScript. I turn complex data flow challenges into seamless user experiences, delivering 90+ Lighthouse scores and production-ready, stable code.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20">
              Check portfolio
            </button>
            <button className="border border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500/10 transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
