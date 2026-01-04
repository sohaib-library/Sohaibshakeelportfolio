const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Card */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-30"></div>
              <div className="relative bg-[#1a1a1a] border-2 border-yellow-400 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-2xl font-bold">
                    SS
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold">Saadullah S.</h3>
                    <p className="text-gray-400 text-sm">AI Engineer</p>
                    <p className="text-gray-400 text-sm">Backend Developer</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-2/3">
            <div className="inline-block px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-semibold mb-6">
              ABOUT ME
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#1a1a1a]">Innovate with</span>
              <br />
              <span className="text-[#1a1a1a]">Intelligence,</span>
              <br />
              <span className="text-yellow-400">Build with Purpose</span>
            </h2>
            
            <div className="text-gray-300 text-lg leading-relaxed mb-8 space-y-4">
              <p>
                I'm <strong className="text-white">Saadullah Bin Saleem</strong>, an AI Engineer and Backend Developer passionate about creating intelligent systems and automation solutions that drive real business value.
              </p>
              <p>
                I specialize in <strong className="text-yellow-400">Agentic AI, Gen AI tools</strong>, and backend architectures using <strong className="text-yellow-400">Python, Django, and FastAPI</strong>. My focus is on building smart, scalable solutions that automate workflows, power voice agents, and enhance real-world efficiency.
              </p>
              <p>
                Driven by curiosity and creativity, I transform complex ideas into seamless, high-impact AI systems that help businesses scale and succeed.
              </p>
            </div>
            
            {/* Feature Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 text-center">
                <div className="text-yellow-400 text-3xl mb-2">💡</div>
                <p className="text-white font-semibold">Innovation</p>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 text-center">
                <div className="text-yellow-400 text-3xl mb-2">🤝</div>
                <p className="text-white font-semibold">Collaboration</p>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 text-center">
                <div className="text-yellow-400 text-3xl mb-2">🎯</div>
                <p className="text-white font-semibold">Precision</p>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 text-center">
                <div className="text-yellow-400 text-3xl mb-2">⭐</div>
                <p className="text-white font-semibold">Impact</p>
              </div>
            </div>
            
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all flex items-center gap-2">
              Let's Work Together
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

