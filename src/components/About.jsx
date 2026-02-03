import { FaDownload } from 'react-icons/fa'
import profileImg from '../assets/profile-new.png'

const About = () => {
  const handleDownloadCV = () => {
    // Placeholder for CV download functionality
    // You can add actual CV file link here
    window.open('#', '_blank')
  }

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Card Container */}
        <div className="bg-[#1a0f08] rounded-xl sm:rounded-2xl border-2 border-yellow-500/30 p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-12">
            {/* Left Column - Profile Image with Hanging Effect */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative animate-physics-final">
                {/* Hook/Clip at top */}
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-600 rounded-full"></div>
                  </div>
                  {/* Chain/String */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 sm:h-12 bg-gray-600"></div>
                </div>
                
                {/* Profile Image */}
                <div className="relative mt-12 sm:mt-16">
                  <img 
                    src={profileImg} 
                    alt="Profile" 
                    className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] max-w-full rounded-xl sm:rounded-2xl object-cover shadow-2xl"
                    style={{ filter: 'grayscale(100%) contrast(1.1)' }}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x500/1a0f08/EAB308?text=Profile`
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="w-full lg:w-3/5 space-y-4 sm:space-y-6 text-center lg:text-left">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white">
                About me
              </h2>

              {/* Tagline with vertical accent */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-1 h-4 sm:h-6 bg-yellow-500"></div>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                  A blend of code logic and design aesthetics.
                </p>
              </div>

              {/* Paragraphs */}
              <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  I'm <strong className="text-yellow-500">Saadullah Bin Saleem</strong>, an AI Engineer and Backend Developer passionate about creating intelligent systems and automation solutions. My journey in tech started with curiosity and self-learning, and I've built a philosophy around coding that emphasizes clean architecture, scalability, and real-world impact.
                </p>
                <p>
                  I specialize in <strong className="text-yellow-500">Agentic AI, Gen AI tools</strong>, and backend architectures using <strong className="text-yellow-500">Python, Django, and FastAPI</strong>. Currently focused on building smart, scalable solutions that automate workflows, power voice agents, and enhance real-world efficiency. My key strengths include problem-solving, continuous learning, and delivering production-ready solutions.
                </p>
              </div>

              {/* Statistics Section */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 md:gap-12 pt-2 sm:pt-4">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500">3+</span>
                  <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mt-1 text-center lg:text-left">Years of Experience</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500">20+</span>
                  <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mt-1 text-center lg:text-left">Project Completed</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500">10+</span>
                  <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mt-1 text-center lg:text-left">Satisfied Clients</span>
                </div>
              </div>

              {/* Download CV Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={handleDownloadCV}
                  className="mt-6 sm:mt-8 bg-yellow-500 text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <span>Download CV</span>
                  <FaDownload className="text-xs sm:text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


