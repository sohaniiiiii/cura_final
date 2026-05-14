import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  Linkedin,
  Github,
  Twitter,
  MessageSquare,
  Clock,
  Globe
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['support@apollo-health.ai', 'partnerships@apollo-health.ai'],
      description: 'We typically respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Healthcare Innovation Blvd', 'San Francisco, CA 94105'],
      description: 'Our headquarters in the heart of Silicon Valley'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (800) APOLLO-1'],
      description: 'Available Monday - Friday, 9AM - 6PM PST'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: '#',
      color: 'hover:text-gray-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageSquare,
      name: 'Discord',
      url: '#',
      color: 'hover:text-indigo-400'
    }
  ];

  const faqItems = [
    {
      question: 'How accurate are CURA\'s medical responses?',
      answer: 'CURA maintains 95%+ accuracy in medical responses, validated by healthcare professionals. However, it should supplement, not replace, professional medical advice.'
    },
    {
      question: 'Which languages does Cura support?',
      answer: 'Cura currently supports English and Spanish with plans to expand to more languages.'
    },
    {
      question: 'Is my health data secure?',
      answer: 'Yes, Cura uses enterprise-grade encryption and is HIPAA-compliant. Your data is encrypted in transit and at rest, and never shared without consent.'
    },
    {
      question: 'Can healthcare institutions integrate Cura?',
      answer: 'Absolutely! We offer enterprise solutions with custom integrations, API access, and specialized training for healthcare organizations.'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Get in{' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about Cura? Want to partner with us? We'd love to hear from you. 
            Our team is here to help you harness the power of AI for better healthcare.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="media">Media & Press</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-violet-500/25"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                </div>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-400">{info.description}</p>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Follow Us</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center space-x-2 p-3 bg-slate-700 rounded-lg text-gray-400 ${social.color} transition-colors`}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Office Hours</span>
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-gray-400">9AM - 6PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-gray-400">10AM - 4PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-violet-500/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-3xl p-12 border border-violet-500/30 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a healthcare professional, researcher, or innovator, 
            let's explore how Cura can advance your mission.
          </p>
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-violet-500/25">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;