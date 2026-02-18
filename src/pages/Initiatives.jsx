import { motion } from 'framer-motion';
import { Heart, Users, ArrowRight, Calendar, MapPin, Target, DollarSign, Share2, Instagram, Facebook } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CountUp from '../components/CountUp';

const Initiatives = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      {/* Hero Section */}
      <section className="section-padding min-h-[60vh] flex items-center justify-center pt-32" style={{ background: 'linear-gradient(to bottom right, #014e63, rgba(1, 78, 99, 0.9), rgba(1, 78, 99, 0.8))', color: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Our <span style={{ background: 'linear-gradient(to right, rgba(244, 248, 249, 0.9), #F4F8F9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>Initiatives</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'rgba(244, 248, 249, 0.9)' }}>
                Two powerful programs creating lasting change through the transformative power of music
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Impact & Youth Welfare Section */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: '#014e63' }}>
                Social Impact & <span className="gradient-text">Youth Welfare</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                At the heart of everything we do is a commitment to improving the lives of young people 
                and strengthening communities through the transformative power of music.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Heart style={{ color: '#014e63' }} className="mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#014e63' }}>Healthcare Access</h3>
                    <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                      Providing critical healthcare support and medical equipment to children 
                      and youth who need it most, ensuring no young person is left behind.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users style={{ color: '#014e63' }} className="mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#014e63' }}>Community Connection</h3>
                    <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                      Building bridges between generations and cultures through shared musical 
                      experiences that foster understanding and unity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target style={{ color: '#014e63' }} className="mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#014e63' }}>Educational Support</h3>
                    <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                      Supporting educational initiatives and programs that empower young people 
                      to reach their full potential and create positive change.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="rounded-xl p-8 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <h3 className="text-2xl font-serif font-semibold mb-6 text-center" style={{ color: '#014e63' }}>
                  Transparency Promise
                </h3>
                <div className="space-y-4">
                  <p style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                    We believe in complete transparency about our impact. Every dollar raised 
                    and every life touched is documented and shared with our community.
                  </p>
                  <div className="rounded-lg p-4 border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.3)' }}>
                    <p className="font-semibold mb-2" style={{ color: '#014e63' }}>Our Commitment:</p>
                    <p className="text-sm" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                      100% of performance remuneration is donated to charities supporting 
                      youth welfare. We cover our own expenses to ensure maximum impact.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Harmony for Hope */}
      <section className="pt-8 pb-16 px-4 md:px-8" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Harmony for Hope - Left Column */}
            <AnimatedSection>
              <div className="flex items-center mb-6">
                <Heart style={{ color: '#014e63' }} className="mr-4" size={48} />
                <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#014e63' }}>
                  Harmony for <span className="gradient-text">Hope</span>
                </h2>
              </div>
              <p className="text-xl mb-6" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                Our flagship fundraising concert series dedicated to supporting youth healthcare 
                and health-focused nonprofits. Every performance directly translates into 
                life-changing support for those who need it most.
              </p>
              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#014e63' }}>Our Focus Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Target style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Youth Healthcare Initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <Target style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Medical Equipment & Prosthetics</span>
                  </li>
                  <li className="flex items-start">
                    <Target style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Educational Health Programs</span>
                  </li>
                  <li className="flex items-start">
                    <Target style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Community Health Awareness</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Together Through Music - Right Column */}
            <AnimatedSection delay={0.3}>
              <div className="flex items-center mb-6">
                <Users style={{ color: '#014e63' }} className="mr-4" size={48} />
                <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#014e63' }}>
                  Together Through <span className="gradient-text">Music</span>
                </h2>
              </div>
              <p className="text-xl mb-6" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                Our community outreach program brings the joy and healing power of live music 
                directly to senior centers and community spaces, fostering intergenerational 
                connections and cultural appreciation.
              </p>
              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#014e63' }}>What We Bring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Target style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Live Carnatic Fusion Performances</span>
                  </li>
                  <li className="flex items-start">
                    <Target style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Interactive Musical Experiences</span>
                  </li>
                  <li className="flex items-start">
                    <Target style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Cultural Education & Storytelling</span>
                  </li>
                  <li className="flex items-start">
                    <Target style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Intergenerational Connection</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Recent Harmony for Hope Events */}
          <AnimatedSection>
            <h3 className="text-2xl font-serif font-semibold mb-8 text-center" style={{ color: '#014e63' }}>
              Recent <span className="gradient-text">Harmony for Hope</span> Events
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <div className="flex items-center mb-4">
                  <Calendar style={{ color: '#014e63' }} className="mr-3" size={20} />
                  <span className="font-semibold" style={{ color: '#014e63' }}>November 2025</span>
                </div>
                <h4 className="text-xl font-semibold mb-3" style={{ color: '#014e63' }}>Sankara Healthcare Fundraiser</h4>
                <p className="mb-4" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  A powerful evening of Carnatic fusion music that raised funds to provide 
                  prosthetics for 100 children, giving them new hope and mobility.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{ color: '#014e63' }}>100 Children Helped</span>
                  <MapPin style={{ color: 'rgba(1, 78, 99, 0.7)' }} size={16} />
                </div>
              </div>

              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <div className="flex items-center mb-4">
                  <Calendar style={{ color: '#014e63' }} className="mr-3" size={20} />
                  <span className="font-semibold" style={{ color: '#014e63' }}>October 2025</span>
                </div>
                <h4 className="text-xl font-semibold mb-3" style={{ color: '#014e63' }}>Microsoft Giving Campaign</h4>
                <p className="mb-4" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Partnered with Asha for Education & REDP to support educational 
                  initiatives through an intimate concert experience.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{ color: '#014e63' }}>$4,000 Raised</span>
                  <MapPin style={{ color: 'rgba(1, 78, 99, 0.7)' }} size={16} />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact by the Numbers */}
      <section className="section-padding" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#014e63' }}>
                Impact by the <span className="gradient-text">Numbers</span>
              </h2>
              <p className="text-xl" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                Quantifying the change we've created together
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <DollarSign style={{ color: '#014e63' }} className="mx-auto mb-4" size={48} />
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#014e63' }}>
                  $<CountUp end={12000} />+
                </div>
                <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Funds Raised</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <Calendar style={{ color: '#014e63' }} className="mx-auto mb-4" size={48} />
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#014e63' }}>
                  <CountUp end={15} />+
                </div>
                <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Concerts Held</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <Users style={{ color: '#014e63' }} className="mx-auto mb-4" size={48} />
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#014e63' }}>
                  <CountUp end={200} />+
                </div>
                <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Lives Impacted</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <Target style={{ color: '#014e63' }} className="mx-auto mb-4" size={48} />
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#014e63' }}>
                  <CountUp end={8} />
                </div>
                <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Partner Organizations</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#014e63' }}>
                Get <span className="gradient-text">Involved</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                Join us in creating positive change through music. There are many ways to be part of our initiatives.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="rounded-xl p-8 text-center card-hover shadow-lg border h-full" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <Heart style={{ color: '#014e63' }} className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#014e63' }}>Attend Our Concerts</h3>
                <p className="mb-6" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Join us at our Harmony for Hope fundraising concerts and be part of 
                  the change while enjoying beautiful music.
                </p>
                <a 
                  href="/events" 
                  className="font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
                  style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(1, 78, 99, 0.9)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#014e63'}
                >
                  View Events <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="rounded-xl p-8 text-center card-hover shadow-lg border h-full" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <Calendar style={{ color: '#014e63' }} className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#014e63' }}>Contact Us</h3>
                <p className="mb-6" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Get in touch with Dhwayam to learn more about our initiatives and create impact together.
                </p>
                <a 
                  href="/contact" 
                  className="font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
                  style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(1, 78, 99, 0.9)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#014e63'}
                >
                  Contact Us <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="rounded-xl p-8 text-center card-hover shadow-lg border h-full" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <Share2 style={{ color: '#014e63' }} className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#014e63' }}>Follow Us</h3>
                <p className="mb-6" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Stay connected with our journey and latest updates on social media.
                </p>
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://facebook.com/dhwayam.music" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center text-sm"
                    style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(1, 78, 99, 0.9)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#014e63'}
                  >
                    Facebook <Facebook className="ml-2" size={16} />
                  </a>
                  <a 
                    href="https://instagram.com/dhwayam.music" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center text-sm"
                    style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(1, 78, 99, 0.9)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#014e63'}
                  >
                    Instagram <Instagram className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Initiatives;