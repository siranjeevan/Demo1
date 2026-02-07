import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Calendar, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CountUp from '../components/CountUp';
import heroImage1 from '../assets/Hero1.png';
import heroImage2 from '../assets/Hero2.png';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom right, rgba(1, 78, 99, 0.7), rgba(1, 78, 99, 0.6), rgba(1, 78, 99, 0.5))' }}></div>
          <img
            src={heroImage1}
            alt="Dhwayam Performance"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <img
            src={heroImage2}
            alt="Dhwayam Musicians"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-20 container-max section-padding text-center" style={{ color: '#F4F8F9' }}>
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Music That{' '}
              <span style={{ background: 'linear-gradient(to right, rgba(244, 248, 249, 0.9), #F4F8F9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                Transforms
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: 'rgba(244, 248, 249, 0.9)' }}>
              We're Dhwayam, a Gen Z-led Carnatic fusion band using music as a bridge 
              between tradition and purpose, creating lasting social impact through 
              every performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/events" 
                className="font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                style={{ backgroundColor: '#F4F8F9', color: '#014e63' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(244, 248, 249, 0.9)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#F4F8F9'}
              >
                Explore Events <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/impact" 
                className="border-2 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center"
                style={{ borderColor: '#F4F8F9', color: '#F4F8F9', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F4F8F9';
                  e.target.style.color = '#014e63';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#F4F8F9';
                }}
              >
                Our Impact <Heart className="ml-2" size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#F4F8F9' }}>
            <div className="w-1 h-3 rounded-full mt-2" style={{ backgroundColor: '#F4F8F9' }}></div>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="section-padding" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#014e63' }}>
                  $<CountUp end={15000} />+
                </div>
                <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Total Funds Raised</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#014e63' }}>
                  <CountUp end={25} />+
                </div>
                <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Events Completed</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#014e63' }}>
                  <CountUp end={500} />+
                </div>
                <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Communities Reached</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#014e63' }}>
                  <CountUp end={3} />
                </div>
                <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Ongoing Initiatives</p>
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
                <div className="text-sm font-medium mb-2" style={{ color: '#014e63' }}>November 2025</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#014e63' }}>Sankara Healthcare Fundraiser</h3>
                <p className="mb-4" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Raised funds to provide prosthetics for 100 children, giving them 
                  new hope and mobility.
                </p>
                <div className="text-2xl font-bold" style={{ color: '#014e63' }}>100 Children Helped</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <div className="text-sm font-medium mb-2" style={{ color: '#014e63' }}>October 2025</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#014e63' }}>Microsoft Giving Campaign</h3>
                <p className="mb-4" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Partnered with Asha for Education & REDP to support educational 
                  initiatives through music.
                </p>
                <div className="text-2xl font-bold" style={{ color: '#014e63' }}>$4,000 Raised</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <div className="text-sm font-medium mb-2" style={{ color: '#014e63' }}>October 2025</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#014e63' }}>Diwali at Aegis Living</h3>
                <p className="mb-4" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Brought joy and cultural celebration to senior community members 
                  through live Carnatic fusion performances.
                </p>
                <div className="text-2xl font-bold" style={{ color: '#014e63' }}>50+ Seniors</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#014e63' }}>
                What People <span className="gradient-text">Say</span>
              </h2>
              <p className="text-xl" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                Voices from our community and partners
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="rounded-xl p-8 shadow-lg border relative" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-2xl font-serif" style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}>
                    "
                  </div>
                </div>
                <p className="mt-4 mb-6 italic" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                  "Dhwayam's performance at our fundraiser was absolutely magical. They didn't just play music – they created an experience that moved everyone in the room. The impact on our cause was incredible."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: 'rgba(1, 78, 99, 0.1)', color: '#014e63' }}>
                    SK
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold" style={{ color: '#014e63' }}>Sankara Healthcare</p>
                    <p className="text-sm" style={{ color: 'rgba(1, 78, 99, 0.6)' }}>Partner Organization</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="rounded-xl p-8 shadow-lg border relative" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-2xl font-serif" style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}>
                    "
                  </div>
                </div>
                <p className="mt-4 mb-6 italic" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                  "The residents were so happy during the Diwali performance. Many had tears of joy. Dhwayam brought back beautiful memories for them through their music. Truly heartwarming."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: 'rgba(1, 78, 99, 0.1)', color: '#014e63' }}>
                    AL
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold" style={{ color: '#014e63' }}>Aegis Living</p>
                    <p className="text-sm" style={{ color: 'rgba(1, 78, 99, 0.6)' }}>Senior Living Community</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="rounded-xl p-8 shadow-lg border relative" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-2xl font-serif" style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}>
                    "
                  </div>
                </div>
                <p className="mt-4 mb-6 italic" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                  "As a Gen Z musician, it's inspiring to see young people using their talents for social good. Dhwayam is redefining what it means to be an artist with purpose."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: 'rgba(1, 78, 99, 0.1)', color: '#014e63' }}>
                    MC
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold" style={{ color: '#014e63' }}>Music Community</p>
                    <p className="text-sm" style={{ color: 'rgba(1, 78, 99, 0.6)' }}>Event Attendee</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
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
                to="/booking" 
                className="font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
                style={{ backgroundColor: '#F4F8F9', color: '#014e63' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(244, 248, 249, 0.9)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#F4F8F9'}
              >
                Book Us Now <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/impact" 
                className="border-2 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                style={{ borderColor: '#F4F8F9', color: '#F4F8F9', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F4F8F9';
                  e.target.style.color = '#014e63';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#F4F8F9';
                }}
              >
                See Our Impact <TrendingUp className="ml-2" size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;