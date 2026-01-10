import { FaEnvelope, FaPhone, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'saadullahsaleem7@gmail.com',
      link: 'mailto:saadullahsaleem7@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+92 310 4321784',
      link: 'tel:+923104321784'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: '#'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: 'Chat on Whatsapp',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 border border-yellow-500 text-white rounded-full text-sm font-semibold mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Let's Build Something <span className="text-yellow-400">Amazing</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, idx) => {
            const IconComponent = method.icon
            return (
              <a
                key={idx}
                href={method.link}
                className="group relative bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 text-center hover:border-yellow-500 transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <div className="text-yellow-400 text-4xl mb-4 flex justify-center">
                  <IconComponent className="transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-white font-semibold mb-2">{method.label}</h3>
                <p className="text-gray-400 text-sm">{method.value}</p>
              </a>
            )
          })}
        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-yellow-400 text-2xl font-bold mb-2">SS</div>
              <p className="text-gray-400">Building intelligent systems that drive results.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="text-yellow-400 font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
                  <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
                  <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
                  <li><a href="#portfolio" className="hover:text-yellow-400 transition">Portfolio</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-400 font-semibold mb-3">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="mailto:saadullahsaleem7@gmail.com" className="hover:text-yellow-400 transition">Email</a></li>
                  <li><a href="#" className="hover:text-yellow-400 transition">LinkedIn</a></li>
                  <li><a href="tel:+923104321784" className="hover:text-yellow-400 transition">Phone</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


