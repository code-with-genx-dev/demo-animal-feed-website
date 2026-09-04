import React, { useState } from 'react';
import { X, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { businessConfig, getWhatsAppUrl, getPhoneUrl } from '../../data/businessConfig';
import { Button } from './Button';

/**
 * Quick Product Enquiry Modal
 */
export const EnquiryModal = ({ product, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: '5 to 10 bags',
    note: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen || !product) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please provide your name');
      return;
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    // Simulated lead capture
    setSubmitted(true);
  };

  const whatsappMessage = `Hi ${businessConfig.name}, I am interested in: ${product.name} (${product.category}). Please share current pricing and availability.`;
  const whatsappLink = getWhatsAppUrl(whatsappMessage);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Enquiry Received!</h3>
            <p className="text-sm text-gray-600 max-w-sm mx-auto">
              Thank you, <strong>{formData.name}</strong>. Our feed specialist will call you at{' '}
              <strong>{formData.phone}</strong> shortly with pricing for{' '}
              <strong>{product.name}</strong>.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
              <Button
                variant="whatsapp"
                href={whatsappLink}
                target="_blank"
                icon={MessageCircle}
              >
                Chat on WhatsApp Now
              </Button>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-start gap-4 mb-5 pb-4 border-b border-gray-100">
              <img
                src={product.image}
                alt={product.imageAlt || product.name}
                className="w-20 h-20 rounded-xl object-cover border border-gray-200 shrink-0"
              />
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 mb-1">
                  {product.category}
                </span>
                <h3 id="modal-title" className="text-lg font-bold text-gray-900 leading-tight">
                  {product.name}
                </h3>
                {product.packaging && (
                  <p className="text-xs text-gray-500 mt-1">Pack size: {product.packaging}</p>
                )}
              </div>
            </div>

            {/* Fast WhatsApp Option */}
            <div className="mb-6 p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold text-emerald-900 uppercase tracking-wide">
                    Fastest Response
                  </p>
                  <p className="text-xs text-emerald-800/80">Connect directly on WhatsApp</p>
                </div>
                <Button
                  variant="whatsapp"
                  size="sm"
                  href={whatsappLink}
                  target="_blank"
                  icon={MessageCircle}
                >
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Quick Callback Form */}
            <form onSubmit={handleFormSubmit} className="space-y-3.5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Or Request a Direct Callback
              </p>

              {error && (
                <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="modal-name">
                  Your Full Name *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="modal-phone">
                  Phone Number (Mobile) *
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. 98765 43210"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="modal-qty">
                  Approximate Quantity Needed
                </label>
                <select
                  id="modal-qty"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 focus:outline-none"
                >
                  <option value="1 to 4 bags (Trial/Retail)">1 to 4 bags (Trial/Retail)</option>
                  <option value="5 to 15 bags (Weekly Dairy)">5 to 15 bags (Weekly Dairy)</option>
                  <option value="20 to 50 bags (Monthly Farm Stock)">20 to 50 bags (Monthly Farm Stock)</option>
                  <option value="50+ bags (Wholesale/Commercial)">50+ bags (Wholesale/Commercial)</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  icon={Send}
                >
                  Submit Enquiry
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
