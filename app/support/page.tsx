"use client";

import React from "react";
import {
  Search,
  Wrench,
  FileText,
  AlertCircle,
  MessageCircle,
  Phone,
  Mail,
  ChevronRight,
  Send,
} from "lucide-react";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <HeroSection />
      <CategoriesSection />
      <ContactSection />
      <NewsletterSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="bg-[#047857] px-4 py-16 md:py-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          How can we help you today?
        </h1>
        <p className="text-emerald-100 text-lg mb-8">
          Search our knowledge base for installation guides, billing info, and
          troubleshooting.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-6">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-lg"
            placeholder="Search for articles, e.g. 'monitoring system setup'..."
          />
        </div>

        {/* Popular Tags */}
        <div className="flex flex-wrap justify-center gap-2 text-sm text-emerald-100">
          <span className="font-semibold">Popular:</span>
          <button className="hover:text-white hover:underline">
            Billing cycle
          </button>
          <button className="hover:text-white hover:underline">
            Battery maintenance
          </button>
          <button className="hover:text-white hover:underline">
            App sync issues
          </button>
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  const categories = [
    {
      icon: <Wrench className="h-6 w-6 text-emerald-600" />,
      bg: "bg-emerald-100",
      title: "Installation",
      links: [
        "Pre-install checklist",
        "Connecting to grid",
        "Panel orientation guide",
      ],
      count: 12,
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      bg: "bg-blue-100",
      title: "Billing & Plans",
      links: [
        "Understanding your invoice",
        "Payment methods",
        "Subscription upgrades",
      ],
      count: 8,
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-orange-600" />,
      bg: "bg-orange-100",
      title: "Troubleshooting",
      links: [
        "System offline alerts",
        "Inverter error codes",
        "Resetting your gateway",
      ],
      count: 15,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow"
          >
            <div
              className={`w-12 h-12 ${cat.bg} rounded-lg flex items-center justify-center mb-6`}
            >
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {cat.title}
            </h3>
            <ul className="space-y-3 mb-6">
              {cat.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#047857] group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link}
                    </span>
                    <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="text-[#047857] font-semibold text-sm hover:underline"
            >
              View all {cat.count} articles
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Still need help?</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Options */}
        <div className="space-y-6">
          {/* Live Chat */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="bg-emerald-100 p-3 rounded-full">
              <MessageCircle className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Live Chat</h3>
              <p className="text-gray-500 text-sm mb-4">
                Wait time: ~2 minutes. Available 24/7 for urgent issues.
              </p>
              <button className="bg-[#047857] hover:bg-[#036c4e] text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
                Start Chat Now
              </button>
            </div>
          </div>

          {/* Phone Support */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Phone className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Phone Support</h3>
              <p className="text-gray-500 text-sm mb-2">
                Direct line to our technical expert team in your region.
              </p>
              <p className="text-[#047857] font-bold text-lg mb-1">
                +254 (0) 800 123 456
              </p>
              <p className="text-xs text-gray-400">
                Mon-Fri: 8am - 8pm | Sat: 9am - 4pm
              </p>
            </div>
          </div>

          {/* Email Support */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Mail className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Email Support</h3>
              <p className="text-gray-500 text-sm mb-2">
                For non-urgent inquiries. We usually respond within 24 hours.
              </p>
              <a
                href="mailto:support@cleanspark.africa"
                className="text-[#047857] font-semibold hover:underline"
              >
                support@cleanspark.africa
              </a>
            </div>
          </div>
        </div>

        {/* Ticket Form */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Submit a Ticket
          </h3>
          <p className="text-gray-500 mb-8">
            Can't find what you're looking for? Open a formal support request.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Subject
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white">
                <option>Technical Issue</option>
                <option>Billing Question</option>
                <option>Installation Inquiry</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                placeholder="Describe your issue in detail..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#047857] hover:bg-[#036c4e] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Submit Ticket
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="bg-gray-100 py-16 mt-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Informed</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Get monthly tips on how to optimize your solar energy usage and
          maintenance alerts directly in your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            className="bg-[#047857] hover:bg-[#036c4e] text-white font-bold px-8 py-3 rounded-full transition-colors flex items-center justify-center gap-2"
          >
            Subscribe
            <ChevronRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
