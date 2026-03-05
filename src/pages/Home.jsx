<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { ArrowRight, Heart, Users, Calendar, ChevronDown } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CountUp from '../components/CountUp';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
import heroImage1 from '../assets/Hero1_optimized.jpg';
import testimonial1 from '../assets/testimonial1.png';
import testimonial2 from '../assets/testimonial2.png';
import testimonial3 from '../assets/testimonial3.png';
=======
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Heart, Users, Calendar } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import CountUp from '../components/common/CountUp';
import heroImage1 from '../assets/images/Hero1_optimized.jpg';
import testimonial1 from '../assets/images/testimonial1.png';
import testimonial2 from '../assets/images/testimonial2.png';
import testimonial3 from '../assets/images/testimonial3.png';
>>>>>>> 69390cf648b054c45fa0786498f6c198babc682d

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(1);
  const [testimonials, setTestimonials] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [recentImpact, setRecentImpact] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Testimonials
        const testimonialsQuery = query(collection(db, 'testimonials'), orderBy('id', 'asc'));
        const testimonialsSnapshot = await getDocs(testimonialsQuery);
        const testimonialsList = testimonialsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Fallback to local if empty (optional, but keep for now if db is not populated)
        if (testimonialsList.length > 0) {
          setTestimonials(testimonialsList);
        } else {
          setTestimonials([
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
          ]);
        }

        // Fetch Recent Impact (Latest 3 past events)
        const recentQuery = query(collection(db, 'past_events'), orderBy('date', 'desc'), limit(3));
        const recentSnapshot = await getDocs(recentQuery);
        setRecentImpact(recentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

        // Fetch Upcoming Events (Latest 2)
        const upcomingQuery = query(collection(db, 'upcoming_events'), orderBy('date', 'asc'), limit(2));
        const upcomingSnapshot = await getDocs(upcomingQuery);
        setUpcomingEvents(upcomingSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex flex-col items-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom right, rgba(1, 78, 99, 0.8), rgba(1, 78, 99, 0.65), rgba(1, 78, 99, 0.5))' }}></div>
          <img
            src={heroImage1}
            alt="Dhwayam Performance"
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
            style={{ filter: 'grayscale(20%) brightness(0.9)' }}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Content Container - Vertically Centered */}
        <div className="relative z-20 container-max px-6 flex-grow flex flex-col items-center justify-center text-center text-[#F4F8F9] pt-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-[1.1] overflow-hidden">
              {"Music That ".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-4"
                  variants={{
                    hidden: { opacity: 0, y: 80 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                className="inline-block italic"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
                }}
                style={{
                  background: 'linear-gradient(to right, #F4F8F9, rgba(244, 248, 249, 0.7))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                Transforms
              </motion.span>
            </h1>

            <div className="overflow-hidden mb-10">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.5,
                      ease: "easeOut"
                    }
                  }
                }}
                className="text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed tracking-wide"
                style={{ color: 'rgba(244, 248, 249, 0.9)' }}
              >
                We're Dhwayam, a Gen Z-led Carnatic fusion band using music as a bridge
                between tradition and purpose.
              </motion.p>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    delay: 0.9,
                    ease: "easeOut"
                  }
                }
              }}
              className="flex justify-center"
            >
              <Link
                to="/events"
                className="group relative font-bold py-5 px-14 rounded-full transition-all duration-500 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/30 group-hover:bg-white transition-all duration-500"></div>
                <span className="relative z-10 flex items-center text-[#F4F8F9] group-hover:text-[#014e63] transition-colors duration-500 uppercase tracking-widest text-sm">
                  Explore Events <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-500" size={20} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* HIGH-CONVERSION: 'Impact Pulse' Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1.2, ease: "easeOut" }}
          className="relative z-20 pb-16 flex flex-col items-center cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' })}
        >
          {/* Label with dynamic letter spacing and 'always shining' animation */}
          <motion.span
            animate={{
              textShadow: [
                "0 0 8px rgba(255,255,255,0.3)",
                "0 0 25px rgba(255,255,255,0.8)",
                "0 0 8px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-white opacity-100 text-[10px] font-black uppercase tracking-[0.4em] mb-6 group-hover:tracking-[0.5em] transition-all duration-700 pointer-events-none drop-shadow-sm"
          >
            Scroll Down To See Our Impact
          </motion.span>

          <div className="relative flex items-center justify-center">
            {/* Pulsing Ripple Background - Constant animation to draw the eye */}
            <motion.div
              animate={{ scale: [1, 2.8, 1], opacity: [0.3, 0.05, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-12 h-12 bg-white/20 rounded-full blur-md"
            />

            {/* The Indicator Core */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="relative w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-white/20 group-hover:border-white transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.2)]"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center -space-y-3"
              >
                <ChevronDown size={22} className="text-white/60" strokeWidth={1.5} />
                <ChevronDown size={22} className="text-white" strokeWidth={2.5} />
              </motion.div>
            </motion.div>

            {/* The 'Musical String' - Vertical guide that pulses like a vibrant string */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1px] h-28 overflow-hidden">
              {/* Static faint path */}
              <div className="absolute inset-x-0 top-0 h-full bg-white/5" />

              {/* The Pulse line */}
              <motion.div
                animate={{
                  y: ["-100%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_10px_white]"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats Section - Separated for clarity */}
      <section className="relative z-30 pt-12 px-4 mb-24">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#014e63' }}>
                Our <span className="gradient-text">Global Impact</span>
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                Measuring the tangible change created through our performances and community outreach
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-[2.5rem] shadow-[0_30px_70px_rgba(1,78,99,0.15)] p-8 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border border-white/50 backdrop-blur-xl">
              <div className="relative group">
                <div className="text-3xl md:text-5xl font-bold mb-2 transition-transform duration-300 group-hover:-translate-y-1" style={{ color: '#014e63' }}>
                  $<CountUp end={7681} />+
                </div>
                <p className="text-sm md:text-base font-medium tracking-tight" style={{ color: 'rgba(1, 78, 99, 0.6)' }}>Total Funds Raised</p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#014e63]/10 rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
              </div>
              <div className="relative group">
                <div className="text-3xl md:text-5xl font-bold mb-2 transition-transform duration-300 group-hover:-translate-y-1" style={{ color: '#014e63' }}>
                  <CountUp end={4} />+
                </div>
                <p className="text-sm md:text-base font-medium tracking-tight" style={{ color: 'rgba(1, 78, 99, 0.6)' }}>Events Completed</p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#014e63]/10 rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
              </div>
              <div className="relative group">
                <div className="text-3xl md:text-5xl font-bold mb-2 transition-transform duration-300 group-hover:-translate-y-1" style={{ color: '#014e63' }}>
                  <CountUp end={245} />+
                </div>
                <p className="text-sm md:text-base font-medium tracking-tight" style={{ color: 'rgba(1, 78, 99, 0.6)' }}>Lives Touched</p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#014e63]/10 rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
              </div>
              <div className="relative group">
                <div className="text-3xl md:text-5xl font-bold mb-2 transition-transform duration-300 group-hover:-translate-y-1" style={{ color: '#014e63' }}>
                  <CountUp end={5} />+
                </div>
                <p className="text-sm md:text-base font-medium tracking-tight" style={{ color: 'rgba(1, 78, 99, 0.6)' }}>Partner Organizations</p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#014e63]/10 rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="section-padding pt-0 pb-20" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
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
              <div className="rounded-xl p-8 card-hover shadow-lg border h-full bg-white transition-all duration-300" style={{ borderColor: 'rgba(1, 78, 99, 0.1)' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#014e63]/5 flex items-center justify-center mr-4">
                    <Heart size={24} style={{ color: '#014e63' }} />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold" style={{ color: '#014e63' }}>Harmony for Hope</h3>
                </div>
                <p className="mb-6 leading-relaxed" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Fundraising concert series supporting youth healthcare and health-focused
                  nonprofits. Every performance creates direct impact for those who need it most.
                </p>
                <Link
                  to="/initiatives"
                  className="inline-flex items-center font-bold text-sm tracking-widest uppercase transition-colors group"
                  style={{ color: '#014e63' }}
                >
                  Learn More <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="rounded-xl p-8 card-hover shadow-lg border h-full bg-white transition-all duration-300" style={{ borderColor: 'rgba(1, 78, 99, 0.1)' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#014e63]/5 flex items-center justify-center mr-4">
                    <Users size={24} style={{ color: '#014e63' }} />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold" style={{ color: '#014e63' }}>Together Through Music</h3>
                </div>
                <p className="mb-6 leading-relaxed" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Community outreach program bringing live music to senior centers and
                  community spaces, fostering connection and joy across generations.
                </p>
                <Link
                  to="/initiatives"
                  className="inline-flex items-center font-bold text-sm tracking-widest uppercase transition-colors group"
                  style={{ color: '#014e63' }}
                >
                  Learn More <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
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
            {recentImpact.length > 0 ? (
              recentImpact.map((impact, index) => (
                <AnimatedSection key={impact.id} delay={index * 0.2}>
                  <div className="rounded-xl p-6 shadow-lg border bg-white" style={{ borderColor: 'rgba(1, 78, 99, 0.1)' }}>
                    <div className="text-xs font-bold mb-2 uppercase tracking-widest text-[#014e63]/40">{impact.date}</div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#014e63' }}>{impact.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                      {impact.description || impact.impact}
                    </p>
                    <div className="text-xl font-bold" style={{ color: '#014e63' }}>{impact.fundsRaised || impact.impact}</div>
                  </div>
                </AnimatedSection>
              ))
            ) : (
              // Hardcoded fallbacks if DB is empty
              <>
                <AnimatedSection delay={0.2}>
                  <div className="rounded-xl p-6 shadow-lg border bg-white" style={{ borderColor: 'rgba(1, 78, 99, 0.1)' }}>
                    <div className="text-xs font-bold mb-2 uppercase tracking-widest text-[#014e63]/40">November 15, 2025</div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#014e63' }}>Sankara Healthcare Fundraiser</h3>
                    <p className="mb-4 text-sm leading-relaxed" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                      Raised funds to support Sankara Healthcare's vital work, bringing together 125 attendees for an evening of Carnatic fusion.
                    </p>
                    <div className="text-xl font-bold" style={{ color: '#014e63' }}>$3,831 Raised</div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <div className="rounded-xl p-6 shadow-lg border bg-white" style={{ borderColor: 'rgba(1, 78, 99, 0.1)' }}>
                    <div className="text-xs font-bold mb-2 uppercase tracking-widest text-[#014e63]/40">October 28, 2025</div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#014e63' }}>Microsoft Giving Campaign</h3>
                    <p className="mb-4 text-sm leading-relaxed" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                      Partnered with Asha for Education & REDP to support educational initiatives. Raised $2,250 for REDP and $1,600 for Asha.
                    </p>
                    <div className="text-xl font-bold" style={{ color: '#014e63' }}>$3,850 Raised</div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.6}>
                  <div className="rounded-xl p-6 shadow-lg border bg-white" style={{ borderColor: 'rgba(1, 78, 99, 0.1)' }}>
                    <div className="text-xs font-bold mb-2 uppercase tracking-widest text-[#014e63]/40">October 25, 2025</div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#014e63' }}>Aegis Living — Marymoor</h3>
                    <p className="mb-4 text-sm leading-relaxed" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                      Brought joy and cultural celebration to senior community members in Redmond, WA through live Carnatic fusion performances.
                    </p>
                    <div className="text-xl font-bold" style={{ color: '#014e63' }}>45 Seniors Reached</div>
                  </div>
                </AnimatedSection>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding overflow-hidden" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full flex flex-col md:flex-row gap-4 h-[650px] md:h-[450px]"
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
                  <div className="absolute -bottom-10 -right-10 opacity-[0.03]">
                    <Heart size={isActive ? 200 : 100} color={isActive ? "#F4F8F9" : "#00475b"} />
                  </div>

                  <div className="h-full flex flex-col p-8 md:p-10 z-10 relative">
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

                    <div className="flex flex-col h-full justify-between">
                      <div>
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
                Stories being written at our next performances
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, index) => (
                <AnimatedSection key={event.id} delay={index * 0.2}>
                  <div className="border rounded-xl p-8 bg-white card-hover shadow-lg transition-all duration-300" style={{ borderColor: 'rgba(1, 78, 99, 0.1)' }}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#014e63]/5 flex items-center justify-center mr-4">
                        <Calendar size={20} style={{ color: '#014e63' }} />
                      </div>
                      <span className="font-bold text-sm uppercase tracking-widest text-[#014e63]/60">{event.date}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold mb-3" style={{ color: '#014e63' }}>{event.title}</h3>
                    <p className="mb-6 leading-relaxed" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                      {event.description}
                    </p>
                    <Link
                      to="/events"
                      className="inline-flex items-center font-bold text-sm uppercase tracking-widest transition-colors group"
                      style={{ color: '#014e63' }}
                    >
                      View Details <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                    </Link>
                  </div>
                </AnimatedSection>
              ))
            ) : (
              <>
                <AnimatedSection delay={0.2}>
                  <div className="border rounded-xl p-8 bg-white card-hover shadow-lg transition-all duration-300" style={{ borderColor: 'rgba(1, 78, 99, 0.1)' }}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#014e63]/5 flex items-center justify-center mr-4">
                        <Calendar size={20} style={{ color: '#014e63' }} />
                      </div>
                      <span className="font-bold text-sm uppercase tracking-widest text-[#014e63]/60">March 2026</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold mb-3" style={{ color: '#014e63' }}>SEEEDS Educational NonProfit</h3>
                    <p className="mb-6 leading-relaxed" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                      Supporting educational initiatives through our Harmony for Hope series.
                    </p>
                    <Link
                      to="/events"
                      className="inline-flex items-center font-bold text-sm uppercase tracking-widest transition-colors group"
                      style={{ color: '#014e63' }}
                    >
                      View Details <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                    </Link>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <div className="border rounded-xl p-8 bg-white card-hover shadow-lg transition-all duration-300" style={{ borderColor: 'rgba(1, 78, 99, 0.1)' }}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#014e63]/5 flex items-center justify-center mr-4">
                        <Calendar size={20} style={{ color: '#014e63' }} />
                      </div>
                      <span className="font-bold text-sm uppercase tracking-widest text-[#014e63]/60">Spring 2026</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold mb-3" style={{ color: '#014e63' }}>Northwest Folklife Festival</h3>
                    <p className="mb-6 leading-relaxed" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                      Celebrating cultural diversity and community connection through music.
                    </p>
                    <Link
                      to="/events"
                      className="inline-flex items-center font-bold text-sm uppercase tracking-widest transition-colors group"
                      style={{ color: '#014e63' }}
                    >
                      View Details <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                    </Link>
                  </div>
                </AnimatedSection>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding" style={{ background: 'linear-gradient(to right, #014e63, rgba(1, 78, 99, 0.9))' }}>
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white text-shadow-lg">
              Ready to Create Impact Together?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90 font-light leading-relaxed">
              Book Dhwayam for your next event and join us in using music as a force for positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="font-bold py-4 px-10 rounded-full transition-all duration-500 transform hover:scale-105 inline-flex items-center justify-center shadow-2xl bg-white text-[#014e63] hover:bg-[#f4f8f9] uppercase tracking-widest text-sm"
              >
                Contact Us <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div >
  );
};

export default Home;