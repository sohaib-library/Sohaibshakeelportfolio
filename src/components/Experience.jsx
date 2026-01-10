import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      role: 'AI Engineer',
      company: 'Blacklake',
      duration: '2023 - Present',
      responsibilities: 'Leading creation of intelligent automation systems and multi-agent architectures for real estate. Building scalable AI solutions that enhance property search and workflow automation.',
      achievements: [
        'Boosted workflow efficiency by 80% through AI-driven property search models',
        'Designed and implemented multi-agent architecture reducing processing time by 60%',
        'Led team of 3 developers in building production-ready AI systems'
      ]
    },
    {
      role: 'AI Engineer',
      company: 'AITechWorks',
      duration: '2022 - 2023',
      responsibilities: 'Driving development of advanced voice agents and automation workflows. Creating intelligent conversational AI systems for client engagement and appointment scheduling.',
      achievements: [
        'Enhanced client engagement and appointment scheduling by 50%',
        'Built voice agent system handling 1000+ daily interactions',
        'Implemented NLP models with 95% accuracy for intent recognition'
      ]
    },
    {
      role: 'Backend Developer',
      company: 'Soliq Solutions',
      duration: '2021 - 2022',
      responsibilities: 'Engineered RESTful APIs and backend systems in Django for production applications. Optimized database queries and implemented caching strategies for improved performance.',
      achievements: [
        'Reduced API response latency by 30% through optimized architecture',
        'Developed scalable backend handling 10K+ requests per minute',
        'Implemented automated testing reducing bugs by 40%'
      ]
    }
  ]

  return (
    <section 
      id="experience" 
      className="py-20 md:py-32 px-4 relative overflow-hidden"
      style={{
        backgroundColor: '#24251d',
        background: `
          radial-gradient(ellipse at center, #2a2b23 0%, #24251d 50%, #24251d 100%),
          repeating-linear-gradient(
            0deg,
            #24251d,
            #24251d 1px,
            rgba(35, 37, 29, 0.15) 1px,
            rgba(35, 37, 29, 0.15) 2px
          )
        `,
        backgroundSize: '100% 100%, 100% 3px',
      }}
    >
      {/* Subtle overlay for depth variation */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center 30%, 
              rgba(42, 43, 35, 0.3) 0%, 
              rgba(36, 37, 29, 0.1) 40%,
              transparent 70%
            )
          `
        }}
      ></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
              Work Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in AI engineering and backend development and the impact I've made
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-10 top-0 bottom-0 w-0.5">
            <div className="h-full w-full bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 opacity-50 shadow-lg shadow-yellow-500/30"></div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-12 relative">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-20 md:pl-32">
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-10 top-6 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-4 border-[#0a0a0a] shadow-lg shadow-yellow-500/50 flex items-center justify-center ring-4 ring-yellow-500/20">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-yellow-400 animate-pulse"></div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 shadow-lg hover:shadow-yellow-500/10">
                  {/* Header with Role and Date */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-yellow-400">
                        <FaBriefcase className="text-sm" />
                        <span className="text-sm md:text-base font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm md:text-base font-medium whitespace-nowrap">
                      {exp.duration}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    {exp.responsibilities}
                  </p>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-yellow-400 font-bold text-base mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="text-gray-300 flex items-start gap-3 text-sm md:text-base">
                          <span className="text-yellow-400 mt-1.5 flex-shrink-0">▶</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience


