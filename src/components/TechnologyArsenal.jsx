const TechnologyArsenal = () => {
  const technologies = {
    backend: ['Python', 'FastAPI', 'OpenAI', 'Node.js', 'Django', 'LangChain', 'Anthropic', 'Express'],
    databases: ['PostgreSQL', 'Redis', 'MSSQL', 'Kubernetes', 'AWS', 'MongoDB', 'Firebase', 'Docker', 'GCP'],
    frontend: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS'],
    nocode: ['N8N', 'GoHighLevel', 'Zapier', 'Make', 'Webflow', 'Meltano', 'BardAI', 'Bubble', 'Airtable'],
    voice: ['Twilio', 'Telegram Bot', 'ElevenLabs', 'Whatsapp API', 'Azure Speech', 'Deepgram']
  }

  return (
    <section id="technologies" className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-semibold mb-4">
            TECHNOLOGY ARSENAL
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">Powered By World-Class Technologies</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Building cutting-edge solutions with industry-leading tools and platforms trusted by top companies worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Backend */}
          <div className="bg-[#1a1a1a] border border-yellow-500 rounded-lg p-6">
            <h3 className="text-yellow-400 text-xl font-bold mb-4 flex items-center gap-2">
              🛠️ Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.backend.map((tech, idx) => (
                <span key={idx} className="bg-[#0a0a0a] border border-yellow-500 text-white px-3 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Databases & Cloud */}
          <div className="bg-[#1a1a1a] border border-yellow-500 rounded-lg p-6">
            <h3 className="text-yellow-400 text-xl font-bold mb-4 flex items-center gap-2">
              🗄️ Databases & Cloud
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.databases.map((tech, idx) => (
                <span key={idx} className="bg-[#0a0a0a] border border-yellow-500 text-white px-3 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Frontend & UI */}
          <div className="bg-[#1a1a1a] border border-yellow-500 rounded-lg p-6">
            <h3 className="text-yellow-400 text-xl font-bold mb-4 flex items-center gap-2">
              💻 Frontend & UI
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.frontend.map((tech, idx) => (
                <span key={idx} className="bg-[#0a0a0a] border border-yellow-500 text-white px-3 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* No-Code & Automation */}
          <div className="bg-[#1a1a1a] border border-yellow-500 rounded-lg p-6">
            <h3 className="text-yellow-400 text-xl font-bold mb-4 flex items-center gap-2">
              ✨ No-Code & Automation
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.nocode.map((tech, idx) => (
                <span key={idx} className="bg-[#0a0a0a] border border-yellow-500 text-white px-3 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Voice & Messaging */}
          <div className="bg-[#1a1a1a] border border-yellow-500 rounded-lg p-6">
            <h3 className="text-yellow-400 text-xl font-bold mb-4 flex items-center gap-2">
              📞 Voice & Messaging
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.voice.map((tech, idx) => (
                <span key={idx} className="bg-[#0a0a0a] border border-yellow-500 text-white px-3 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologyArsenal

