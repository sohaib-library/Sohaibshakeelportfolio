const CTA = () => {
  return (
    <section className="py-20 px-4 bg-yellow-400">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Ready to start working together?
        </h2>
        <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
          Transform your ideas into intelligent systems that drive results. Whether you're a startup, enterprise, or visionary team - let's build something amazing.
        </p>
        <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all flex items-center gap-2 mx-auto shadow-lg">
          Let's Talk
          <span>→</span>
        </button>
      </div>
    </section>
  )
}

export default CTA

