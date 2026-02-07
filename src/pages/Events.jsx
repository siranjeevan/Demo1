import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Heart, ArrowRight, Clock, Tag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import microsoftEventImage from '../assets/image.png';

const Events = () => {
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
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom right, #014e63, rgba(1, 78, 99, 0.9), rgba(1, 78, 99, 0.8))', color: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Our <span style={{ background: 'linear-gradient(to right, rgba(244, 248, 249, 0.9), #F4F8F9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>Events</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'rgba(244, 248, 249, 0.9)' }}>
                Join us at our upcoming performances and see how music creates lasting change in our community
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
                <div className="rounded-xl overflow-hidden card-hover shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 p-8">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="px-3 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}>
                          {event.initiative}
                        </span>
                        <div className="flex items-center" style={{ color: '#014e63' }}>
                          <Calendar className="mr-2" size={16} />
                          <span className="font-semibold">{event.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-serif font-bold mb-3" style={{ color: '#014e63' }}>{event.title}</h3>
                      <p className="mb-4" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>{event.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                          <Clock style={{ color: '#014e63' }} className="mr-3" size={16} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                          <MapPin style={{ color: '#014e63' }} className="mr-3" size={16} />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                          <Users style={{ color: '#014e63' }} className="mr-3" size={16} />
                          <span>Partner: {event.partner}</span>
                        </div>
                        <div className="flex items-center" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                          <Tag style={{ color: '#014e63' }} className="mr-3" size={16} />
                          <span>{event.ticketInfo}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col justify-center items-center text-center" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
                      <Heart style={{ color: '#014e63' }} className="mb-4" size={48} />
                      <h4 className="text-lg font-semibold mb-2" style={{ color: '#014e63' }}>Get Involved</h4>
                      <p className="text-sm mb-4" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                        Join us and be part of creating positive change through music
                      </p>
                      <button 
                        className="w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(1, 78, 99, 0.9)'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#014e63'}
                      >
                        Learn More
                      </button>
                    </div>
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
                <div className="rounded-xl overflow-hidden card-hover shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 p-8">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="px-3 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: 'rgba(1, 78, 99, 0.15)', color: '#014e63' }}>
                          {event.initiative}
                        </span>
                        <div className="flex items-center" style={{ color: '#014e63' }}>
                          <Calendar className="mr-2" size={16} />
                          <span className="font-semibold">{event.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-serif font-bold mb-3" style={{ color: '#014e63' }}>{event.title}</h3>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                          <MapPin style={{ color: '#014e63' }} className="mr-3" size={16} />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                          <Users style={{ color: '#014e63' }} className="mr-3" size={16} />
                          <span>Partner: {event.partner}</span>
                        </div>
                      </div>

                      {/* Impact Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: 'rgba(1, 78, 99, 0.1)' }}>
                        <Heart style={{ color: '#014e63' }} size={18} />
                        <span className="font-semibold" style={{ color: '#014e63' }}>{event.impact}</span>
                      </div>
                    </div>
                    
                    {event.image ? (
                      <div className="relative h-full min-h-[200px] lg:min-h-0">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                          <h4 className="text-lg font-semibold mb-1" style={{ color: '#F4F8F9' }}>Impact Created</h4>
                          <p className="text-2xl font-bold" style={{ color: '#F4F8F9' }}>{event.fundsRaised}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-8 flex flex-col justify-center items-center text-center" style={{ backgroundColor: 'rgba(1, 78, 99, 0.08)' }}>
                        <div className="mb-4 p-4 rounded-full" style={{ backgroundColor: 'rgba(1, 78, 99, 0.1)' }}>
                          <Heart style={{ color: '#014e63' }} size={40} />
                        </div>
                        <h4 className="text-lg font-semibold mb-2" style={{ color: '#014e63' }}>Impact Created</h4>
                        <p className="text-2xl font-bold mb-2" style={{ color: '#014e63' }}>{event.fundsRaised}</p>
                        <p className="text-sm" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                          Making a difference through music
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
              <div className="rounded-xl p-8 text-center card-hover shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <Heart style={{ color: '#014e63' }} className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#014e63' }}>Fundraising Concerts</h3>
                <p className="mb-6" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Harmony for Hope series supporting youth healthcare and educational initiatives 
                  through ticketed performances.
                </p>
                <div className="rounded-lg p-4 border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.3)' }}>
                  <p className="font-semibold" style={{ color: '#014e63' }}>Recent Impact:</p>
                  <p style={{ color: 'rgba(1, 78, 99, 0.8)' }}>$15,000+ raised</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="rounded-xl p-8 text-center card-hover shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <Users style={{ color: '#014e63' }} className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#014e63' }}>Community Outreach</h3>
                <p className="mb-6" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Together Through Music program bringing live performances to senior centers 
                  and community spaces.
                </p>
                <div className="rounded-lg p-4 border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.3)' }}>
                  <p className="font-semibold" style={{ color: '#014e63' }}>Recent Impact:</p>
                  <p style={{ color: 'rgba(1, 78, 99, 0.8)' }}>300+ seniors reached</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="rounded-xl p-8 text-center card-hover shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <Calendar style={{ color: '#014e63' }} className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#014e63' }}>Cultural Festivals</h3>
                <p className="mb-6" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                  Participating in community festivals to celebrate cultural diversity and 
                  promote cross-cultural understanding.
                </p>
                <div className="rounded-lg p-4 border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.3)' }}>
                  <p className="font-semibold" style={{ color: '#014e63' }}>Recent Impact:</p>
                  <p style={{ color: 'rgba(1, 78, 99, 0.8)' }}>5+ festivals participated</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(to right, #014e63, rgba(1, 78, 99, 0.9))', color: '#F4F8F9' }}>
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Want to Book Dhwayam for Your Event?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(244, 248, 249, 0.9)' }}>
              Bring the power of music and social impact to your next event. All performance 
              remuneration is donated to youth welfare charities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/booking" 
                className="font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
                style={{ backgroundColor: '#F4F8F9', color: '#014e63' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(244, 248, 249, 0.9)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#F4F8F9'}
              >
                Book Us Now <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="/contact" 
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
                Contact Us <Users className="ml-2" size={20} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Events;