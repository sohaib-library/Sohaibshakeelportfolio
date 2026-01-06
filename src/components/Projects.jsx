const Projects = () => {
  const projects = [
    {
      featured: true,
      tags: ['FullStack AI', 'Code-Based'],
      title: 'AI Powered Interview Portal',
      description: 'Full-stack AI-powered interview system using FastAPI, React, and OpenAI APIs to automate candidate screening with smart evaluation and real-time feedback.',
      stats: ['70% Time Saved', '100+ Interviews'],
      tech: ['FastAPI', 'React', 'OpenAI', 'PostgreSQL']
    },
    {
      featured: false,
      tags: ['No-Code'],
      title: 'Lead Automation System',
      description: 'Intelligent lead capture and follow-up automation using SMS, pipelines, triggers, and webhooks for appointment booking and CRM updates.',
      stats: ['50% Conversion ↑'],
      tech: ['GoHighLevel', 'Zapier', 'Webhooks']
    },
    {
      featured: false,
      tags: ['Voice AI'],
      title: 'Voice Booking Assistant',
      description: 'Voice booking assistant using FastAPI, Azure Speech Services, and ElevenLabs AI with real-time voice-to-schedule automation.',
      tech: ['FastAPI', 'Azure', 'ElevenLabs AI', 'SQL']
    },
    {
      featured: false,
      tags: ['LangChain'],
      title: 'AI WhatsApp Property Assistant',
      description: 'WhatsApp-based real estate assistant using LangChain and VectorDB for accurate property matching and instant recommendations.',
      tech: ['LangChain', 'VectorDB', 'WhatsApp API']
    },
    {
      featured: false,
      tags: ['Automation'],
      title: 'NBN Lead Calling Workflow',
      description: 'Comprehensive automation for cold calling and lead management using NBN and Retool AI with database synchronization.',
      tech: ['NBN', 'Retool AI', 'Database']
    }
  ]

  return (
    <section id="portfolio" className="py-20 px-4 bg-[#1a1a1a]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-semibold mb-4">
            GET WORK
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg">
            Transforming ideas into high-impact intelligent systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#0a0a0a] rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all">
              <div className="h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative">
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                {project.stats && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stats.map((stat, statIdx) => (
                      <span key={statIdx} className="text-yellow-400 text-sm font-semibold">
                        {stat}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, techIdx) => (
                    <span key={techIdx} className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


