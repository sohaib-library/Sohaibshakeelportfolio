const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Deeply understand your needs, context, and user requirements through research and collaboration.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Define clear goals, priorities, and a results-driven roadmap tailored to your vision.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Craft intuitive user experiences and elegant interfaces that align with both function and brand.',
    },
    {
      number: '04',
      title: 'Develop',
      description: 'Build secure, scalable, and maintainable solutions using proven modern technologies.',
    },
    {
      number: '05',
      title: 'Test & Refine',
      description: 'Validate through rigorous testing, feedback cycles, and continuous improvements.',
    },
    {
      number: '06',
      title: 'Deploy & Support',
      description: 'Launch confidently, monitor success, and provide ongoing support for growth.',
    }
  ]

  return (
    <section id="process" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="text-4xl md:text-6xl font-bold mb-4">
            HOW I
            <span className="text-yellow-500"> WORK</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-yellow-500 bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-yellow-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

