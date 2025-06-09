// components/SendMessage.tsx
import React, { useState } from 'react';
import { Send, Mail, MessageCircle, User } from 'lucide-react';

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const SendMessage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData })
      });
      alert('Message sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Submission failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="space-y-8">
      <div className="contact-form">
        <h3 className="text-2xl font-bold mb-6 text-firebase-orange">Send a Message</h3>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Netlify form name */}
          <input type="hidden" name="contact" value="contact" />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-firebase-orange" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:border-firebase-orange focus:outline-none focus:ring-2 focus:ring-firebase-orange/20 transition-all"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-firebase-orange" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:border-firebase-orange focus:outline-none focus:ring-2 focus:ring-firebase-orange/20 transition-all"
              />
            </div>
          </div>

          <div className="relative">
            <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-firebase-orange" />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:border-firebase-orange focus:outline-none focus:ring-2 focus:ring-firebase-orange/20 transition-all"
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              required
              className="w-full p-4 bg-black/20 border border-white/10 rounded-lg focus:border-firebase-orange focus:outline-none focus:ring-2 focus:ring-firebase-orange/20 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-firebase-blue to-firebase-red rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-firebase-blue/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Email</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMessage;
