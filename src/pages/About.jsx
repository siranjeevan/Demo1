import { motion } from 'framer-motion';
import { Music, Heart, Users, Award } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
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
                About <span style={{ background: 'linear-gradient(to right, rgba(244, 248, 249, 0.9), #F4F8F9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>Dhwayam</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'rgba(244, 248, 249, 0.9)' }}>
                Where tradition meets purpose, and music becomes a catalyst for meaningful change
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Music style={{ color: '#014e63' }} size={48} />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8" style={{ color: '#014e63' }}>
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                At Dhwayam, we believe music is more than entertainment—it's a bridge that connects 
                hearts, cultures, and communities. We use the timeless beauty of Carnatic music, 
                fused with contemporary elements, as a powerful tool for social impact. Every 
                performance we give is an opportunity to raise funds, awareness, and hope for 
                causes that matter.
              </p>
              <div className="rounded-xl p-8 border" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <p className="text-lg font-medium italic" style={{ color: '#014e63' }}>
                  "Music has the power to heal, unite, and inspire. We're here to harness that 
                  power for the greater good, one performance at a time."
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are Story */}
      <section className="section-padding" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: '#014e63' }}>
                Who <span className="gradient-text">We Are</span>
              </h2>
              <p className="text-lg mb-6" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                Dhwayam was born from the shared vision of two young musicians in Seattle, 
                deeply rooted in the rich tradition of Carnatic music yet passionate about 
                addressing the challenges of our generation.
              </p>
              <p className="text-lg mb-6" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                As Gen Z artists, we understand the power of music to transcend boundaries 
                and create meaningful connections. We've taken the classical foundations of 
                Carnatic music and woven them with contemporary sounds to create something 
                uniquely ours—music that honors our heritage while speaking to today's world.
              </p>
              <p className="text-lg" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                Our journey began with a simple question: How can we use our musical gifts 
                to make a real difference? The answer became Dhwayam—a platform where every 
                note played serves a greater purpose.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="rounded-xl p-8 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#014e63' }}>
                  Our Values
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Heart style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#014e63' }}>Compassion</h4>
                      <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Every performance is driven by genuine care for our community</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#014e63' }}>Unity</h4>
                      <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Music brings people together across all boundaries</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#014e63' }}>Excellence</h4>
                      <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>We strive for the highest quality in both our music and our impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Band Photo Gallery */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#014e63' }}>
                Meet <span className="gradient-text">Dhwayam</span>
              </h2>
              <p className="text-xl" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                Capturing moments from our journey of music and impact
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="rounded-xl aspect-square flex items-center justify-center card-hover shadow-lg border" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                  <div className="text-center">
                    <Music style={{ color: '#014e63' }} className="mx-auto mb-2" size={48} />
                    <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Band Photo {index}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-padding" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#014e63' }}>
                Our <span className="gradient-text">Founders</span>
              </h2>
              <p className="text-xl" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                The visionaries behind Dhwayam's mission
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="rounded-xl aspect-square mb-6 flex items-center justify-center shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                  <Music style={{ color: '#014e63' }} size={64} />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-2" style={{ color: '#014e63' }}>Founder Name</h3>
                <p className="mb-4 font-medium" style={{ color: '#014e63' }}>Co-Founder & Lead Vocalist</p>
                <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Trained in Carnatic music from a young age, bringing traditional vocals 
                  into contemporary fusion arrangements with passion for social impact.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <div className="rounded-xl aspect-square mb-6 flex items-center justify-center shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                  <Music style={{ color: '#014e63' }} size={64} />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-2" style={{ color: '#014e63' }}>Founder Name</h3>
                <p className="mb-4 font-medium" style={{ color: '#014e63' }}>Co-Founder & Instrumentalist</p>
                <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Multi-instrumentalist with deep roots in Carnatic tradition, creating 
                  innovative fusion sounds that bridge classical and contemporary music.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#014e63' }}>
                Our <span className="gradient-text">Advisors</span>
              </h2>
              <p className="text-xl" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                Guided by experienced mentors in music and social impact
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-sm mx-auto">
            {[1].map((index) => (
              <AnimatedSection key={index} delay={0.2}>
                <div className="rounded-xl p-8 text-center shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                  <div className="rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
                    <Users style={{ color: '#014e63' }} size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#014e63' }}>Advisor Name</h3>
                  <p className="mb-4 font-medium" style={{ color: '#014e63' }}>Music Industry Mentor</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                    Providing guidance on musical excellence and industry best practices 
                    for impactful performances.
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;