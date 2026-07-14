import React, { useState } from 'react';
import { Send, Mail, MessageCircle, User, CheckCircle, AlertCircle } from 'lucide-react';

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

type SubmitStatus = 'idle' | 'success' | 'error';

const SendMessage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData })
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (submitStatus !== 'idle') setSubmitStatus('idle');
  };

  return (
    <div className="space-y-6">
      <div className="contact-form">
        <h3 className="text-xl font-bold mb-5 text-firebase-orange">
          Send a Message
        </h3>

        {/* Inline feedback banner */}
        {submitStatus === 'success' && (
          <div className="flex items-center gap-3 mb-5 px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">Message sent! I'll get back to you soon.</span>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="flex items-center gap-3 mb-5 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">Submission failed. Please try again or email me directly.</span>
          </div>
        )}

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input type="hidden" name="contact" value="contact" />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-firebase-orange" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full pl-10 pr-4 py-2.5 bg-black/20 border border-white/10 rounded-lg focus:border-firebase-orange focus:outline-none focus:ring-2 focus:ring-firebase-orange/20 transition-all text-sm"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-firebase-orange" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full pl-10 pr-4 py-2.5 bg-black/20 border border-white/10 rounded-lg focus:border-firebase-orange focus:outline-none focus:ring-2 focus:ring-firebase-orange/20 transition-all text-sm"
              />
            </div>
          </div>

          <div className="relative">
            <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-firebase-orange" />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full pl-10 pr-4 py-2.5 bg-black/20 border border-white/10 rounded-lg focus:border-firebase-orange focus:outline-none focus:ring-2 focus:ring-firebase-orange/20 transition-all text-sm"
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-4 bg-black/20 border border-white/10 rounded-lg focus:border-firebase-orange focus:outline-none focus:ring-2 focus:ring-firebase-orange/20 transition-all resize-none text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-gradient-to-r from-firebase-blue to-firebase-red rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-firebase-blue/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
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
