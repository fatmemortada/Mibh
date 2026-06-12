"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800">Thank you for your message!</h3>
        <p className="text-green-700 mt-2">We will get back to you as soon as possible, insha&apos;Allah.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
          placeholder="your.email@example.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
          placeholder="(514) XXX-XXXX"
        />
      </div>
      <div>
        <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
          Topic *
        </label>
        <select
          id="topic"
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white"
        >
          <option value="">Select a topic</option>
          <option value="programs">Programs & Activities</option>
          <option value="donations">Donations</option>
          <option value="volunteering">Volunteering</option>
          <option value="religious">Religious Questions</option>
          <option value="community">Community Support</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-y"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
      >
        Send Message
      </button>
    </form>
  );
}
