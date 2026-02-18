import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, Heart, ArrowRight, Clock, Tag, Facebook, Instagram, X } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import microsoftEventImage from '../assets/image.png';
import eventsHeroBg from '../assets/events-hero-bg.png';

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: 'SEEEDS Educational NonProfit Fundraiser',
      date: 'March 15, 2026',
      time: '7:00 PM - 9:00 PM',
      location: 'Seattle Community Center',
      initiative: 'Harmony for Hope',
      partner: 'SEEEDS Educational NonProfit',
      description: 'Join us for an evening of Carnatic fusion music supporting educational initiatives for underserved youth.',
      status: 'upcoming',
      ticketInfo: 'Suggested donation: $25'
    },
    {
      id: 2,
      title: 'Neerthuli Cultural Festival',
      date: 'April 8, 2026',
      time: '6:30 PM - 8:30 PM',
      location: 'Bellevue Arts Center',
      initiative: 'Cultural Outreach',
      partner: 'Neerthuli Organization',
      description: 'Celebrating South Indian culture and tradition through music at this vibrant community festival.',
      status: 'upcoming',
      ticketInfo: 'Free admission'
    },
    {
      id: 3,
      title: 'Northwest Folklife Festival',
      date: 'May 25-27, 2026',
      time: 'Various Times',
      location: 'Seattle Center',
      initiative: 'Community Engagement',
      partner: 'Northwest Folklife',
      description: 'Multi-day festival celebrating cultural diversity through music, featuring Dhwayam performances.',
      status: 'upcoming',
      ticketInfo: 'Festival pass required'
    },
    {
      id: 4,
      title: 'Spring Community Outreach',
      date: 'June 12, 2026',
      time: '2:00 PM - 4:00 PM',
      location: 'Sunrise Senior Living',
      initiative: 'Together Through Music',
      partner: 'Sunrise Senior Living',
      description: 'Bringing joy and musical connection to our senior community members.',
      status: 'upcoming',
      ticketInfo: 'Private event'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Sankara Healthcare Fundraiser',
      date: 'November 18, 2025',
      location: 'Redmond Community Hall',
      initiative: 'Harmony for Hope',
      partner: 'Sankara Healthcare',
      impact: '100 children received prosthetics',
      fundsRaised: '$8,000'
    },
    {
      id: 6,
      title: 'Microsoft Giving Campaign',
      date: 'October 22, 2025',
      location: 'Microsoft Campus',
      initiative: 'Harmony for Hope',
      partner: 'Asha for Education & REDP',
      impact: '100+ students supported',
      fundsRaised: '$4,000',
      image: microsoftEventImage
    },
    {
      id: 7,
      title: 'Diwali at Aegis Living',
      date: 'October 15, 2025',
      location: 'Aegis Living Bellevue',
      initiative: 'Together Through Music',
      partner: 'Aegis Living',
      impact: '50+ seniors engaged',
      fundsRaised: 'Community impact'
    },
    {
      id: 8,
      title: 'Community Arts Center Performance',
      date: 'August 20, 2025',
      location: 'Seattle Community Arts Center',
      initiative: 'Together Through Music',
      partner: 'Community Arts Center',
      impact: '60+ participants',
      fundsRaised: 'Educational outreach'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image with Parallax-like effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src={eventsHeroBg} 
            alt="Concert background" 
            className="w-full h-full object-cover"
          />
          {/* Professional Overlay System */}
          <div className="absolute inset-0 bg-[#00475b]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00475b]/40 to-[#F4F8F9]"></div>
          
          {/* Ambient Light Effects */}
          <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-teal-400/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[20vw] h-[20vw] bg-[#fbbf24]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container-max relative z-10 py-24 md:py-32">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center text-center">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="uppercase tracking-[0.4em] text-xs md:text-sm font-bold text-white mb-6 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20"
              >
                Experience the Magic
              </motion.span>
              
              <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight text-white">
                Our <span className="relative inline-block">
                  <span className="relative z-10 italic">Events</span>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 1.2 }}
                    className="absolute bottom-4 left-0 h-3 md:h-5 bg-teal-400/40 -z-0 rounded-full"
                  ></motion.div>
                </span>
              </h1>
              
              <div className="w-16 h-1 bg-white/30 mb-8 rounded-full"></div>
              
              <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90 font-light px-4">
                Join us at our upcoming performances and see how music creates 
                lasting change in our community. Every note played contributes 
                to a greater cause.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#014e63' }}>
                Upcoming <span className="gradient-text">Events</span>
              </h2>
              <Calendar style={{ color: '#014e63' }} size={48} />
            </div>
          </AnimatedSection>

          <div className="grid gap-8">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-white shadow-2xl border flex flex-col lg:flex-row" style={{ borderColor: 'rgba(1, 78, 99, 0.05)' }}>
                  {/* Left Content Side */}
                  <div className="flex-[2] p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: 'rgba(1, 78, 99, 0.1)', color: '#014e63' }}>
                        {event.initiative}
                      </span>
                      <div className="flex items-center text-[#014e63] font-medium opacity-80">
                        <Calendar className="mr-2" size={16} />
                        <span className="text-sm">{event.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-serif font-bold mb-4 text-[#014e63]">{event.title}</h3>
                    <p className="text-lg mb-8 leading-relaxed opacity-70 text-[#014e63]">{event.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-4">
                      <div className="flex items-center text-[#014e63]">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#F4F8F9]">
                          <Clock size={16} />
                        </div>
                        <span className="text-sm font-medium opacity-80">{event.time}</span>
                      </div>
                      <div className="flex items-center text-[#014e63]">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#F4F8F9]">
                          <MapPin size={16} />
                        </div>
                        <span className="text-sm font-medium opacity-80">{event.location}</span>
                      </div>
                      <div className="flex items-center text-[#014e63]">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#F4F8F9]">
                          <Users size={16} />
                        </div>
                        <span className="text-sm font-medium opacity-80">{event.partner}</span>
                      </div>
                      <div className="flex items-center text-[#014e63]">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#F4F8F9]">
                          <Tag size={16} />
                        </div>
                        <span className="text-sm font-medium opacity-80">{event.ticketInfo}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Action Side */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center items-center text-center" style={{ backgroundColor: 'rgba(1, 78, 99, 0.03)' }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm bg-white">
                      <Heart style={{ color: '#014e63' }} size={32} />
                    </div>
                    <h4 className="text-xl font-serif font-bold mb-3 text-[#014e63]">Get Involved</h4>
                    <p className="text-sm mb-8 leading-relaxed opacity-60 text-[#014e63]">
                      Be part of our mission to create positive change through the power of Carnatic fusion.
                    </p>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                      style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Archive */}
      <section className="section-padding" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#014e63' }}>
                Past <span className="gradient-text">Events</span>
              </h2>
              <Calendar style={{ color: '#014e63' }} size={48} />
            </div>
          </AnimatedSection>

          <div className="grid gap-8">
            {pastEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-white shadow-2xl border flex flex-col lg:flex-row" style={{ borderColor: 'rgba(1, 78, 99, 0.05)' }}>
                  {/* Left Content Side */}
                  <div className="flex-[2] p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: 'rgba(1, 78, 99, 0.1)', color: '#014e63' }}>
                        {event.initiative}
                      </span>
                      <div className="flex items-center text-[#014e63] font-medium opacity-80">
                        <Calendar className="mr-2" size={16} />
                        <span className="text-sm">{event.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-serif font-bold mb-6 text-[#014e63]">{event.title}</h3>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center text-[#014e63]">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#F4F8F9]">
                          <MapPin size={16} />
                        </div>
                        <span className="text-sm font-medium opacity-80">{event.location}</span>
                      </div>
                      <div className="flex items-center text-[#014e63]">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#F4F8F9]">
                          <Users size={16} />
                        </div>
                        <span className="text-sm font-medium opacity-80">{event.partner}</span>
                      </div>
                    </div>

                    {/* Impact Badge */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#014e63]/5 border border-[#014e63]/10">
                      <div className="p-1.5 rounded-full bg-[#014e63]/10">
                        <Heart style={{ color: '#014e63' }} size={16} />
                      </div>
                      <span className="font-bold text-[#014e63] text-sm tracking-tight">{event.impact}</span>
                    </div>
                  </div>
                  
                  {/* Right Side (Image or Impact Stats) */}
                  <div className="flex-1 min-h-[300px] lg:min-h-0 overflow-hidden">
                    {event.image ? (
                      <div 
                        className="relative h-full w-full cursor-pointer group"
                        onClick={() => setSelectedImage(event.image)}
                      >
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-1">Impact Created</h4>
                          <p className="text-3xl font-serif font-bold text-white mb-2">{event.fundsRaised}</p>
                          <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-white/30 rounded-full mb-4"></div>
                          <span className="text-[10px] items-center gap-2 text-white/40 uppercase tracking-widest flex group-hover:opacity-100 opacity-0 transition-opacity">
                            View Poster <ArrowRight size={10} />
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full w-full p-10 flex flex-col justify-center items-center text-center" style={{ backgroundColor: 'rgba(1, 78, 99, 0.04)' }}>
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm bg-white">
                          <Heart style={{ color: '#014e63' }} size={32} />
                        </div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#014e63]/60 mb-2">Impact Created</h4>
                        <p className="text-4xl font-serif font-bold text-[#014e63] mb-4">{event.fundsRaised}</p>
                        <p className="text-xs italic leading-relaxed opacity-50 text-[#014e63]">
                          "Making a meaningful difference <br /> through the power of music"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#014e63' }}>
                Types of <span className="gradient-text">Events</span>
              </h2>
              <p className="text-xl" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                Different ways we create impact through music
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl p-10 text-center bg-white shadow-2xl border" style={{ borderColor: 'rgba(1, 78, 99, 0.05)' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm transition-transform duration-300 hover:scale-110" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
                  <Heart style={{ color: '#014e63' }} size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-[#014e63]">Fundraising Concerts</h3>
                <p className="mb-8 leading-relaxed opacity-70 text-[#014e63]">
                  Harmony for Hope series supporting youth healthcare and educational initiatives 
                  through ticketed performances.
                </p>
                <div className="rounded-xl p-5 bg-[#F4F8F9] border border-[#014e63]/5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#014e63]/40 mb-1">Recent Impact</p>
                  <p className="text-xl font-bold text-[#014e63]">$15,000+ raised</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="rounded-2xl p-10 text-center bg-white shadow-2xl border" style={{ borderColor: 'rgba(1, 78, 99, 0.05)' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm transition-transform duration-300 hover:scale-110" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
                  <Users style={{ color: '#014e63' }} size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-[#014e63]">Community Outreach</h3>
                <p className="mb-8 leading-relaxed opacity-70 text-[#014e63]">
                  Together Through Music program bringing live performances to senior centers 
                  and community spaces.
                </p>
                <div className="rounded-xl p-5 bg-[#F4F8F9] border border-[#014e63]/5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#014e63]/40 mb-1">Recent Impact</p>
                  <p className="text-xl font-bold text-[#014e63]">300+ seniors reached</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="rounded-2xl p-10 text-center bg-white shadow-2xl border" style={{ borderColor: 'rgba(1, 78, 99, 0.05)' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm transition-transform duration-300 hover:scale-110" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
                  <Calendar style={{ color: '#014e63' }} size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-[#014e63]">Cultural Festivals</h3>
                <p className="mb-8 leading-relaxed opacity-70 text-[#014e63]">
                  Participating in community festivals to celebrate cultural diversity and 
                  promote cross-cultural understanding.
                </p>
                <div className="rounded-xl p-5 bg-[#F4F8F9] border border-[#014e63]/5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#014e63]/40 mb-1">Recent Impact</p>
                  <p className="text-xl font-bold text-[#014e63]">5+ festivals participated</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding min-h-[30vh] lg:min-h-[50vh] flex items-center justify-center pt-24 md:pt-32" style={{ background: 'linear-gradient(to right, #014e63, rgba(1, 78, 99, 0.9))', color: '#F4F8F9' }}>
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Get in Touch with Dhwayam
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(244, 248, 249, 0.9)' }}>
              Bring the power of music and social impact to your next event. All performance 
              remuneration is donated to youth welfare charities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a 
                href="/contact" 
                className="font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
                style={{ backgroundColor: '#F4F8F9', color: '#014e63' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(244, 248, 249, 0.9)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#F4F8F9'}
              >
                Contact Us <ArrowRight className="ml-2" size={20} />
              </a>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com/dhwayam.music" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all hover:bg-white/10"
                  style={{ color: '#F4F8F9' }}
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://instagram.com/dhwayam.music" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all hover:bg-white/10"
                  style={{ color: '#F4F8F9' }}
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full screen view"
                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg cursor-default"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Events;