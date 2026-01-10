import { useState, useEffect } from 'react'
import { FaLightbulb, FaHandshake, FaBullseye, FaStar, FaCheckCircle } from 'react-icons/fa'
import profileImg from '../assets/profile-new.png'

const About = () => {
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      // Lahore, Pakistan timezone (Asia/Karachi)
      const now = new Date()
      const options = { 
        timeZone: 'Asia/Karachi',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }
      const timeString = now.toLocaleTimeString('en-US', options)
      // Format: "2:05 PM" -> "2:05 pm"
      const formatted = timeString.toLowerCase().replace(/\s+(am|pm)/, ' $1')
      setLocalTime(formatted)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const features = [
    { icon: FaLightbulb, label: 'Innovation', color: 'text-yellow-400' },
    { icon: FaHandshake, label: 'Collaboration', color: 'text-yellow-400' },
    { icon: FaBullseye, label: 'Precision', color: 'text-yellow-400' },
    { icon: FaStar, label: 'Impact', color: 'text-yellow-400' }
  ]

  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Profile Card - Left Side */}
          <div className="lg:w-2/5 w-full flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Yellow Glow Effect - More prominent */}
              <div className="absolute -inset-1 bg-yellow-400 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Main Card */}
              <div className="relative bg-[#1a1a1a] border-2 border-yellow-400 rounded-2xl p-6 shadow-[0_0_40px_rgba(255,215,0,0.5)] max-w-sm w-full backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  {/* Profile Picture */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1 bg-yellow-400 rounded-full blur-md opacity-50"></div>
                    <img 
                      src={profileImg} 
                      alt="Saadullah S." 
                      className="relative w-16 h-16 rounded-full border-2 border-yellow-400 object-cover ring-2 ring-yellow-400/30"
                    />
                  </div>

                  {/* Name and Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white text-xl font-bold">Saadullah S.</h3>
                      <FaCheckCircle className="text-blue-500 flex-shrink-0 text-sm" />
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      Lahore, Pakistan - {localTime || '2:05 pm'} local time
                    </p>

                    {/* Green Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-green-500 text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                        Available for work
                      </span>
                      <span className="inline-block bg-green-500 text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                        Hiring Talent
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content - Right Side */}
          <div className="lg:w-3/5 w-full space-y-6 lg:space-y-8">
            {/* ABOUT ME Badge - Centered at top */}
            <div className="flex justify-center">
              <div
                className="inline-block px-8 py-1.5 bg-black/60 border border-yellow-500 rounded-full text-yellow-400 text-base font-semibold uppercase tracking-wider shadow-[0_0_32px_1px_rgba(255,215,0,0.08)]"
                style={{
                  boxShadow: "0 0 30px 1px #ffe06622 inset"
                }}
              >
                ABOUT ME
              </div>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
              <span className="block text-white">Innovate with Intelligence,</span>
              <span className="block text-yellow-400 mt-2">Build with Purpose</span>
            </h2>
            
            {/* Description */}
            <div className="text-white text-base md:text-lg leading-relaxed space-y-4 lg:space-y-5">
              <p>
                I'm <strong className="text-white font-bold">Saadullah Bin Saleem</strong>, an AI Engineer and Backend Developer passionate about creating intelligent systems and automation solutions that drive real business value.
              </p>
              <p>
                I specialize in <strong className="text-yellow-400 font-bold">Agentic AI, Gen AI tools</strong>, and backend architectures using <strong className="text-yellow-400 font-bold">Python, Django, and FastAPI</strong>. My focus is on building smart, scalable solutions that automate workflows, power voice agents, and enhance real-world efficiency.
              </p>
              <p>
                Driven by curiosity and creativity, I transform complex ideas into seamless, high-impact AI systems that help businesses scale and succeed.
              </p>
            </div>
            
            {/* Feature Boxes - Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 lg:mt-8">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon
                return (
                  <div 
                    key={idx}
                    className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300"
                  >
                    <div className={`${feature.color} text-4xl mb-3 flex justify-center`}>
                      <IconComponent />
                    </div>
                    <p className="text-white font-semibold text-sm">{feature.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


