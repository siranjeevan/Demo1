import { motion } from 'framer-motion';
import { HandHeart, Users, ArrowRight, Calendar, MapPin, Target, DollarSign, Share2, Instagram, Facebook } from 'lucide-react';
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
      <section className="relative pt-12 pb-4 overflow-hidden md:pt-16" style={{ backgroundColor: '#F4F8F9' }}>
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-teal-100/30 rounded-full blur-3xl opacity-60 -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-sky-100/20 rounded-full blur-3xl opacity-40 -ml-20 -mb-20 pointer-events-none"></div>
        
        <div className="container-max relative z-10">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center text-center">

              <div className="relative pt-4 pb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center"
                >
                  <span className="text-[10px] md:text-xs uppercase tracking-[1em] text-[#00475b]/40 font-bold mb-6 ml-[1em]">
                    The Journey of
                  </span>
                  
                  <h1 className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                    <span className="text-6xl md:text-9xl font-serif font-light text-[#00475b]/30 tracking-tighter">
                      Our
                    </span>
                    <span className="text-6xl md:text-9xl font-serif font-bold text-[#00475b] tracking-tight">
                      Initiatives
                    </span>
                  </h1>

                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '60px' }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-[3px] bg-[#fbbf24] mt-12 rounded-full"
                  />
                </motion.div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Impact & Youth Welfare Section */}
      <section className="pb-16 pt-0 px-6 md:px-8" style={{ backgroundColor: '#F4F8F9' }}>
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
                  <HandHeart style={{ color: '#014e63' }} className="mr-4 mt-1 flex-shrink-0" size={24} />
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
      <section className="pt-4 pb-16 px-6 md:px-8" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Harmony for Hope Card */}
            <AnimatedSection>
              <div className="h-full rounded-3xl p-10 bg-white shadow-2xl border border-teal-900/5 hover:shadow-teal-900/10 transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-8 shadow-sm">
                  <HandHeart style={{ color: '#00475b' }} size={48} />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#00475b]">
                  Harmony for <span className="gradient-text italic">Hope</span>
                </h2>
                
                <p className="text-lg mb-10 leading-relaxed text-[#00475b]/70 font-light">
                  Our flagship fundraising concert series dedicated to supporting youth healthcare 
                  and health-focused nonprofits. Every performance directly translates into 
                  life-changing support for those who need it most.
                </p>

                <div className="">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-[#00475b]/30">Our Focus Areas</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { text: 'Youth Healthcare Initiatives', icon: '✦' },
                      { text: 'Medical Equipment & Prosthetics', icon: '✦' },
                      { text: 'Educational Health Programs', icon: '✦' },
                      { text: 'Community Health Awareness', icon: '✦' }
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ y: -2 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-teal-50/30 border border-teal-900/5 hover:bg-teal-50/50 transition-colors group"
                      >
                        <span className="text-[#fbbf24] font-bold group-hover:scale-125 transition-transform">{item.icon}</span>
                        <span className="text-sm font-semibold text-[#00475b]/80 tracking-tight">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Together Through Music Card */}
            <AnimatedSection delay={0.2}>
              <div className="h-full rounded-3xl p-10 bg-white shadow-2xl border border-teal-900/5 hover:shadow-teal-900/10 transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-8 shadow-sm">
                  <Users style={{ color: '#00475b' }} size={48} />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#00475b]">
                  Together Through <span className="gradient-text italic">Music</span>
                </h2>
                
                <p className="text-lg mb-10 leading-relaxed text-[#00475b]/70 font-light">
                  Our community outreach program brings the joy and healing power of live music 
                  directly to senior centers and community spaces, fostering intergenerational 
                  connections and cultural appreciation.
                </p>

                <div className="">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-[#00475b]/30">What We Bring</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { text: 'Live Carnatic Fusion Performances', icon: '✦' },
                      { text: 'Interactive Musical Experiences', icon: '✦' },
                      { text: 'Cultural Education & Storytelling', icon: '✦' },
                      { text: 'Intergenerational Connection', icon: '✦' }
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ y: -2 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-teal-50/30 border border-teal-900/5 hover:bg-teal-50/50 transition-colors group"
                      >
                        <span className="text-[#fbbf24] font-bold group-hover:scale-125 transition-transform">{item.icon}</span>
                        <span className="text-sm font-semibold text-[#00475b]/80 tracking-tight">{item.text}</span>
                    </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Recent Harmony for Hope Events */}
          <AnimatedSection>
            <div className="mt-12">
              <div className="text-center mb-16">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#00475b] mb-4">
                  Recent <span className="gradient-text italic">Harmony for Hope</span> Performances
                </h3>
                <div className="w-12 h-1 bg-[#fbbf24] mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    date: 'November 2025',
                    title: 'Sankara Healthcare Fundraiser',
                    description: 'A powerful evening of Carnatic fusion music that raised funds to provide prosthetics for 100 children, giving them new hope and mobility.',
                    impact: '100 Children Helped'
                  },
                  {
                    date: 'October 2025',
                    title: 'Microsoft Giving Campaign',
                    description: 'Partnered with Asha for Education & REDP to support educational initiatives through an intimate concert experience.',
                    impact: '$4,000 Raised'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl border border-teal-900/5 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-teal-50">
                        <Calendar style={{ color: '#00475b' }} size={16} />
                      </div>
                      <span className="text-xs font-bold text-[#00475b]/60 uppercase tracking-widest">{item.date}</span>
                    </div>
                    <h4 className="text-2xl font-serif font-bold mb-4 text-[#00475b]">{item.title}</h4>
                    <p className="text-[#00475b]/70 mb-8 leading-relaxed font-light">{item.description}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-[#00475b]/5">
                      <span className="text-xl font-bold text-[#00475b]">{item.impact}</span>
                      <MapPin style={{ color: '#fbbf24' }} size={18} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact by the Numbers */}
      <section className="pt-12 pb-24" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#00475b] mb-4">
                Impact by the <span className="gradient-text italic">Numbers</span>
              </h2>
              <div className="w-12 h-1 bg-[#fbbf24] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-[#00475b]/60 max-w-2xl mx-auto">
                Quantifying the change we've created together through music and mission.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, value: 12000, label: 'Funds Raised', suffix: '+' },
              { icon: Calendar, value: 15, label: 'Concerts Held', suffix: '+' },
              { icon: Users, value: 200, label: 'Lives Impacted', suffix: '+' },
              { icon: Target, value: 8, label: 'Partner Organizations', suffix: '' }
            ].map((stat, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="text-center p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <stat.icon style={{ color: '#00475b' }} size={40} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-[#00475b]">
                    {stat.icon === DollarSign && '$'}<CountUp end={stat.value} />{stat.suffix}
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold text-[#00475b]/40">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="pt-12 pb-24 px-6 md:px-8" style={{ backgroundColor: '#F4F8F9' }}>
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
                <HandHeart style={{ color: '#014e63' }} className="mx-auto mb-4" size={48} />
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