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
  Mail, 
  Menu,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Award,
  Handshake,
  Home,
  Palette,
  X,
  ZoomIn
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://tripleapainting.com').replace(/\/$/, '');

const IMAGES = {
  house: "/hero-painting-masked.png",
  interior: "/service-interior.png",
  exterior: "/service-exterior.png",
  cabinet: "/service-cabinet.png",
  consultation: "/service-consultation.png",
  portfolio: [
    "/portfolio-1.jpeg",
    "/portfolio-2.jpg",
    "/portfolio-4.jpg",
    "/portfolio-5.jpg",
    "/portfolio-7.jpeg",
    "/portfolio-8.jpg",
    "/portfolio-9.jpeg",
    "/portfolio-12.jpg",
    "/portfolio-13.jpg",
    "/portfolio-14.jpeg",
    "/portfolio-16.jpeg",
    "/portfolio-17.jpg"
  ]
};

function SeoJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HousePainter',
    name: 'Triple A Painting',
    description:
      'Family-owned residential and commercial painting company serving the Vancouver–Portland metro and Pacific Northwest since 2005. Licensed, insured, and bonded.',
    url: `${SITE_URL}/`,
    telephone: '+1-360-910-2546',
    email: 'tripleapainting@yahoo.com',
    image: [`${SITE_URL}/logo.png`, `${SITE_URL}/hero-painting-masked.png`],
    logo: `${SITE_URL}/logo.png`,
    foundingDate: '2005',
    slogan: 'Expert residential and commercial painting with care since 2005.',
    areaServed: [
      {'@type': 'City', name: 'Vancouver', containedInPlace: {'@type': 'State', name: 'Washington', identifier: 'US-WA'}},
      {'@type': 'City', name: 'Portland', containedInPlace: {'@type': 'State', name: 'Oregon', identifier: 'US-OR'}},
      {'@type': 'State', name: 'Washington'},
      {'@type': 'State', name: 'Oregon'},
    ],
    knowsAbout: [
      'Interior painting',
      'Exterior painting',
      'Cabinet refinishing',
      'Deck staining',
      'Fence painting',
      'Commercial painting',
      'Color consultation',
    ],
    priceRange: '$$',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoJsonLd />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 lg:px-20 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-primary">
          <a href="/" className="w-48 block shrink-0" aria-label="Triple A Painting — home">
            <img src="/logo.png" alt="Triple A Painting — Vancouver and Portland painters" className="w-full h-auto object-contain" />
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
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
            <a href="#quote" className="bg-accent !text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg hover:brightness-110 transition-all visited:!text-white">
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
                <span className="bg-accent/20 text-white font-bold px-3 py-1 rounded text-sm uppercase tracking-wider w-fit ring-1 ring-white/20">
                  Local Painting Experts
                </span>
                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                  Expert Residential & Commercial Painting – Get Your Free Estimate Today.
                </h1>
                <p className="text-lg md:text-xl text-slate-100 font-normal leading-relaxed opacity-90">
                  Transform your space with Triple A Painting. We bring care, color, and comfort to your home or business with our family-owned painting services since 2005.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="tel:3609102546" className="bg-accent !text-white px-8 py-4 rounded-lg text-lg font-black shadow-xl hover:scale-105 transition-transform flex items-center gap-3 visited:!text-white [&_svg]:text-white">
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
                alt="Professional home exterior painting in the Vancouver and Portland metro area by Triple A Painting" 
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
        <section className="max-w-7xl mx-auto px-6 lg:px-20 -mt-16 mb-16 relative z-10 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 opacity-5 wall-texture-bg pointer-events-none bg-white"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {[
              { 
                icon: <Award className="w-8 h-8" />, 
                value: '21+ Years', 
                label: 'Licensed & Insured', 
                color: 'text-blue-600',
                bgColor: 'bg-blue-50',
                desc: 'Serving our community with professional excellence since 2005.' 
              },
              { 
                icon: <Handshake className="w-8 h-8" />, 
                value: '1000+', 
                label: 'Projects Completed', 
                color: 'text-emerald-600',
                bgColor: 'bg-emerald-50/50',
                desc: 'Reliable and consistent quality for homes and businesses across the PNW.' 
              },
              { 
                icon: <ShieldCheck className="w-8 h-8" />, 
                value: '100%', 
                label: 'Satisfaction Guaranteed', 
                color: 'text-accent',
                bgColor: 'bg-accent/10',
                desc: 'We care about your home as much as you do, ensuring every wall is perfect.' 
              }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-7 rounded-[2rem] border border-slate-100 flex flex-col gap-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group">
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 min-w-[56px] rounded-2xl ${stat.bgColor} flex items-center justify-center ${stat.color} shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-500`}>
                    {stat.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-2xl font-black text-slate-900 leading-none mb-1">{stat.value}</h4>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.1em]">{stat.label}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-slate-50 py-24 px-6 lg:px-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 wall-texture-bg pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <p className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Our Specializations</p>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Expert Painting Services</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-xl leading-relaxed">
                Comprehensive interior and exterior solutions tailored for the Pacific Northwest. We combine elite craftsmanship with premium materials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Interior Column */}
              <ServiceCategoryCard 
                icon={<Home className="w-6 h-6" />}
                title="Interior" 
                image={IMAGES.interior}
                accentColor="text-blue-600"
                bgColor="bg-blue-50"
                services={[
                  { 
                    title: "WALLS", 
                    desc: "Professional interior wall painting using premium low-VOC paints for a flawless, durable finish that transforms your living space. We specialize in precision cutting and uniform coverage for all surface types." 
                  },
                  { 
                    title: "DOORS & TRIM", 
                    desc: "High-durability finishes for doors, window frames, and decorative trim. Our expert application ensures smooth, brush-stroke-free results that stand up to daily wear and tear." 
                  },
                  { 
                    title: "BASEBOARDS", 
                    desc: "Detailed baseboard painting and restoration to provide a sharp, clean border for your rooms. We focus on clean lines and professional-grade enamels for lasting beauty." 
                  }
                ]}
              />

              {/* Exterior Column - FEATURED */}
              <ServiceCategoryCard 
                icon={<ShieldCheck className="w-6 h-6" />}
                title="Exterior" 
                image={IMAGES.exterior}
                accentColor="text-accent"
                bgColor="bg-accent/10"
                isFeatured
                services={[
                  { 
                    title: "EXTERIOR WALLS", 
                    desc: "Weather-resistant exterior painting services designed to protect your home from PNW elements. We use high-performance coatings that prevent peeling and maintain vibrant color for years." 
                  },
                  { 
                    title: "DECKS", 
                    desc: "Complete deck staining and sealing to preserve wood quality and enhance outdoor appeal. Our process includes thorough cleaning and application of UV-resistant finishes." 
                  },
                  { 
                    title: "FENCES", 
                    desc: "Transform and protect your property borders with professional fence painting and staining. We ensure full coverage to prevent rot and weather damage." 
                  },
                  { 
                    title: "GUTTERS", 
                    desc: "Specialized gutter painting to match your home's exterior aesthetic. We use high-adhesion primers and finishes that resist chipping and fading." 
                  }
                ]}
              />

              {/* Consultation Column */}
              <ServiceCategoryCard 
                icon={<Palette className="w-6 h-6" />}
                title="Consultation" 
                image={IMAGES.consultation}
                accentColor="text-emerald-600"
                bgColor="bg-emerald-50"
                services={[
                  { 
                    title: "WALL COLOR", 
                    desc: "Expert color consultation to help you choose the perfect palette for your home. We provide swatches and digital renderings to ensure you love your new look." 
                  },
                  { 
                    title: "EXTERIOR FINISH COLOR", 
                    desc: "Coordinated exterior color planning to maximize curb appeal and neighborhood harmony. We consider lighting, architecture, and current design trends." 
                  },
                  { 
                    title: "PRESSURE WASHING", 
                    desc: "Thorough pressure washing services to prep surfaces for painting or simply refresh your home's appearance. We remove dirt, mold, and mildew safely and effectively." 
                  },
                  { 
                    title: "LIGHT COMMERCIAL", 
                    desc: "Scalable commercial painting solutions for businesses, real estate developments, and property managers. We offer flexible scheduling to minimize disruption to your operations." 
                  }
                ]}
              />
            </div>
          </div>
        </section>

        <PortfolioSection />

        {/* Testimonials */}
        <section id="reviews" className="bg-slate-50 py-24 px-6 lg:px-20 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">What Our Clients Say</h2>
              <p className="text-slate-600 text-lg">Real feedback from homeowners across the Pacific Northwest.</p>
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
        <section id="quote" className="bg-white py-24 px-6 lg:px-20 relative">
          <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full -mr-32 -mt-32" />
            <div className="lg:w-1/2 p-10 lg:p-20 relative z-10">
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-300 uppercase tracking-widest pl-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full h-14 rounded-xl bg-white/5 border border-white/10 text-white px-6 focus:ring-2 focus:ring-accent outline-none focus:bg-white/10 transition-all font-medium" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-widest pl-1">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full h-14 rounded-xl bg-white/5 border border-white/10 text-white px-6 focus:ring-2 focus:ring-accent outline-none focus:bg-white/10 transition-all font-medium" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-widest pl-1">Phone</label>
                    <input type="tel" placeholder="(360) 910-2546" className="w-full h-14 rounded-xl bg-white/5 border border-white/10 text-white px-6 focus:ring-2 focus:ring-accent outline-none focus:bg-white/10 transition-all font-medium" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-300 uppercase tracking-widest pl-1">Service</label>
                  <select className="w-full h-14 rounded-xl bg-white/5 border border-white/10 text-white px-6 focus:ring-2 focus:ring-accent outline-none focus:bg-white/10 transition-all font-medium appearance-none">
                    <option className="bg-slate-900">Interior Painting</option>
                    <option className="bg-slate-900">Exterior Painting</option>
                    <option className="bg-slate-900">Cabinet Refinishing</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-300 uppercase tracking-widest pl-1">Project Details</label>
                  <textarea placeholder="Tell us about your project..." rows={3} className="w-full rounded-xl bg-white/5 border border-white/10 text-white px-6 py-5 focus:ring-2 focus:ring-accent outline-none focus:bg-white/10 transition-all font-medium resize-none" />
                </div>
                <button className="w-full h-16 rounded-xl bg-accent !text-white text-lg font-black shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all mt-4 group [&_svg]:text-white">
                  Get My Free Estimate <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-2 text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Secure & Confidential</span>
                </div>
              </form>
            </div>
            <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center bg-primary text-white relative">
              <div className="absolute inset-0 opacity-20 wall-texture-bg pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tight">Let's make your home beautiful together.</h2>
                <p className="text-xl opacity-80 mb-12 font-medium leading-relaxed">
                  We're here to help with your next project. Our friendly team will get you a quote within 24 hours.
                </p>
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-lg">
                      <Phone className="w-6 h-6" />
                    </div>
                    <a href="tel:3609102546" className="text-white visited:text-white transition-colors">
                      <p className="text-sm font-bold opacity-60 uppercase tracking-widest">Call Directly</p>
                      <p className="text-2xl font-black tracking-tight">(360) 910-2546</p>
                    </a>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold opacity-60 uppercase tracking-widest">Email Us</p>
                      <a href="mailto:tripleapainting@yahoo.com" className="text-2xl font-black tracking-tight text-white visited:text-white hover:text-white/90 transition-colors block break-all">
                        tripleapainting@yahoo.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about-us" className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <div>
                <span className="inline-block bg-primary/10 text-primary font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-4">Our Legacy</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Twenty Years of Excellence</h2>
                <div className="h-1.5 w-24 bg-accent rounded-full mb-2" />
              </div>
              <div className="text-slate-600 leading-relaxed text-lg space-y-6 font-medium">
                <p>
                  Triple A Painting is a family-owned team built on care, trust, and quality. We love helping neighbors transform their homes, working closely with families and builders to bring your vision to life.
                </p>
                <p>
                  We use only the best paints from <span className="text-slate-900 font-bold">Sherwin Williams</span>, <span className="text-slate-900 font-bold">Rodda Paint</span>, and <span className="text-slate-900 font-bold">Miller Paint Company</span> to make sure your new look lasts for years to come.
                </p>
                <p>
                  Serving the Vancouver—Portland area since 2005, we focus on making your painting project easy, friendly, and exactly what you dreamed of.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-slate-100 px-5 py-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-slate-700">Licensed</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 px-5 py-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-slate-700">Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 px-5 py-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-slate-700">Bonded</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src={IMAGES.cabinet} 
                  alt="Cabinet refinishing and interior craftsmanship by Triple A Painting" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-24 px-6 lg:px-20 border-t border-white/5">
        {/* Floating Mobile Call Button */}
        <div className="md:hidden fixed bottom-8 right-8 z-50">
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
              className="bg-accent !text-white w-20 h-20 rounded-full shadow-2xl flex items-center justify-center active:scale-95 transition-transform border-4 border-white relative z-10 visited:!text-white [&_svg]:text-white"
            >
              <Phone className="w-10 h-10" />
            </motion.a>
            <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20" />
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24">
          <div className="flex flex-col gap-8 md:col-span-1">
            <a href="/" className="w-48 mb-2 block" aria-label="Triple A Painting home">
              <img src="/logo.png" alt="Triple A Painting — licensed painters Vancouver WA and Portland OR" className="w-full h-auto object-contain" />
            </a>
            <p className="text-slate-400 text-base leading-relaxed font-medium">
              Bringing color and care to PNW homes and families since 2005. Your home, treated like our own.
            </p>
            <div className="flex gap-4">
              <a href="tel:3609102546" className="w-12 h-12 rounded-xl bg-white/5 text-white flex items-center justify-center hover:bg-accent hover:!text-white transition-all shadow-lg visited:text-white" aria-label="Call Triple A Painting">
                <Phone className="w-6 h-6" />
              </a>
              <a href="mailto:tripleapainting@yahoo.com" className="w-12 h-12 rounded-xl bg-white/5 text-white flex items-center justify-center hover:bg-accent hover:!text-white transition-all shadow-lg visited:text-white" aria-label="Email Triple A Painting">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-black mb-8 text-accent uppercase tracking-widest text-sm">Our Services</h4>
            <ul className="flex flex-col gap-5 text-base text-slate-400 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Residential Interior</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Exterior Protection</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cabinet Refinishing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Light Commercial</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-8 text-accent uppercase tracking-widest text-sm">Platform</h4>
            <ul className="flex flex-col gap-5 text-base text-slate-400 font-medium">
              <li><a href="#about-us" className="hover:text-white transition-colors">Our Legacy</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Work Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Trust Reviews</a></li>
              <li><a href="#quote" className="hover:text-white transition-colors">Get Started</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-8 text-accent uppercase tracking-widest text-sm">Presence</h4>
            <p className="text-slate-400 text-base font-medium mb-8 leading-relaxed">
              Serving Portland, Vancouver, and the surrounding Pacific Northwest metropolitan areas.
            </p>
            <div className="flex items-center gap-2 bg-white/5 px-6 py-4 rounded-2xl border border-white/5">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="font-bold text-sm tracking-widest uppercase">Certified PNW Pro</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 font-medium italic">© 2026 Triple A Painting Inc. Caring for your home since 2005.</p>
          <div className="flex gap-8 text-xs font-black uppercase text-slate-500 tracking-widest">
            <a href="#quote" className="hover:text-white transition-colors">Contact</a>
            <a href="tel:3609102546" className="hover:text-white transition-colors">Call Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
function PortfolioSection() {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  return (
    <section id="portfolio" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] wall-texture-bg pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">Our Recent Work</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Take a look at some of our favorite transformations. From cozy living rooms to beautiful home exteriors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMAGES.portfolio.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(idx)}
              className="group relative aspect-square rounded-[2rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={img} 
                alt={`Triple A Painting portfolio — completed residential or commercial painting project ${idx + 1}, Vancouver WA or Portland OR area`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary shadow-xl scale-50 group-hover:scale-100 transition-transform duration-500">
                  <ZoomIn className="w-8 h-8" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <PortfolioLightbox 
            images={IMAGES.portfolio} 
            initialIndex={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function PortfolioLightbox({ images, initialIndex, onClose }: { images: string[], initialIndex: number, onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
  const [direction, setDirection] = React.useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-[110]"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-6xl aspect-[16/9] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <div className="absolute inset-0 z-10 flex items-center justify-between px-4 md:-mx-20">
          <button 
            onClick={() => paginate(-1)}
            className="w-16 h-16 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-slate-900 flex items-center justify-center transition-all shadow-2xl backdrop-blur-md"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button 
            onClick={() => paginate(1)}
            className="w-16 h-16 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-slate-900 flex items-center justify-center transition-all shadow-2xl backdrop-blur-md"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>

        <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/10">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Triple A Painting portfolio image ${currentIndex + 1} — Vancouver and Portland area painting contractor`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-10 bg-accent' : 'w-2.5 bg-white/30 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ServiceCategoryCard({ icon, title, image, services, accentColor, bgColor, isFeatured = false }: { icon: React.ReactNode, title: string, image: string, services: { title: string, desc: string }[], accentColor: string, bgColor: string, isFeatured?: boolean }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className={`rounded-[2.5rem] overflow-hidden border transition-all duration-500 flex flex-col h-full ${isFeatured ? 'bg-white shadow-[0_30px_60px_-15px_rgba(245,185,5,0.2)] border-accent/30 scale-105 md:scale-110 z-20' : 'bg-white shadow-xl border-slate-100 hover:shadow-2xl hover:scale-[1.02] z-10'}`}>
      <div className="p-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl ${bgColor} flex items-center justify-center ${accentColor} shadow-inner`}>
            {icon}
          </div>
          <h3 className={`text-3xl font-black tracking-tight ${accentColor}`}>{title}</h3>
        </div>
      </div>
      
      <div className="px-8 pb-8 flex-1 flex flex-col">
        <div className="aspect-[16/11] rounded-[2rem] overflow-hidden mb-8 border border-slate-100 shadow-lg relative group">
          <img src={image} alt={`${title} painting services by Triple A Painting — Vancouver WA and Portland OR`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="space-y-4">
          {services.map((service, idx) => (
            <div key={idx} className={`border transition-all duration-300 rounded-2xl overflow-hidden ${openIndex === idx ? 'bg-slate-50 border-slate-200' : 'border-slate-50 bg-slate-50/30'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className={`text-[12px] font-black uppercase tracking-[0.15em] transition-colors ${openIndex === idx ? accentColor : 'text-slate-500 group-hover:text-slate-900'}`}>
                  {service.title}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? `${bgColor} ${accentColor} rotate-180` : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                  {openIndex === idx ? <div className="w-3 h-0.5 bg-current rounded-full" /> : <div className="text-xl font-bold">+</div>}
                </div>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-500">
                  <p className="text-slate-600 text-base md:text-lg font-normal leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ text, author, location, initials }: { text: string, author: string, location: string, initials: string }) {
  return (
    <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden group hover:border-primary/20 transition-all duration-500">
      <div className="absolute inset-0 opacity-[0.03] wall-texture-bg pointer-events-none" />
      <div className="relative z-10">
        <div className="flex text-accent mb-8 gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-6 h-6 fill-accent drop-shadow-sm" />
          ))}
        </div>
        <p className="text-xl text-slate-700 font-medium italic mb-10 leading-relaxed leading-relaxed">"{text}"</p>
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white text-xl font-black shadow-lg shadow-primary/20">
            {initials}
          </div>
          <div>
            <p className="font-black text-slate-900 text-lg tracking-tight">{author}</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
