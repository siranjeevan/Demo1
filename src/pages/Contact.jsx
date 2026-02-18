import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual EmailJS service ID, template ID, and public key
    // Sign up at https://www.emailjs.com/
    const YOUR_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const YOUR_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setIsSending(false);
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again or email us directly.");
          setIsSending(false);
      });
  };



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden" style={{ backgroundColor: '#F4F8F9' }}>
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-sky-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-teal-50 rounded-full blur-3xl opacity-50 -ml-20 -mb-20 pointer-events-none"></div>

        <div className="container-max relative z-10">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="uppercase tracking-[0.2em] text-sm font-bold text-[#014e63] mb-4 opacity-70">
                Contact Us
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight" style={{ color: '#014e63' }}>
                Let's Start a <br className="hidden md:block" />
                <span className="relative inline-block">
                  <span className="relative z-10">Conversation</span>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-2 left-0 h-4 bg-teal-100/50 -z-0"
                  ></motion.div>
                </span>
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(1, 78, 99, 0.7)' }}>
                Have a question, a project in mind, or just want to say hello? 
                We're here to listen and ready to collaborate on creating meaningful musical experiences.
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
              <div className="rounded-2xl p-10 shadow-2xl border bg-white" style={{ borderColor: 'rgba(1, 78, 99, 0.05)' }}>
                <div className="mb-8">
                  <h2 className="text-3xl font-serif font-bold mb-2 text-[#014e63]">
                    Send us a <span className="gradient-text">Message</span>
                  </h2>
                  <div className="h-1 w-12 bg-[#014e63] rounded-full"></div>
                </div>
                
                <form ref={form} onSubmit={handleSubmit} className="space-y-6 text-[#014e63]">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider opacity-60">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#F4F8F9]/50 border-transparent border-2 border-b-rgba(1,78,99,0.1) focus:border-[#014e63]/20 rounded-xl px-4 py-4 transition-all focus:outline-none"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider opacity-60">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#F4F8F9]/50 border-transparent border-2 border-b-rgba(1,78,99,0.1) focus:border-[#014e63]/20 rounded-xl px-4 py-4 transition-all focus:outline-none"
                        placeholder="e.g. john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#F4F8F9]/50 border-transparent border-2 border-b-rgba(1,78,99,0.1) focus:border-[#014e63]/20 rounded-xl px-4 py-4 transition-all focus:outline-none"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-[#F4F8F9]/50 border-transparent border-2 border-b-rgba(1,78,99,0.1) focus:border-[#014e63]/20 rounded-xl px-4 py-4 transition-all focus:outline-none resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full font-bold py-5 px-6 rounded-xl transition-all duration-300 shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
                    style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}
                  >
                    {isSending ? (
                      <span className="flex items-center tracking-widest uppercase text-xs">Sending Message...</span>
                    ) : (
                      <>
                        <span className="tracking-widest uppercase text-xs">Send Message</span>
                        <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={0.3}>
              <div className="space-y-8">
                {/* Primary Contact */}
                <div className="rounded-2xl p-10 shadow-2xl border bg-white" style={{ borderColor: 'rgba(1, 78, 99, 0.05)' }}>
                  <div className="mb-10">
                    <h3 className="text-3xl font-serif font-bold mb-2 text-[#014e63]">
                      Contact Information
                    </h3>
                    <div className="h-1 w-12 bg-[#014e63] rounded-full"></div>
                  </div>
                  
                  <div className="space-y-10">
                    {/* Email */}
                    <div className="flex items-center group">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
                        <Mail style={{ color: '#014e63' }} size={24} />
                      </div>
                      <div className="ml-6">
                        <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#014e63] opacity-40 mb-1">Email</span>
                        <a href="mailto:dhwayamband@gmail.com" className="text-lg font-medium text-[#014e63] hover:opacity-70 transition-all">
                          dhwayamband@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center group">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
                        <Phone style={{ color: '#014e63' }} size={24} />
                      </div>
                      <div className="ml-6">
                        <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#014e63] opacity-40 mb-1">Phone</span>
                        <p className="text-lg font-medium text-[#014e63]">Available upon request</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center group">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm" style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)' }}>
                        <MapPin style={{ color: '#014e63' }} size={24} />
                      </div>
                      <div className="ml-6">
                        <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#014e63] opacity-40 mb-1">Location</span>
                        <p className="text-lg font-medium text-[#014e63]">Seattle, Washington</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="rounded-2xl p-10 shadow-2xl border bg-white" style={{ borderColor: 'rgba(1, 78, 99, 0.05)' }}>
                  <div className="mb-6">
                    <h3 className="text-3xl font-serif font-bold mb-2 text-[#014e63]">
                      Follow Our Journey
                    </h3>
                    <div className="h-1 w-12 bg-[#014e63] rounded-full mb-6"></div>
                    <p className="text-lg leading-relaxed opacity-70" style={{ color: '#014e63' }}>
                      Stay connected for our latest performances, impact stories, and upcoming events.
                    </p>
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href="https://www.facebook.com/dhwayam.music/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, translateY: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm border border-transparent hover:border-[#014e63]/20"
                      style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)', color: '#014e63' }}
                      aria-label="Facebook"
                    >
                      <Facebook size={20} className="mr-2" />
                      <span className="font-semibold text-sm">Facebook</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://www.instagram.com/dhwayam.music/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, translateY: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm border border-transparent hover:border-[#014e63]/20"
                      style={{ backgroundColor: 'rgba(1, 78, 99, 0.05)', color: '#014e63' }}
                      aria-label="Instagram"
                    >
                      <Instagram size={20} className="mr-2" />
                      <span className="font-semibold text-sm">Instagram</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;