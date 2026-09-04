import React, { useState } from 'react';
import { Send, Phone, MessageCircle, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { businessConfig, getPhoneUrl, getWhatsAppUrl } from '../../data/businessConfig';
import { categories } from '../../data/products';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.error) setStatus((prev) => ({ ...prev, error: '' }));
  };

  const validatePhone = (phone) => {
    const cleanNumber = phone.replace(/[^0-9]/g, '');
    return cleanNumber.length >= 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validations
    if (!formData.name.trim()) {
      setStatus({ loading: false, success: false, error: 'Please enter your name.' });
      return;
    }

    if (!validatePhone(formData.phone)) {
      setStatus({
        loading: false,
        success: false,
        error: 'Please enter a valid 10-digit mobile number for callback.'
      });
      return;
    }

    setStatus({ loading: true, success: false, error: '' });

    // Simulated API call (structured so client backend/API endpoint can easily replace this)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus({
        loading: false,
        success: true,
        error: ''
      });

      // Clear form
      setFormData({
        name: '',
        phone: '',
        email: '',
        product: '',
        message: ''
      });
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: 'Something went wrong. Please call or WhatsApp us directly.'
      });
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#faf9f6]" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Lead Enquiry"
          title="Talk to Us About Your Feed Requirements"
          subtitle="Whether you need single retail bags or multi-tonnage commercial delivery, send us an enquiry or connect instantly via WhatsApp."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Quick Contact Info & Direct Links (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-subtle space-y-6">
              <h3 className="text-xl font-bold text-gray-900">
                Direct Communication
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                For prompt quotation, quantity discounts, and delivery scheduling, reach out directly:
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp Quick Link */}
                <a
                  href={getWhatsAppUrl("Hello, I would like to get a quote on your animal feed products.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 hover:bg-emerald-100/70 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-emerald-900">Instant WhatsApp Chat</p>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                      {businessConfig.phoneDisplay || businessConfig.phone}
                    </p>
                  </div>
                </a>

                {/* Direct Phone Call */}
                <a
                  href={getPhoneUrl()}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 hover:bg-stone-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-600">Direct Phone Order</p>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                      {businessConfig.phoneDisplay || businessConfig.phone}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 hover:bg-stone-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-stone-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-600">Email Enquiries</p>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-emerald-800 transition-colors truncate">
                      {businessConfig.email}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="w-10 h-10 rounded-lg bg-stone-700 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600">Dispatch Location</p>
                    <p className="text-sm text-gray-800 mt-0.5">
                      {businessConfig.address.formatted}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Enquiry Form (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-stone-200/80 shadow-subtle">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Send Your Requirement
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Fill out the form below. We will revert with wholesale price lists and delivery estimates within 2 working hours.
            </p>

            {status.success ? (
              <div className="p-8 text-center rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4 animate-in fade-in">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950">Thank you for your enquiry!</h4>
                <p className="text-sm text-emerald-900/80 max-w-md mx-auto">
                  Your request has been registered. Our feed sales team will call you back shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setStatus({ loading: false, success: false, error: '' })}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                {status.error && (
                  <div className="p-3 rounded-lg bg-red-50 text-red-700 text-sm font-medium border border-red-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{status.error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Kumar"
                      required
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 98765 43210"
                      required
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-product" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Product / Requirement
                    </label>
                    <select
                      id="form-product"
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 bg-white focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 focus:outline-none transition-colors"
                    >
                      <option value="">-- Select Product Category --</option>
                      {categories.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                      <option value="Bulk Order Quotation">Bulk Order Quotation (Multi-tonnage)</option>
                      <option value="Dealership & Retail Partnership">Dealership & Retail Partnership</option>
                      <option value="General Feeding Advice">General Feeding Advice</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Message / Estimated Quantity
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about the number of animals, bag quantities, or required delivery location..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={status.loading}
                    icon={status.loading ? Loader2 : Send}
                  >
                    {status.loading ? 'Sending Enquiry...' : 'Send Enquiry'}
                  </Button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
