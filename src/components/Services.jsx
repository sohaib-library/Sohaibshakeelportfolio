import { FaRobot, FaServer, FaComments, FaBolt, FaDatabase, FaCloud } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaRobot,
      title: 'Agentic AI & LLMs',
      description: 'Building intelligent multi-agent systems, conversational AI, and LLM-powered applications using LangChain, OpenAI, and custom frameworks.'
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Creating robust RESTful APIs and scalable backend systems using Python, Django, FastAPI with optimized database architectures.'
    },
    {
      icon: FaComments,
      title: 'Voice & WhatsApp Agents',
      description: 'Designing conversational AI assistants for voice calls and WhatsApp using Resell.ai, Twilio, and advanced NLP models.'
    },
    {
      icon: FaBolt,
      title: 'Workflow Automation',
      description: 'Streamlining business operations with RPA, Zapier, and GoRight.io integrations that reduce manual work and boost efficiency.'
    },
    {
      icon: FaDatabase,
      title: 'Vector Databases & RAG',
      description: 'Implementing semantic search and retrieval systems using PGVector, Pinecone, and custom RAG architectures for intelligent data access.'
    },
    {
      icon: FaCloud,
      title: 'Cloud & DevOps',
      description: 'Deploying and scaling applications on GCP with Kubernetes, Docker, and CI/CD pipelines for production-ready solutions.'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-semibold mb-4">
            WHAT I DO
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Full-Stack AI & Automation <span className="text-yellow-400">Solutions</span>
          </h2>
          <p className="text-yellow-400 text-lg">
            Delivering scalable, intelligent solutions across the entire technology stack
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon
            return (
              <div key={idx} className="group relative bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-yellow-500 transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/10">
                <div className="text-yellow-400 text-4xl mb-4 flex items-center justify-start">
                  <IconComponent className="transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services


