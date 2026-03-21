import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  Instagram,
  MapPin,
  Clock,
  Heart,
  Sparkles,
  CheckCircle2,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

import { servicesData, packagesData } from './data';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans bg-nude-50 text-brown-800 selection:bg-gold-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container-custom flex justify-between items-center">
          <div className="text-2xl font-serif font-semibold tracking-wide text-brown-900 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            Essential Relief
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Services', 'Packages', 'How it Works'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-sm uppercase tracking-widest font-medium text-brown-800 hover:text-gold-500 transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('packages')}
              className="bg-gold-500 text-white px-6 py-2.5 uppercase tracking-widest text-xs font-medium hover:bg-gold-600 transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brown-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col space-y-4">
            {['About', 'Services', 'Packages', 'How it Works'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-left text-sm uppercase tracking-widest font-medium text-brown-800 hover:text-gold-500 py-2 border-b border-nude-100"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-nude-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-gold-600 text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-medium">
                Essential Relief Mobile Spa
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brown-900 mb-6 leading-tight">
                Luxury In-Home Massage, Facials & Body Treatments in Orlando
              </h1>
              <p className="text-brown-700 text-lg md:text-xl mb-10 font-light leading-relaxed max-w-lg">
                Enjoy a personalized spa experience without leaving the comfort of your vacation home, hotel, or residence.
              </p>
              <button 
                onClick={() => scrollToSection('packages')}
                className="bg-gold-500 text-white px-10 py-4 uppercase tracking-widest text-sm font-medium transition-all duration-300 hover:bg-brown-900 hover:shadow-lg"
              >
                Book Your Appointment
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="order-1 lg:order-2 relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" 
                alt="Relaxing massage" 
                className="w-full h-[400px] md:h-[600px] object-cover rounded-sm shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-gold-400 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-r-2 border-t-2 border-gold-400 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-nude-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-brown-900 text-center">Your Private Spa Experience in Orlando</h2>
              <div className="w-16 h-1 bg-gold-500 mb-10 mx-auto"></div>
              <div className="space-y-6 text-brown-700 leading-relaxed text-lg font-light text-center">
                <p>
                  Essential Relief Mobile Spa provides professional mobile spa services delivered directly to your location.
                </p>
                <p>
                  Our mission is to create a relaxing, luxurious, and convenient spa experience for guests staying in vacation homes, hotels, and private residences throughout the Orlando area.
                </p>
                <p>
                  Our treatments are designed to promote relaxation, improve circulation, reduce stress, support lymphatic health, and enhance overall well-being. Instead of traveling to a spa, you can enjoy high-quality treatments in the comfort and privacy of your own space.
                </p>
              </div>
              
              <div className="mt-12 bg-white p-8 md:p-10 border border-nude-100 shadow-sm">
                <h3 className="text-2xl font-serif text-brown-900 mb-6 text-center">Perfect for:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {[
                    'Vacation homes', 'Airbnb guests', 'Resort stays', 
                    'Couples vacations', 'Girls trips and celebrations', 'Families visiting the theme parks'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-brown-700">
                      <CheckCircle2 className="text-gold-500 mr-3 flex-shrink-0" size={18} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <FadeIn className="text-center mb-20">
            <h2 className="text-gold-500 text-sm uppercase tracking-[0.2em] mb-3 font-medium">Our Offerings</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brown-900">Spa Treatments</h3>
            <div className="w-24 h-1 bg-nude-200 mx-auto mt-6"></div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
            {servicesData.map((category, idx) => (
              <div key={idx} className="mb-8">
                <div className="flex items-center mb-8">
                  <h4 className="text-2xl font-serif text-brown-900">{category.category}</h4>
                  <div className="h-px bg-nude-200 flex-grow ml-6"></div>
                </div>
                <div className="space-y-8">
                  {category.items.map((item, itemIdx) => (
                    <FadeIn key={itemIdx} delay={itemIdx * 0.05} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h5 className="text-lg font-medium text-brown-900 group-hover:text-gold-600 transition-colors pr-4">{item.title}</h5>
                        <div className="text-right flex-shrink-0">
                          {item.pricing.map((p, pIdx) => (
                            <div key={pIdx} className="text-sm font-medium text-brown-800">
                              {p.time && <span className="text-brown-500 mr-2 font-light">{p.time}</span>}
                              {p.price}
                            </div>
                          ))}
                        </div>
                      </div>
                      {item.desc && <p className="text-brown-700 font-light text-sm leading-relaxed pr-12">{item.desc}</p>}
                    </FadeIn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="section-padding bg-brown-900 text-nude-50">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-3 font-medium">Curated Experiences</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Spa Packages</h3>
            <div className="w-24 h-1 bg-gold-600 mx-auto mt-6"></div>
          </FadeIn>

          <div className="space-y-24">
            {packagesData.map((category, idx) => (
              <div key={idx}>
                <h4 className="text-3xl font-serif text-[#FFD700] mb-10 text-center">{category.category}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                  {category.items.map((pkg, pIdx) => (
                    <FadeIn key={pIdx} delay={pIdx * 0.1} className="bg-brown-800/50 backdrop-blur-sm p-8 border border-brown-700 hover:border-gold-500 transition-colors flex flex-col h-full">
                      <Sparkles className="text-gold-400 mb-4" size={24} />
                      <h5 className="text-2xl font-serif text-white mb-4">{pkg.title}</h5>
                      <p className="text-gold-300 text-sm font-medium mb-6 uppercase tracking-wider leading-relaxed flex-grow">{pkg.includes}</p>
                      {pkg.desc && <p className="text-nude-200 font-light text-sm mb-4 italic">{pkg.desc}</p>}
                      <div className="mt-auto pt-6 border-t border-brown-700">
                        {pkg.pricing.map((p, pIdx) => (
                          <div key={pIdx} className="flex justify-between items-center text-white font-medium">
                            {p.time && <span className="text-nude-200">{p.time}</span>}
                            <span className="text-lg text-[#FFD700]">{p.price}</span>
                          </div>
                        ))}
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding bg-nude-100">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="text-gold-500 text-sm uppercase tracking-[0.2em] mb-3 font-medium">Simple Process</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brown-900">How It Works</h3>
            <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gold-300 -z-10 transform -translate-y-1/2"></div>
            
            {[
              { step: '01', title: 'Choose Your Treatment', desc: 'Select the massage, facial, body treatment, or spa package that best fits your needs.' },
              { step: '02', title: 'Book Your Appointment', desc: 'Contact us to schedule your spa session at your preferred date and time.' },
              { step: '03', title: 'We Come to You', desc: 'Our professional mobile spa team arrives at your vacation home, hotel, or residence fully prepared.' },
              { step: '04', title: 'Relax and Enjoy', desc: 'Experience the comfort and relaxation of a private spa treatment in your own space.' }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15} className="text-center bg-white p-8 rounded-sm shadow-sm relative">
                <div className="w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center text-lg font-serif mx-auto mb-6 shadow-md">
                  {item.step}
                </div>
                <h4 className="text-xl font-serif text-brown-900 mb-3">{item.title}</h4>
                <p className="text-brown-700 font-light text-sm">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-900 text-nude-100 py-16 border-t border-brown-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-serif text-gold-400 mb-4">Essential Relief Mobile Spa</h2>
          <p className="text-lg font-light mb-8 max-w-xl mx-auto">
            Relaxation Delivered to Your Door. Book your private spa experience and enjoy professional treatments in the comfort of your vacation home.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-nude-200 hover:text-gold-400 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-nude-200 hover:text-gold-400 transition-colors"><Mail size={24} /></a>
            <a href="#" className="text-nude-200 hover:text-gold-400 transition-colors"><Phone size={24} /></a>
          </div>
          <div className="text-sm font-light text-brown-600">
            &copy; {new Date().getFullYear()} Essential Relief Mobile Spa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
