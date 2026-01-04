const Experience = () => {
  const experiences = [
    {
      initials: 'BL',
      role: 'AI Engineer',
      company: 'Blacklake',
      responsibilities: [
        'Leading creation of intelligent automation systems and multi-agent architectures for real estate',
        'Boosted workflow efficiency by 80% through AI-driven property search models'
      ],
      highlight: '80% Efficiency Boost'
    },
    {
      initials: 'AS',
      role: 'AI Engineer',
      company: 'AITechWorks',
      responsibilities: [
        'Driving development of advanced voice agents and automation workflows.',
        'Enhanced client engagement and appointment scheduling by 50%'
      ],
      highlight: '50% Engagement +'
    },
    {
      initials: 'SS',
      role: 'Backend Developer',
      company: 'Soliq Solutions',
      responsibilities: [
        'Engineered RESTful APIs and backend systems in Django for production applications',
        'Reduced API response latency by 30% through optimized architecture'
      ],
      highlight: '30% Faster'
    },
    {
      initials: 'SL',
      role: 'Software Engineering Intern',
      company: 'Systems Limited',
      responsibilities: [
        'Supported enterprise software projects with focus on backend logic',
        'Strengthened skills in structured development and team collaboration'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 border border-yellow-500 text-yellow-400 rounded-full text-sm font-semibold mb-4">
            CAREER JOURNEY
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#1a1a1a]">Professional</span> <span className="text-yellow-400">Experience</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-400 text-black rounded flex items-center justify-center font-bold">
                  {exp.initials}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((resp, respIdx) => (
                  <li key={respIdx} className="text-gray-300 flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">▶</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
              {exp.highlight && (
                <div className="mt-4">
                  <span className="inline-block border border-yellow-500 text-yellow-400 px-4 py-2 rounded text-sm font-semibold">
                    {exp.highlight}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

