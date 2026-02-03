import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: FaGithub,
      href: '#',
      label: 'GitHub'
    },
    {
      icon: FaTwitter,
      href: '#',
      label: 'Twitter'
    },
    {
      icon: FaWhatsapp,
      href: '#',
      label: 'WhatsApp'
    }
  ]

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-yellow-400 text-3xl font-bold mb-4">SS</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building intelligent systems that drive results. Passionate about creating 
              innovative web solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-yellow-400 text-xl transition-colors duration-300"
                  >
                    <IconComponent />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:saadullahsaleem7@gmail.com" className="hover:text-yellow-400 transition-colors">
                  saadullahsaleem7@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923104321784" className="hover:text-yellow-400 transition-colors">
                  +92 310 4321784
                </a>
              </li>
              <li className="text-gray-500">Lahore, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Saadullah Saleem. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer