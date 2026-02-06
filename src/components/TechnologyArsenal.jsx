import { useState } from 'react'
import { 
  FaPython, FaNodeJs, FaReact, FaAws, FaDocker, FaDatabase, FaTools, 
  FaCode, FaCloud, FaRobot, FaMobileAlt, FaWhatsapp, FaTelegram, FaMicrosoft 
} from 'react-icons/fa'
import { 
  SiFastapi, SiOpenai, SiDjango, SiExpress, SiPostgresql, SiRedis, 
  SiKubernetes, SiMongodb, SiFirebase, SiGooglecloud, SiTypescript, 
  SiJavascript, SiNextdotjs, SiTailwindcss, SiN8N, SiZapier, SiWebflow, 
  SiAirtable, SiTwilio, SiAnthropic
} from 'react-icons/si'
// Using generic icons for some specific tools if exact icons aren't available in standard set ensuring no build errors
import { TbBrandNextjs, TbApi } from 'react-icons/tb'

const TechnologyArsenal = () => {
  const [activeTab, setActiveTab] = useState('All')

  // Data Structure - Frontend Development Only
  const allSkills = [
    // Core Frontend
    { name: 'React', icon: FaReact, category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
    { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend' },
    
    // Styling
    { name: 'Tailwind', icon: SiTailwindcss, category: 'Styling' },
    
    // Tools & Services
    { name: 'Firebase', icon: SiFirebase, category: 'Tools' },
    { name: 'Webflow', icon: SiWebflow, category: 'Tools' },
  ]

  const tabs = ['All', 'Frontend', 'Styling', 'Tools']

  const filteredSkills = activeTab === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeTab)

  return (
    <section id="technologies" className="py-20 px-4 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Ambience matches Hero/About */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My <span className="text-yellow-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I've mastered and my proficiency levels
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)] scale-105'
                  : 'bg-transparent text-gray-400 border border-gray-800 hover:border-yellow-500/50 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Circular Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 place-items-center">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div 
                key={index} 
                className="group flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500"
               
              >
                {/* Circle Container */}
                <div className="relative w-24 h-24 rounded-full bg-[#1a0f08] border border-yellow-500/20 flex items-center justify-center transition-all duration-300 group-hover:border-yellow-500 group-hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] group-hover:-translate-y-2">
                  <Icon className="text-4xl text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" />
                  
                  {/* Floating Particles/Glow effect on hover (Optional, purely CSS) */}
                  <div className="absolute inset-0 rounded-full bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Skill Name */}
                <span className="text-gray-400 font-medium group-hover:text-yellow-500 transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechnologyArsenal
