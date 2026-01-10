import { FaTools, FaDatabase, FaLaptopCode, FaMagic, FaPhone } from 'react-icons/fa'

const TechnologyArsenal = () => {
  const technologies = [
    {
      category: 'backend',
      title: 'Backend',
      icon: FaTools,
      items: ['Python', 'FastAPI', 'OpenAI', 'Node.js', 'Django', 'LangChain', 'Anthropic', 'Express']
    },
    {
      category: 'databases',
      title: 'Databases & Cloud',
      icon: FaDatabase,
      items: ['PostgreSQL', 'Redis', 'MSSQL', 'Kubernetes', 'AWS', 'MongoDB', 'Firebase', 'Docker', 'GCP']
    },
    {
      category: 'frontend',
      title: 'Frontend & UI',
      icon: FaLaptopCode,
      items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'nocode',
      title: 'No-Code & Automation',
      icon: FaMagic,
      items: ['N8N', 'GoHighLevel', 'Zapier', 'Make', 'Webflow', 'Meltano', 'BardAI', 'Bubble', 'Airtable']
    },
    {
      category: 'voice',
      title: 'Voice & Messaging',
      icon: FaPhone,
      items: ['Twilio', 'Telegram Bot', 'ElevenLabs', 'Whatsapp API', 'Azure Speech', 'Deepgram']
    }
  ]

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
          {technologies.map((techCategory, idx) => {
            const IconComponent = techCategory.icon
            return (
              <div key={idx} className="group bg-[#1a1a1a] border border-yellow-500/50 rounded-lg p-6 hover:border-yellow-500 transition-all hover:shadow-lg hover:shadow-yellow-500/20 transform hover:-translate-y-1">
                <h3 className="text-yellow-400 text-xl font-bold mb-4 flex items-center gap-3">
                  <IconComponent className="transform group-hover:scale-110 transition-transform duration-300" />
                  <span>{techCategory.title}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techCategory.items.map((tech, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="bg-[#0a0a0a] border border-yellow-500/50 text-white px-3 py-1 rounded text-sm hover:border-yellow-400 hover:bg-yellow-500/10 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechnologyArsenal


