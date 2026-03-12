/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Clock, 
  Mail, 
  Share2, 
  Menu,
  ShieldCheck,
  ChevronRight,
  Award,
  Building2,
  Handshake
} from 'lucide-react';
import { motion } from 'motion/react';

const IMAGES = {
  house: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
  interior: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKyHQN0BmacSEb0XkCgYOdj0XL-qTWQsQ4JDIqRVEODVXOVK-2XnWb77a2L3Oy-PpM8PWltTKxPUIkFXAT-t2t2FQgL6STUDI82zLVVBxG9w_DLk2o7Z8IPxViYMmy7u4AKr2hpRZ7SbiSqjRfl3yuY3blZSLVuE54iyNqpvxEXs1yEMbYtyyN1gOJDMffnXhuoneBFXb0iAXQSDwQa8mtQi_3PscKL3Tx6gOWoVwhwSs4AvLsjI5Cz7I0TlGCMuVzX5gqHIjPgzQ",
  exterior: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoMNommoXp2UZGHvw275loJHY6pqDHsmMK5e7FVSLy8WOPw7tLxaFxd8SA7EUaUHoNE7NtccfDE5SOUPJcAMDZBTPq5F1aEw27Uhi_DLAKIOr3fMFHZ7ZUnDo-n372-9RofmXM0l5F-0S8Dw4GhN0W9SFqhNrzy8lbuiAzH390HNS6Rkk3ZUrTB14IXi4vFM19GA-8QoG1V52kfASc76y81bMqfQZu-XT0pnHiLdj8s8PeB48TWYJQYpAim_h7RbSrVQGPB4cTQ38",
  cabinet: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPmXiG18fMUT23Fka48JPDmi6rfv8skQx9G2_uO3TjAZa3cg5mc3pXeIOHrhhq1iV9om6YPkpPPMiqGg-bG2xXeuCMTl4TwABNsG1Dv8Bx6Q9DDWs01fSBh5Rym_eAUQ0c6MenF6tE0uk_pqWgZjeBo7DSiHnxGAZ9Mua7lAliD9q6MwRbl_vHitrqPgmlp6l9uYEpv2NHG9kr4QOjiYLsoLu1j4l8sYLxlJrj47_tlbY2ZbemC-7QAldwAQ14aIHXxPKR5yG2gvY"
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 lg:px-20 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-primary">
          <div className="w-8 h-8">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fillRule="evenodd"></path>
              <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-slate-900 text-xl font-black tracking-tight">Triple A Painting</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'Portfolio', 'About Us', 'Reviews'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-600 text-sm font-semibold hover:text-primary transition-colors">
              {item}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200">
            <a href="tel:3609102546" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-black text-lg">(360) 910-2546</span>
            </a>
            <a href="#quote" className="bg-accent text-slate-900 px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg hover:brightness-110 transition-all">
              Free Estimate
            </a>
          </div>
        </nav>
        <button className="md:hidden text-slate-900">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <main className="flex-1 wall-texture-overlay">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 lg:py-24 px-6 lg:px-20 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 wall-texture-bg pointer-events-none"></div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                <span className="bg-accent/20 text-accent font-bold px-3 py-1 rounded text-sm uppercase tracking-wider w-fit">
                  Local Painting Experts
                </span>
                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                  Trusted Local & Family-Owned Painting Experts
                </h1>
                <p className="text-lg md:text-xl text-slate-100 font-normal leading-relaxed opacity-90">
                  Transform your space with Triple A Painting. We provide residential and commercial interior and exterior services with a focus on precision and durability since 2005.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="tel:3609102546" className="bg-accent text-slate-900 px-8 py-4 rounded-lg text-lg font-black shadow-xl hover:scale-105 transition-transform flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  Call (360) 910-2546
                </a>
                <a href="#quote" className="bg-white/10 border-2 border-white/30 px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center">
                  Get a Free Quote
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={IMAGES.house} 
                alt="Modern House" 
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl border-4 border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl hidden md:block border border-slate-100 min-w-[200px]">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center border-r border-slate-200 pr-4">
                    <span className="text-3xl font-black text-slate-900">4.8</span>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-slate-900 text-[10px] font-bold uppercase tracking-tight">Customer Choice</p>
                    <p className="text-slate-500 text-[8px] font-medium">Based on Google Reviews</p>
                    <div className="flex items-center gap-1 mt-1 text-green-600">
                      <ShieldCheck className="w-3 h-3" />
                      <span className="text-[8px] font-bold uppercase">Verified Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Combined Stats & Trust Section - Compact & Focus on Trust */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 -mt-8 mb-16 relative z-10 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 opacity-5 wall-texture-bg pointer-events-none bg-white"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {[
              { 
                icon: <Award className="w-5 h-5" />, 
                value: '21+ Years', 
                label: 'Licensed & Insured', 
                subLabel: 'Experience',
                desc: 'Serving our community with professional excellence since 2005.' 
              },
              { 
                icon: <Building2 className="w-5 h-5" />, 
                value: '1,200+', 
                label: 'Residential & Commercial', 
                subLabel: 'Completed Projects',
                desc: 'Specialized in high-end residential and commercial projects.' 
              },
              { 
                icon: <Handshake className="w-5 h-5" />, 
                value: '98% Satisfied', 
                label: 'Satisfaction Guaranteed', 
                subLabel: 'Customers',
                desc: 'Commitment to detail ensures a premium experience every time.' 
              }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex flex-col transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                  <h3 className="text-slate-900 font-bold text-base leading-tight">
                    {stat.label}
                  </h3>
                </div>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-primary font-black text-2xl tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    {stat.subLabel}
                  </span>
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-7xl mx-auto px-6 lg:px-20 py-16 relative">
          <div className="absolute inset-0 opacity-5 wall-texture-bg pointer-events-none"></div>
          <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Residential & Commercial Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer a full range of professional painting and refinishing services designed to increase your property value and aesthetic appeal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard 
              image={IMAGES.interior} 
              title="Residential Interior" 
              desc="From single rooms to full estate repaints, we handle every detail with surgical precision."
            />
            <ServiceCard 
              image={IMAGES.exterior} 
              title="Exterior Painting" 
              desc="Durable, weather-resistant finishes that protect your home while making it the best on the block."
            />
            <div className="md:col-span-2">
              <ServiceCard 
                image={IMAGES.cabinet} 
                title="Cabinet Refinishing" 
                desc="A cost-effective way to get a brand new kitchen look with factory-grade finishes on your existing cabinets."
                horizontal
              />
            </div>
          </div>
        </div>
      </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="bg-slate-50 py-16 px-6 lg:px-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 wall-texture-bg pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Recent Work</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Take a look at some of our lately completed projects across the PNW region.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[IMAGES.house, IMAGES.interior, IMAGES.exterior].map((img, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-md group">
                  <img 
                    src={img} 
                    alt={`Project ${i+1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="py-16 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
              <p className="text-slate-600">Real feedback from homeowners across the Pacific Northwest.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <TestimonialCard 
                text="Triple A Painting did an amazing job on our home exterior. The crew was professional, tidy, and the finish is flawless. Highly recommend!"
                author="Jane Doe"
                location="Portland, OR"
                initials="JD"
              />
              <TestimonialCard 
                text="Exceptional attention to detail. They transformed our kitchen cabinets and it looks like a brand new kitchen for a fraction of the cost."
                author="Michael Smith"
                location="Vancouver, WA"
                initials="MS"
              />
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote" className="bg-slate-100 py-20 px-6 lg:px-20">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-200">
            <div className="lg:w-1/2 p-10 lg:p-16">
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full h-12 rounded-lg bg-slate-50 border border-slate-200 px-4 focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full h-12 rounded-lg bg-slate-50 border border-slate-200 px-4 focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input type="tel" placeholder="(360) 910-2546" className="w-full h-12 rounded-lg bg-slate-50 border border-slate-200 px-4 focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700">Service Type</label>
                  <select className="w-full h-12 rounded-lg bg-slate-50 border border-slate-200 px-4 focus:ring-2 focus:ring-primary outline-none">
                    <option>Interior Painting</option>
                    <option>Exterior Painting</option>
                    <option>Cabinet Refinishing</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700">Project Details</label>
                  <textarea placeholder="Tell us about your project..." rows={3} className="w-full rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <button className="w-full h-14 rounded-lg bg-accent text-slate-900 text-lg font-black shadow-lg hover:brightness-110 transition-all mt-2">
                  Send Quote Request
                </button>
                <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest mt-2">No pressure. No hidden fees. Just quality work.</p>
              </form>
            </div>
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-primary text-white">
              <h2 className="text-3xl lg:text-4xl font-black mb-6 leading-tight">Ready to start your project?</h2>
              <p className="text-lg opacity-90 mb-8">
                Schedule your free, no-obligation estimate today. Our experts will visit your site, provide a detailed quote, and help you choose the perfect colors.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <a href="tel:3609102546" className="hover:text-accent transition-colors">
                    <p className="text-sm opacity-70">Call Us Directly</p>
                    <p className="text-xl font-bold">(360) 910-2546</p>
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Quick Turnaround</p>
                    <p className="text-xl font-bold">Quotes in 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about-us" className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">Our Story</h2>
                <p className="text-primary font-bold text-xl">Who is Triple A Painting?</p>
              </div>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  Triple A Painting is a full-service residential and commercial painting company, specializing in interior and exterior painting applications, including remodeling options. Working with homeowners, businesses, architects, builders, remodelers or interior designers, Triple A Painting guarantees professional workmanship on all projects, large and small.
                </p>
                <p>
                  We share and value each client and provide only the highest quality products and services for their vision. Our project is smooth and successful through expert practices and knowledge. Using only the highest quality paint and coatings from Sherwin Williams, Rodda Paint and the Miller Paint Company, Triple A Painting specializes in custom solutions.
                </p>
                <p>
                  We are proud to serve satisfied customers throughout the Vancouver—Portland area. With fifteen years experience, we are committed to excellence in service, quality and safety. Estimates are always free.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={IMAGES.cabinet} 
                alt="Our Work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6 lg:px-20">
        {/* Floating Mobile Call Button */}
        <div className="md:hidden fixed bottom-6 right-6 z-50">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="relative"
          >
            <motion.a 
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="tel:3609102546" 
              className="bg-accent text-slate-900 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center active:scale-95 transition-transform border-4 border-white relative z-10"
            >
              <Phone className="w-8 h-8" />
            </motion.a>
            <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-white">
              <div className="w-6 h-6">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fillRule="evenodd"></path>
                  <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-xl font-black">Triple A Painting</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner for high-quality residential and commercial painting solutions since 2005.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-accent">Services</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Interior Painting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Exterior Painting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cabinet Refinishing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-accent">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-accent">Service Area</h4>
            <p className="text-slate-400 text-sm mb-6">
              Proudly serving all major metropolitan areas and surrounding suburbs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition-all">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© 2024 Triple A Painting Inc. All rights reserved. Licensed, Bonded & Insured.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ image, title, desc, horizontal = false }: { image: string, title: string, desc: string, horizontal?: boolean }) {
  return (
    <div className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-slate-100 flex ${horizontal ? 'flex-col md:flex-row' : 'flex-col'}`}>
      <div className={`${horizontal ? 'md:w-1/2' : 'w-full'} aspect-video overflow-hidden`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className={`p-8 ${horizontal ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 text-base leading-relaxed mb-6">{desc}</p>
        <a href="#" className="text-primary font-bold text-base flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function TestimonialCard({ text, author, location, initials }: { text: string, author: string, location: string, initials: string }) {
  return (
    <div className="p-10 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 wall-texture-bg pointer-events-none"></div>
      <div className="relative z-10">
        <div className="flex text-accent mb-6 gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-5 h-5 fill-accent" />
          ))}
        </div>
        <p className="text-lg text-slate-600 italic mb-8">"{text}"</p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold">
            {initials}
          </div>
          <div>
            <p className="font-bold text-slate-900">{author}</p>
            <p className="text-slate-500 text-sm">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


