import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Heart, Users, Calendar } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CountUp from '../components/CountUp';
import heroImage1 from '../assets/Hero1_optimized.jpg';
import testimonial1 from '../assets/testimonial1.png';
import testimonial2 from '../assets/testimonial2.png';
import testimonial3 from '../assets/testimonial3.png';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  const testimonials = [
    {
      id: 0,
      author: "Rajesh Vaidheeshwarran",
      role: "Sankara Healthcare Foundation",
      image: testimonial1,
      quote: "Thank you so much for putting this together. All of us at Sankara Healthcare Foundation and our beneficiaries are immensely grateful for the effort of everyone who was involved with this!"
    },
    {
      id: 1,
      author: "Aegis Living",
      role: "Senior Living Community",
      image: testimonial2,
      quote: "The residents were so happy during the Diwali performance. Many had tears of joy. Dhwayam brought back beautiful memories for them through their music. Truly heartwarming."
    },
    {
      id: 2,
      author: "Music Community",
      role: "Event Attendee",
      image: testimonial3,
      quote: "As a Gen Z musician, it's inspiring to see young people using their talents for social good. Dhwayam is redefining what it means to be an artist with purpose."
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
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom right, rgba(1, 78, 99, 0.7), rgba(1, 78, 99, 0.6), rgba(1, 78, 99, 0.5))' }}></div>
          <img
            src={heroImage1}
            alt="Dhwayam Performance"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="relative z-20 container-max section-padding text-center" style={{ color: '#F4F8F9' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 overflow-hidden">
              {"Music That ".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-3"
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                }}
                style={{
                  background: 'linear-gradient(to right, rgba(244, 248, 249, 0.9), #F4F8F9)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                Transforms
              </motion.span>
            </h1>

            <div className="overflow-hidden mb-8">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.4,
                      ease: "easeOut"
                    }
                  }
                }}
                className="text-xl md:text-2xl max-w-3xl mx-auto"
                style={{ color: 'rgba(244, 248, 249, 0.9)' }}
              >
                We're Dhwayam, a Gen Z-led Carnatic fusion band using music as a bridge
                between tradition and purpose, creating lasting social impact through
                every performance.
              </motion.p>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.8,
                    ease: "easeOut"
                  }
                }
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/events"
                className="group font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(244,248,249,0.3)] hover:shadow-[0_0_25px_rgba(244,248,249,0.5)] inline-flex items-center justify-center backdrop-blur-sm"
                style={{
                  background: 'rgba(244, 248, 249, 0.1)',
                  border: '1px solid rgba(244, 248, 249, 0.5)',
                  color: '#F4F8F9'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(244, 248, 249, 0.2)';
                  e.target.style.borderColor = '#F4F8F9';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(244, 248, 249, 0.1)';
                  e.target.style.borderColor = 'rgba(244, 248, 249, 0.5)';
                }}
              >
                Explore Events <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator — Orbital Pulse Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1, ease: 'backOut' }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' })}
        >
          {/* Outer ripple rings */}
          <div className="relative w-14 h-14 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 2.2], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              className="absolute w-full h-full rounded-full border border-white/30"
            />
            <motion.div
              animate={{ scale: [1, 2.2], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.7 }}
              className="absolute w-full h-full rounded-full border border-white/20"
            />

            {/* Rotating orbit path */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute w-full h-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </motion.div>

            {/* Center icon — down arrow */}
            <motion.svg
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              className="relative z-10"
            >
              <path d="M12 5v14M5 12l7 7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </div>

          {/* Label with hover glow */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="mt-4 text-white/30 text-[9px] uppercase tracking-[0.5em] font-semibold group-hover:text-white/80 group-hover:tracking-[0.6em] transition-all duration-700"
          >
            Explore
          </motion.span>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="section-padding" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#014e63' }}>
                  $<CountUp end={7681} />+
                </div>
                <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Total Funds Raised</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#014e63' }}>
                  <CountUp end={4} />+
                </div>
                <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Events Completed</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#014e63' }}>
                  <CountUp end={245} />+
                </div>
                <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Lives Touched</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#014e63' }}>
                  <CountUp end={5} />+
                </div>
                <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Partner Organizations</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#014e63' }}>
                Our <span className="gradient-text">Initiatives</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                Two powerful programs driving change through the universal language of music
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="rounded-xl p-8 card-hover shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <div className="flex items-center mb-4">
                  <Heart className="mr-3" size={24} style={{ color: '#014e63' }} />
                  <h3 className="text-2xl font-serif font-semibold" style={{ color: '#014e63' }}>Harmony for Hope</h3>
                </div>
                <p className="mb-6" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Fundraising concert series supporting youth healthcare and health-focused
                  nonprofits. Every performance creates direct impact for those who need it most.
                </p>
                <Link
                  to="/initiatives"
                  className="inline-flex items-center font-medium transition-colors"
                  style={{ color: '#014e63' }}
                  onMouseEnter={(e) => e.target.style.color = 'rgba(1, 78, 99, 0.8)'}
                  onMouseLeave={(e) => e.target.style.color = '#014e63'}
                >
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="rounded-xl p-8 card-hover shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <div className="flex items-center mb-4">
                  <Users className="mr-3" size={24} style={{ color: '#014e63' }} />
                  <h3 className="text-2xl font-serif font-semibold" style={{ color: '#014e63' }}>Together Through Music</h3>
                </div>
                <p className="mb-6" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Community outreach program bringing live music to senior centers and
                  community spaces, fostering connection and joy across generations.
                </p>
                <Link
                  to="/initiatives"
                  className="inline-flex items-center font-medium transition-colors"
                  style={{ color: '#014e63' }}
                  onMouseEnter={(e) => e.target.style.color = 'rgba(1, 78, 99, 0.8)'}
                  onMouseLeave={(e) => e.target.style.color = '#014e63'}
                >
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Recent Impact Highlights */}
      <section className="section-padding" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#014e63' }}>
                Recent <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-xl" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                Stories of change from our latest performances
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <div className="text-sm font-medium mb-2" style={{ color: '#014e63' }}>November 15, 2025</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#014e63' }}>Sankara Healthcare Fundraiser</h3>
                <p className="mb-4" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Raised funds to support Sankara Healthcare's vital work, bringing together 125 attendees for an evening of Carnatic fusion.
                </p>
                <div className="text-2xl font-bold" style={{ color: '#014e63' }}>$3,831 Raised · 125 Attendees</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <div className="text-sm font-medium mb-2" style={{ color: '#014e63' }}>October 28, 2025</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#014e63' }}>Microsoft Giving Campaign</h3>
                <p className="mb-4" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Partnered with Asha for Education & REDP to support educational initiatives. Raised $2,250 for REDP and $1,600 for Asha.
                </p>
                <div className="text-2xl font-bold" style={{ color: '#014e63' }}>$3,850 Raised · 75 Attendees</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <div className="text-sm font-medium mb-2" style={{ color: '#014e63' }}>October 25, 2025</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#014e63' }}>Aegis Living — Marymoor</h3>
                <p className="mb-4" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Brought joy and cultural celebration to senior community members in Redmond, WA through live Carnatic fusion performances.
                </p>
                <div className="text-2xl font-bold" style={{ color: '#014e63' }}>45 Seniors Reached</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding overflow-hidden" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          {/* Header - Top Centered */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-[2px] w-8 bg-[#00475b]/30"></div>
              <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-[#00475b]/60">Testimonials</span>
              <div className="h-[2px] w-8 bg-[#00475b]/30"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[#00475b]">
              What People <span className="gradient-text italic">Say</span>
            </h2>
            <p className="text-lg leading-relaxed text-[#00475b]/60 font-light">
              Voices from our community and partners who have experienced the transformative power of Carnatic fusion.
            </p>
          </motion.div>

          {/* Cards - Full Width Below Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full flex flex-col md:flex-row gap-4 h-[600px] md:h-[450px]"
          >
            {testimonials.map((testimonial, index) => {
              const isActive = activeTestimonial === index;
              return (
                <div
                  key={testimonial.id}
                  onMouseEnter={() => setActiveTestimonial(index)}
                  className="relative rounded-3xl cursor-pointer overflow-hidden transition-all duration-700 shadow-xl"
                  style={{
                    flex: isActive ? 3.5 : 1,
                    backgroundColor: isActive ? '#00475b' : '#FFFFFF',
                    transition: 'all 0.8s cubic-bezier(0.2, 1, 0.2, 1)',
                    border: isActive ? '1px solid #00475b' : '1px solid rgba(0, 71, 91, 0.08)'
                  }}
                >
                  {/* Background Quote Icon Overlay */}
                  <div className="absolute -bottom-10 -right-10 opacity-[0.03]">
                    <Heart size={isActive ? 200 : 100} color={isActive ? "#F4F8F9" : "#00475b"} />
                  </div>

                  <div className="h-full flex flex-col p-8 md:p-10 z-10 relative">
                    {/* Quote Icon - Scale and Tilt Animation */}
                    <div
                      className="mb-8 transition-transform duration-500"
                      style={{
                        transform: isActive ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl font-serif transition-all duration-500"
                        style={{
                          backgroundColor: isActive ? 'rgba(244, 248, 249, 0.15)' : 'rgba(0, 71, 91, 0.06)',
                          color: isActive ? '#F4F8F9' : '#00475b',
                          border: isActive ? '1px solid rgba(244, 248, 249, 0.1)' : '1px solid rgba(0, 71, 91, 0.08)'
                        }}
                      >
                        "
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Quote Text - Slide Up Reveal */}
                        <div
                          className={`transition-all duration-700 overflow-hidden ${isActive ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'}`}
                          style={{
                            transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                            transitionDelay: isActive ? '0.3s' : '0s'
                          }}
                        >
                          <p className="text-lg md:text-xl italic mb-8 font-serif leading-relaxed text-white/90">
                            "{testimonial.quote}"
                          </p>
                        </div>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center">
                        <div
                          className="w-12 h-12 rounded-xl overflow-hidden transition-all duration-500"
                          style={{
                            border: isActive ? '2px solid rgba(244, 248, 249, 0.25)' : '1px solid rgba(0, 71, 91, 0.08)',
                            boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.2)' : '0 2px 8px rgba(0,0,0,0.06)'
                          }}
                        >
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className={`ml-4 transition-all duration-500 ${isActive ? 'translate-x-0' : 'translate-x-1'}`}>
                          <p className="font-bold text-sm leading-tight transition-colors duration-500 tracking-tight" style={{ color: isActive ? '#F4F8F9' : '#00475b' }}>
                            {testimonial.author}
                          </p>
                          <p className="text-xs transition-colors duration-500 mt-0.5 font-medium" style={{ color: isActive ? 'rgba(244, 248, 249, 0.5)' : 'rgba(0, 71, 91, 0.4)' }}>
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#014e63' }}>
                Upcoming <span className="gradient-text">Events</span>
              </h2>
              <p className="text-xl" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                Join us at our next performances and be part of the change
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="border rounded-xl p-6 card-hover shadow-lg" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <div className="flex items-center mb-4">
                  <Calendar className="mr-3" size={20} style={{ color: '#014e63' }} />
                  <span className="font-semibold" style={{ color: '#014e63' }}>March 2026</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#014e63' }}>SEEEDS Educational NonProfit</h3>
                <p className="mb-4" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Supporting educational initiatives through our Harmony for Hope series.
                </p>
                <Link
                  to="/events"
                  className="inline-flex items-center font-medium transition-colors"
                  style={{ color: '#014e63' }}
                  onMouseEnter={(e) => e.target.style.color = 'rgba(1, 78, 99, 0.8)'}
                  onMouseLeave={(e) => e.target.style.color = '#014e63'}
                >
                  View Details <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="border rounded-xl p-6 card-hover shadow-lg" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <div className="flex items-center mb-4">
                  <Calendar className="mr-3" size={20} style={{ color: '#014e63' }} />
                  <span className="font-semibold" style={{ color: '#014e63' }}>Spring 2026</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#014e63' }}>Northwest Folklife Festival</h3>
                <p className="mb-4" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Celebrating cultural diversity and community connection through music.
                </p>
                <Link
                  to="/events"
                  className="inline-flex items-center font-medium transition-colors"
                  style={{ color: '#014e63' }}
                  onMouseEnter={(e) => e.target.style.color = 'rgba(1, 78, 99, 0.8)'}
                  onMouseLeave={(e) => e.target.style.color = '#014e63'}
                >
                  View Details <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding" style={{ background: 'linear-gradient(to right, #014e63, rgba(1, 78, 99, 0.9))' }}>
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#F4F8F9' }}>
              Ready to Create Impact Together?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(244, 248, 249, 0.9)' }}>
              Book Dhwayam for your next event and join us in using music as a force for positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
                style={{ backgroundColor: '#F4F8F9', color: '#014e63' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(244, 248, 249, 0.9)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#F4F8F9'}
              >
                Contact Us <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;