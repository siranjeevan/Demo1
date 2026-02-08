import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    console.log('Contact form submitted:', formData);
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
              Message <span className="gradient-text">Sent!</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
              Thank you for reaching out to us. We'll get back to you as soon as possible, 
              usually within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(1, 78, 99, 0.9)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#014e63'}
            >
              Send Another Message
            </button>
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
      className=""
    >
      {/* Hero Section */}
      <section className="section-padding min-h-[60vh] flex items-center justify-center pt-32" style={{ background: 'linear-gradient(to bottom right, #014e63, rgba(1, 78, 99, 0.9), rgba(1, 78, 99, 0.8))', color: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Get in <span style={{ background: 'linear-gradient(to right, rgba(244, 248, 249, 0.9), #F4F8F9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>Touch</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'rgba(244, 248, 249, 0.9)' }}>
                We'd love to hear from you. Reach out for collaborations, questions, 
                or to learn more about our mission.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="rounded-xl p-8 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: '#014e63' }}>
                  Send us a <span className="gradient-text">Message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                        Your Name *
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

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
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
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="collaboration">Collaboration Opportunity</option>
                      <option value="partnership">Partnership Proposal</option>
                      <option value="media">Media & Press</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#014e63' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full border rounded-lg px-4 py-3 transition-colors focus:outline-none resize-vertical"
                      style={{ 
                        backgroundColor: '#F4F8F9', 
                        borderColor: 'rgba(1, 78, 99, 0.3)', 
                        color: '#014e63'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#014e63'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(1, 78, 99, 0.3)'}
                      placeholder="Tell us how we can help you or what you'd like to discuss..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                    style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(1, 78, 99, 0.9)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#014e63'}
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={0.3}>
              <div className="space-y-8">
                {/* Primary Contact */}
                <div className="rounded-xl p-8 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                  <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#014e63' }}>
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail style={{ color: '#014e63' }} className="mr-4 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1" style={{ color: '#014e63' }}>Email</h4>
                        <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>dhwayamband@gmail.com</p>
                        <p className="text-sm mt-1" style={{ color: 'rgba(1, 78, 99, 0.6)' }}>
                          Primary contact for all inquiries
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone style={{ color: '#014e63' }} className="mr-4 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1" style={{ color: '#014e63' }}>Phone</h4>
                        <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Available upon request</p>
                        <p className="text-sm mt-1" style={{ color: 'rgba(1, 78, 99, 0.6)' }}>
                          Phone number provided after initial contact
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin style={{ color: '#014e63' }} className="mr-4 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1" style={{ color: '#014e63' }}>Location</h4>
                        <p style={{ color: 'rgba(1, 78, 99, 0.7)' }}>Seattle, Washington</p>
                        <p className="text-sm mt-1" style={{ color: 'rgba(1, 78, 99, 0.6)' }}>
                          Serving the Pacific Northwest region
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="rounded-xl p-8 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                  <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#014e63' }}>
                    Follow Our Journey
                  </h3>
                  <p className="mb-6" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                    Stay connected with us on social media to see our latest performances, 
                    impact stories, and upcoming events.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/dhwayam.music/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg transition-colors"
                      style={{ backgroundColor: 'rgba(1, 78, 99, 0.1)' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(1, 78, 99, 0.2)'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(1, 78, 99, 0.1)'}
                      aria-label="Instagram"
                    >
                      <span className="flex items-center space-x-2">
                        <Instagram style={{ color: '#014e63' }} size={24} />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="rounded-xl p-8 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                  <h3 className="text-2xl font-serif font-semibold mb-4" style={{ color: '#014e63' }}>
                    Response Time
                  </h3>
                  <p className="mb-4" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please mention it in your message subject line.
                  </p>
                  <div className="rounded-lg p-4 border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.3)' }}>
                    <p className="font-semibold mb-2" style={{ color: '#014e63' }}>Business Hours:</p>
                    <p className="text-sm" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Weekend: Limited availability for urgent matters
                    </p>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="rounded-xl p-8 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(1, 78, 99, 0.2)' }}>
                  <h3 className="text-2xl font-serif font-semibold mb-4" style={{ color: '#014e63' }}>
                    Quick Questions?
                  </h3>
                  <p className="mb-4" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                    Before reaching out, you might find answers to common questions about 
                    our booking process, performance details, and impact initiatives.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium" style={{ color: 'rgba(1, 78, 99, 0.8)' }}>Common Topics:</p>
                    <ul className="text-sm space-y-1" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                      <li>• Booking process and requirements</li>
                      <li>• Performance duration and setup</li>
                      <li>• Pricing and nonprofit rates</li>
                      <li>• Travel and accommodation</li>
                      <li>• Technical requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#014e63' }}>
              Ready to Create <span className="gradient-text">Impact</span> Together?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
              Whether you're planning an event, exploring partnerships, or just want to 
              learn more about our mission, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <a 
                href="mailto:dhwayamband@gmail.com" 
                className="border-2 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md"
                style={{ borderColor: '#014e63', color: '#014e63', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#014e63';
                  e.target.style.color = '#F4F8F9';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#014e63';
                }}
              >
                Email Us Directly
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;