import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Heart, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    location: '',
    expectedAttendees: '',
    budget: '',
    eventDescription: '',
    specialRequirements: '',
    hearAboutUs: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-20 min-h-screen flex items-center justify-center"
      >
        <div className="container-max section-padding text-center">
          <AnimatedSection>
            <CheckCircle style={{ color: '#014e63' }} className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl font-serif font-bold mb-4" style={{ color: '#014e63' }}>
              Thank You for Your <span className="gradient-text">Inquiry!</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
              We've received your booking request and will get back to you within 24 hours. 
              We're excited about the possibility of creating impact together through music.
            </p>
            <div className="rounded-xl p-6 max-w-md mx-auto shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
              <p className="font-semibold mb-2" style={{ color: '#014e63' }}>What's Next?</p>
              <p className="text-sm" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                Our team will review your request and contact you to discuss details, 
                availability, and how we can make your event impactful.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </motion.div>
    );
  }

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
                Book <span style={{ background: 'linear-gradient(to right, rgba(244, 248, 249, 0.9), #F4F8F9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>Dhwayam</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'rgba(244, 248, 249, 0.9)' }}>
                Bring the transformative power of Carnatic fusion music to your event while 
                supporting youth welfare initiatives
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Important Message */}
      <section className="section-padding" style={{ backgroundColor: '#014e63' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="rounded-xl p-8 text-center shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
              <Heart style={{ color: '#014e63' }} className="mx-auto mb-4" size={48} />
              <h2 className="text-2xl font-serif font-bold mb-4" style={{ color: '#014e63' }}>
                Our Commitment to Impact
              </h2>
              <p className="text-xl mb-4" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                Any remuneration received from performances will be donated to a charity 
                supporting youth welfare.
              </p>
              <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                When you book Dhwayam, you're not just getting exceptional music – you're 
                directly contributing to positive change in young people's lives.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection>
              <div className="rounded-xl p-8 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: '#014e63' }}>
                  Event <span className="gradient-text">Details</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg px-4 py-3 transition-colors focus:outline-none"
                        style={{ 
                          backgroundColor: '#F4F8F9', 
                          borderColor: 'rgba(1, 78, 99, 0.3)', 
                          color: '#014e63'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#014e63'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(1, 78, 99, 0.3)'}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg px-4 py-3 transition-colors focus:outline-none"
                        style={{ 
                          backgroundColor: '#F4F8F9', 
                          borderColor: 'rgba(1, 78, 99, 0.3)', 
                          color: '#014e63'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#014e63'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(1, 78, 99, 0.3)'}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 transition-colors focus:outline-none"
                        style={{ 
                          backgroundColor: '#F4F8F9', 
                          borderColor: 'rgba(1, 78, 99, 0.3)', 
                          color: '#014e63'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#014e63'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(1, 78, 99, 0.3)'}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 transition-colors focus:outline-none"
                        style={{ 
                          backgroundColor: '#F4F8F9', 
                          borderColor: 'rgba(1, 78, 99, 0.3)', 
                          color: '#014e63'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#014e63'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(1, 78, 99, 0.3)'}
                        placeholder="Organization or company name"
                      />
                    </div>
                  </div>

                  {/* Event Information */}
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-lg px-4 py-3 transition-colors focus:outline-none"
                      style={{ 
                        backgroundColor: '#F4F8F9', 
                        borderColor: 'rgba(1, 78, 99, 0.3)', 
                        color: '#014e63'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#014e63'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(1, 78, 99, 0.3)'}
                    >
                      <option value="">Select event type</option>
                      <option value="fundraising">Fundraising Concert</option>
                      <option value="cultural">Cultural Festival</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="community">Community Outreach</option>
                      <option value="private">Private Event</option>
                      <option value="educational">Educational Institution</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                        Event Date *
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg px-4 py-3 transition-colors focus:outline-none"
                        style={{ 
                          backgroundColor: '#F4F8F9', 
                          borderColor: 'rgba(1, 78, 99, 0.3)', 
                          color: '#014e63'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#014e63'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(1, 78, 99, 0.3)'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                        Event Time
                      </label>
                      <input
                        type="time"
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 transition-colors focus:outline-none"
                        style={{ 
                          backgroundColor: '#F4F8F9', 
                          borderColor: 'rgba(1, 78, 99, 0.3)', 
                          color: '#014e63'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#014e63'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(1, 78, 99, 0.3)'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                      Event Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-lg px-4 py-3 transition-colors focus:outline-none"
                      style={{ 
                        backgroundColor: '#F4F8F9', 
                        borderColor: 'rgba(1, 78, 99, 0.3)', 
                        color: '#014e63'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#014e63'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(1, 78, 99, 0.3)'}
                      placeholder="Venue name and address"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                        Expected Attendees
                      </label>
                      <input
                        type="number"
                        name="expectedAttendees"
                        value={formData.expectedAttendees}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 transition-colors focus:outline-none"
                        style={{ 
                          backgroundColor: '#F4F8F9', 
                          borderColor: 'rgba(1, 78, 99, 0.3)', 
                          color: '#014e63'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#014e63'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(1, 78, 99, 0.3)'}
                        placeholder="Approximate number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 transition-colors focus:outline-none"
                        style={{ 
                          backgroundColor: '#F4F8F9', 
                          borderColor: 'rgba(1, 78, 99, 0.3)', 
                          color: '#014e63'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#014e63'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(1, 78, 99, 0.3)'}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1000">Under $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000-plus">$5,000+</option>
                        <option value="nonprofit">Nonprofit/Community Rate</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                      Event Description *
                    </label>
                    <textarea
                      name="eventDescription"
                      value={formData.eventDescription}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full border rounded-lg px-4 py-3 transition-colors focus:outline-none resize-vertical"
                      style={{ 
                        backgroundColor: '#F4F8F9', 
                        borderColor: 'rgba(1, 78, 99, 0.3)', 
                        color: '#014e63'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#014e63'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(1, 78, 99, 0.3)'}
                      placeholder="Tell us about your event, its purpose, and what you hope to achieve..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                      Special Requirements
                    </label>
                    <textarea
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleChange}
                      rows={3}
                      className="w-full border rounded-lg px-4 py-3 transition-colors focus:outline-none resize-vertical"
                      style={{ 
                        backgroundColor: '#F4F8F9', 
                        borderColor: 'rgba(1, 78, 99, 0.3)', 
                        color: '#014e63'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#014e63'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(1, 78, 99, 0.3)'}
                      placeholder="Sound equipment, stage setup, accessibility needs, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                      How did you hear about us?
                    </label>
                    <select
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-4 py-3 transition-colors focus:outline-none"
                      style={{ 
                        backgroundColor: '#F4F8F9', 
                        borderColor: 'rgba(1, 78, 99, 0.3)', 
                        color: '#014e63'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#014e63'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(1, 78, 99, 0.3)'}
                    >
                      <option value="">Select an option</option>
                      <option value="website">Website</option>
                      <option value="social-media">Social Media</option>
                      <option value="word-of-mouth">Word of Mouth</option>
                      <option value="previous-event">Previous Event</option>
                      <option value="partner-organization">Partner Organization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                    style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(1, 78, 99, 0.9)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#014e63'}
                  >
                    <Send className="mr-2" size={20} />
                    Submit Booking Request
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Information Sidebar */}
            <AnimatedSection delay={0.3}>
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                  <h3 className="text-xl font-serif font-semibold mb-4" style={{ color: '#014e63' }}>
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail style={{ color: '#014e63' }} className="mr-3" size={20} />
                      <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>dhwayamfoundation@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone style={{ color: '#014e63' }} className="mr-3" size={20} />
                      <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Available upon request</span>
                    </div>
                  </div>
                </div>

                {/* What We Offer */}
                <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                  <h3 className="text-xl font-serif font-semibold mb-4" style={{ color: '#014e63' }}>
                    What We Offer
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                      <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Live Carnatic fusion performances</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                      <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Customizable setlists for your event</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                      <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Professional sound equipment coordination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                      <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Cultural education and storytelling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle style={{ color: '#014e63' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                      <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Social impact integration</span>
                    </li>
                  </ul>
                </div>

                {/* Event Types */}
                <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                  <h3 className="text-xl font-serif font-semibold mb-4" style={{ color: '#014e63' }}>
                    Event Types We Support
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Heart style={{ color: '#014e63' }} className="mr-3" size={16} />
                      <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Fundraising concerts</span>
                    </div>
                    <div className="flex items-center">
                      <Users style={{ color: '#014e63' }} className="mr-3" size={16} />
                      <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Community outreach events</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar style={{ color: '#014e63' }} className="mr-3" size={16} />
                      <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Cultural festivals</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin style={{ color: '#014e63' }} className="mr-3" size={16} />
                      <span style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Corporate events</span>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                  <h3 className="text-xl font-serif font-semibold mb-4" style={{ color: '#014e63' }}>
                    Response Time
                  </h3>
                  <p style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                    We typically respond to booking inquiries within 24 hours. For urgent 
                    requests, please mention it in your event description.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Booking;