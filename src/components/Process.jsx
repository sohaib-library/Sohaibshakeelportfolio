const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Strategize',
      description: 'Understand your vision, define goals, and craft a roadmap for success.'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Create intuitive architectures and user experiences that delight.'
    },
    {
      number: '03',
      title: 'Develop',
      description: 'Build robust, scalable solutions with modern technologies.'
    },
    {
      number: '04',
      title: 'Test',
      description: 'Ensure quality, performance, and reliability at every level.'
    },
    {
      number: '05',
      title: 'Launch',
      description: 'Deploy seamlessly and optimize for peak performance.'
    },
    {
      number: '06',
      title: 'Scale',
      description: 'Iterate, improve, and expand with confidence and agility.'
    }
  ]

  return (
    <section id="process" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 border border-yellow-500 text-white rounded-full text-sm font-semibold mb-4">
            HOW I WORK
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            A Streamlined Process, <span className="text-yellow-400">Built for Results</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
          {steps.slice(0, 5).map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-yellow-500 bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-yellow-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <div className="text-center max-w-xs">
            <div className="w-16 h-16 rounded-full border-2 border-yellow-500 bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">{steps[5].number}</span>
            </div>
            <h3 className="text-white font-semibold mb-2">{steps[5].title}</h3>
            <p className="text-yellow-400 text-sm">{steps[5].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process

