import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  MapPin, 
  AlertCircle, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { socialLinks } from '../data/socialLinks';
import { personalInfo } from '../data/personalInfo';
import { ContactFormData } from '../types';

interface ContactProps {
  onToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onToast }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    onToast(`Email copied: ${socialLinks.email}`);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend validation & honest notification
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionFeedback(
        "Form input validated! In this frontend deployment, no email backend (e.g. Formspree / EmailJS) is linked yet. To connect with Shreya directly, click 'Copy Email' or reach out via LinkedIn!"
      );
      onToast("Contact validated! Email configuration notice displayed.");
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-ivory-200/50 dark:bg-darkbg-card/40 border-t border-ivory-300 dark:border-darkbg-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          number="06"
          category="GET IN TOUCH"
          title="Let's Connect"
          subtitle="Have an opportunity, collaboration idea, or just want to connect? Feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Social Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border shadow-soft-sm space-y-6">
              <div>
                <h3 className="font-serif font-bold text-2xl text-sage-800 dark:text-ivory-50 mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-charcoal-500 dark:text-darkbg-muted leading-relaxed font-sans">
                  Open to software developer internship opportunities, collaborative engineering projects, and technical discussions.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-ivory-100 dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border text-sage-700 dark:text-sage-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 dark:text-darkbg-muted">
                        Email Address
                      </div>
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono font-medium text-charcoal-800 dark:text-ivory-100 hover:text-sage-700 dark:hover:text-sage-300 underline"
                        title="Click to compose email in Gmail"
                      >
                        {socialLinks.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-ivory-50 text-xs font-mono font-medium shadow-soft-sm transition-colors"
                      title="Compose in Gmail"
                    >
                      Compose
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      title="Copy to clipboard"
                      className="p-2 rounded-xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border hover:border-sage-400 text-charcoal-600 dark:text-ivory-200 transition-colors"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-charcoal-600 dark:text-ivory-200">
                <div className="p-2.5 rounded-xl bg-ivory-100 dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border text-sage-700 dark:text-sage-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 dark:text-darkbg-muted">
                    Location
                  </div>
                  <span className="font-sans font-medium">{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-ivory-200 dark:border-darkbg-border/60">
                <div className="text-xs font-mono uppercase tracking-wider text-sage-700 dark:text-sage-300 font-bold mb-3">
                  Online Profiles
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-ivory-100 dark:bg-darkbg-surface hover:bg-ivory-200 dark:hover:bg-darkbg-border border border-ivory-300 dark:border-darkbg-border text-xs font-mono font-medium text-charcoal-800 dark:text-ivory-100 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-ivory-100 dark:bg-darkbg-surface hover:bg-ivory-200 dark:hover:bg-darkbg-border border border-ivory-300 dark:border-darkbg-border text-xs font-mono font-medium text-charcoal-800 dark:text-ivory-100 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border shadow-soft-sm">
              <h3 className="font-serif font-bold text-2xl text-sage-800 dark:text-ivory-50 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-600 dark:text-ivory-300 font-semibold mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Chen"
                      className={`w-full px-4 py-3 rounded-xl bg-ivory-50 dark:bg-darkbg-base border ${
                        errors.name ? 'border-rose-400' : 'border-ivory-300 dark:border-darkbg-border'
                      } text-sm text-charcoal-800 dark:text-ivory-100 focus:outline-none focus:border-sage-400 dark:focus:border-sage-400 transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-600 dark:text-ivory-300 font-semibold mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-ivory-50 dark:bg-darkbg-base border ${
                        errors.email ? 'border-rose-400' : 'border-ivory-300 dark:border-darkbg-border'
                      } text-sm text-charcoal-800 dark:text-ivory-100 focus:outline-none focus:border-sage-400 dark:focus:border-sage-400 transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-600 dark:text-ivory-300 font-semibold mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / Technical Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-ivory-50 dark:bg-darkbg-base border ${
                      errors.subject ? 'border-rose-400' : 'border-ivory-300 dark:border-darkbg-border'
                    } text-sm text-charcoal-800 dark:text-ivory-100 focus:outline-none focus:border-sage-400 dark:focus:border-sage-400 transition-colors`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-500 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-600 dark:text-ivory-300 font-semibold mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl bg-ivory-50 dark:bg-darkbg-base border ${
                      errors.message ? 'border-rose-400' : 'border-ivory-300 dark:border-darkbg-border'
                    } text-sm text-charcoal-800 dark:text-ivory-100 focus:outline-none focus:border-sage-400 dark:focus:border-sage-400 transition-colors resize-none`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-mono font-semibold bg-sage-800 hover:bg-sage-900 text-ivory-50 shadow-soft-sm hover:shadow-soft-md transition-all duration-200 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Validating...' : 'Send Message'}</span>
                </button>
              </form>

              {/* Feedback Notice */}
              {submissionFeedback && (
                <div className="mt-6 p-4 rounded-2xl bg-sage-50 dark:bg-darkbg-surface border border-sage-300/70 dark:border-sage-800 flex items-start gap-3">
                  <Info className="w-5 h-5 text-sage-700 dark:text-sage-300 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-charcoal-600 dark:text-ivory-200 leading-relaxed font-sans">
                    {submissionFeedback}
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
