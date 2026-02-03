import { useEffect, useRef, useState } from 'react';

// Project preview images - Real website screenshots
import corviaHealthImg from '/corvia-real.png';
import packersMoversImg from '/packers-movers-real.png';
import forFormImg from '/for-form-real.png';
import helixBiogenImg from '/helix-biogen-real.png';
import jmeAgricultureImg from '/jme-agriculture-real.png';
import swaibaPortfolioImg from '/swaiba-portfolio-real.png';
import umairPortfolioImg from '/umair-portfolio-real.png';
import localDevImg from '/local-dev.svg';
import prevoPortugalImg from '/prevo-portugal-real.png';

// Mobile versions
import corviaHealthMobileImg from '/corvia-mobile-real.png';
import helixBiogenMobileImg from '/helix-biogen-mobile-real.png';
import forFormMobileImg from '/for-form-mobile-real.png';
import swaibaPortfolioMobileImg from '/swaiba-portfolio-mobile-real.png';
import umairPortfolioMobileImg from '/umair-portfolio-mobile-real.png';

// Use <a> for navigation in React (or react-router-dom Link if using react-router)
function ProjectsSection() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [showMobileView, setShowMobileView] = useState(false);

  const projects = [
    {
      title: 'Corvia Health',
      features: ['Health Insurance Platform', 'Member Portal', 'Provider Network', 'Virtual Care'],
      image: corviaHealthImg,
      mobileImage: corviaHealthMobileImg,
      link: 'https://www.corviahealth.me/',
      category: 'Healthcare'
    },
    {
      title: 'Packers & Movers',
      features: ['Relocation Services', 'Booking System', 'Service Tracking', 'Quote Calculator'],
      image: packersMoversImg,
      mobileImage: packersMoversImg, // Using same image for now
      link: 'https://packers-movers.in/',
      category: 'Services'
    },
    {
      title: 'For-Form',
      features: ['Form Builder', 'Dynamic Forms', 'Data Collection', 'Responsive Design'],
      image: forFormImg,
      mobileImage: forFormMobileImg,
      link: 'https://for-form.vercel.app/',
      category: 'Tools'
    },
    {
      title: 'Helix Biogen',
      features: ['Biomedical Research', 'Scientific Innovation', 'Healthcare Solutions', 'Research Institute'],
      image: helixBiogenImg,
      mobileImage: helixBiogenMobileImg,
      link: 'https://helix-biogen.vercel.app/',
      category: 'Research'
    },
    {
      title: 'JME Agriculture',
      features: ['Agricultural Solutions', 'Farm Management', 'Crop Analytics', 'Smart Farming'],
      image: jmeAgricultureImg,
      mobileImage: jmeAgricultureImg, // Using same image for now
      link: 'https://jmeagrcult.cognitojs.com/',
      category: 'Agriculture'
    },
    {
      title: 'Swaiba Naveen Portfolio',
      features: ['Personal Portfolio', 'Project Showcase', 'Skills Display', 'Contact Form'],
      image: swaibaPortfolioImg,
      mobileImage: swaibaPortfolioMobileImg,
      link: 'https://swaibanaveenportfolio.vercel.app/',
      category: 'Portfolio'
    },
    {
      title: 'Umair Usman Portfolio',
      features: ['Developer Portfolio', 'Work Experience', 'Technical Skills', 'Project Gallery'],
      image: umairPortfolioImg,
      mobileImage: umairPortfolioMobileImg,
      link: 'https://umairusmianportfolio.vercel.app/',
      category: 'Portfolio'
    },
    {
      title: 'Local Development',
      features: ['Development Environment', 'Local Testing', 'API Integration', 'Real-time Updates'],
      image: localDevImg,
      mobileImage: localDevImg, // Using same image for now
      link: 'http://localhost:3000/',
      category: 'Development'
    },
    {
      title: 'Prevo Portugal',
      features: ['Business Solutions', 'Corporate Services', 'Digital Platform', 'Client Management'],
      image: prevoPortugalImg,
      mobileImage: prevoPortugalImg, // Using same image for now
      link: 'https://prevo.pt/',
      category: 'Business'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !scrollContainerRef.current) return;

      const container = containerRef.current;
      const scrollContainer = scrollContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (containerRect.top <= 0 && containerRect.bottom >= windowHeight) {
        // Calculate scroll progress within the section
        const sectionProgress = Math.abs(containerRect.top) / (containerRect.height - windowHeight);
        const clampedProgress = Math.max(0, Math.min(1, sectionProgress));

        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const targetScrollLeft = clampedProgress * maxScrollLeft;

        scrollContainer.scrollLeft = targetScrollLeft;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-[250vh] md:h-[300vh] pt-10 relative"
      style={{
        background: 'radial-gradient(ellipse at center, #302711 0%, #191509 100%)',
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start px-4 sm:px-6 lg:px-12 mb-6 sm:mb-8 lg:mb-10 gap-3 lg:gap-0">
          <div className="flex-1">
            <p className="text-gray-500 text-xs sm:text-sm mb-2 font-normal tracking-wide">
              Explore Our Work:
            </p>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Featured Projects<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>& Portfolio
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end lg:text-right max-w-xs lg:max-w-sm gap-3">
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Explore our collection of live projects and applications. Each project showcases modern web development practices and innovative solutions.
            </p>
            <div className="flex items-center gap-3">
              {/* Desktop/Mobile Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowMobileView(false)}
                  className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                    !showMobileView 
                      ? 'bg-green-500 text-black' 
                      : 'border border-gray-500 text-gray-400 hover:border-green-500 hover:text-green-500'
                  }`}
                >
                  Desktop
                </button>
                <button
                  onClick={() => setShowMobileView(true)}
                  className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                    showMobileView 
                      ? 'bg-green-500 text-black' 
                      : 'border border-gray-500 text-gray-400 hover:border-green-500 hover:text-green-500'
                  }`}
                >
                  Mobile
                </button>
              </div>
              <a
                href="/projects"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-green-500 flex items-center justify-center group hover:bg-green-500 transition-all duration-300"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 group-hover:text-black transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Horizontal Scroll Themes */}
        <div className="overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-1  px-4 sm:px-6 lg:px-12 overflow-x-hidden"
            style={{
              width: '100%',
              scrollBehavior: 'smooth'
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[200px] sm:w-[220px] lg:w-[260px] h-[280px] sm:h-[320px] lg:h-[430px] overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Background Image */}
                <img
                  src={typeof (showMobileView ? project.mobileImage : project.image) === 'string' 
                    ? (showMobileView ? project.mobileImage : project.image) 
                    : (showMobileView ? project.mobileImage : project.image).default}
                  alt={`${project.title} - ${showMobileView ? 'Mobile' : 'Desktop'} View`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    transition: 'transform 0.5s',
                  }}
                  className="object-cover group-hover:scale-105"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" style={{zIndex:2}} />
                <div className="absolute inset-0 bg-gray-500 hover:blur-2xl group-hover:bg-transparent transition-all duration-500" style={{zIndex:2}} />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <span className="bg-blue-500/80 backdrop-blur-sm text-white text-[10px] sm:text-xs px-2 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                  <span className="bg-gray-800/80 backdrop-blur-sm text-white text-[8px] sm:text-[10px] px-2 py-1 rounded-full font-medium">
                    {showMobileView ? '📱 Mobile' : '🖥️ Desktop'}
                  </span>
                </div>

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5" style={{zIndex:3}}>
                  <h3 className="text-white text-sm sm:text-base lg:text-lg font-bold mb-3">
                    {project.title}
                  </h3>
                  <ul className="space-y-1.5 mb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-200 text-[10px] sm:text-xs">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white text-xs sm:text-sm font-medium group/btn hover:text-blue-400 transition-colors"
                    >
                      <span className="border border-white/50 rounded-full px-3 py-1.5 group-hover/btn:border-blue-400 transition-colors backdrop-blur-sm">
                        View Project
                      </span>
                      <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-500 rounded-full flex items-center justify-center group-hover/btn:bg-blue-600 transition-colors">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;