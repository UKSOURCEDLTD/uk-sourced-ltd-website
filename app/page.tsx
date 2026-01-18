
'use client';

import { useState } from 'react';
import Link from 'next/link';
import BookingModal from '@/components/BookingModal';
import BookingButton from '@/components/BookingButton';
import DynamicImage from '@/components/DynamicImage';
import ServiceComparison from '@/components/ServiceComparison';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="grid-lines min-h-screen relative">
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10">
        <DynamicImage
          slot="home_hero_bg"
          alt="Hero Background"
          fill
          className="object-cover opacity-5"
          fallbackSrc="https://placehold.co/1920x1080/FFFFFF/FFFFFF?text=."
        />
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh] max-w-screen-2xl mx-auto relative">
        <div className="lg:col-span-7 p-8 md:p-24 flex flex-col justify-center border-r border-border-subtle">
          <div className="mb-8 data-label flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-desaturated-teal"></span>
            Amazon Growth Partner
          </div>
          <h1 className="text-5xl md:text-7xl mb-12 font-light">
            Your Trusted <br />
            <span className="font-semibold text-desaturated-teal">
              Amazon Agency
            </span>
          </h1>
          <p className="text-xl max-w-xl mb-14">
            Helping businesses across the UK conquer the Amazon ecosystem. We specialize in wholesale re-selling, account management, and listing optimization so you can focus on your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <BookingButton onClick={() => setIsBookingModalOpen(true)} />
            <Link
              href="/contact"
              className="border border-deep-charcoal/20 px-12 py-5 font-semibold hover:bg-deep-charcoal hover:text-white transition-all text-center rounded-sm uppercase tracking-widest text-xs"
            >
              Get In Touch
            </Link>
            <Link
              href="/wholesale"
              className="border border-deep-charcoal/20 px-12 py-5 font-semibold hover:bg-deep-charcoal hover:text-white transition-all text-center rounded-sm uppercase tracking-widest text-xs"
            >
              Our Services
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative flex items-center justify-center bg-white p-12 overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-40"></div>
          <div className="relative w-full aspect-square bg-soft-bg pedestal-shadow border border-white rounded-lg flex items-center justify-center p-8 overflow-hidden group">
            <DynamicImage
              slot="home_about_img"
              alt="Data Flow"
              fill
              className="object-cover grayscale opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
              fallbackSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBfigwmoRZmNFL23ceYUbc9gUxdKZn9BBCPoTJyzLaXcZykpVU-kb7Iz8e5IYp0yv6aUcStpKuvx_rKqFckfTLm0f0aimyPfbpShz1NcKJgAX621uekZG89h-pKbMQsV_0wQI7wc6x-u3fXBatcxSuRm4Z-n9_NU28iTpM-Hiq_1uNi2IZcQrmbX_6GOW7hAojSsnbGGUlgAa0Bl2_dtBlKGnCkufBRAQv4MQoS00fsXR-TFSpeWLHlF_9uC-xBB0xwD9pKcqzv2myM"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="space-y-1">
                <div className="data-label text-[10px]">Trusted Partner</div>
                <div className="text-xs font-mono opacity-50">
                  Since 2018
                </div>
              </div>
              <div className="h-12 w-[1px] bg-desaturated-teal/30"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-deep-charcoal/30 py-8 overflow-hidden whitespace-nowrap border-y border-border-subtle">
        <div className="flex gap-24 text-[11px] font-mono tracking-[0.4em] uppercase font-bold">
          <span>
            PARTNERING WITH UK BRANDS FOR GROWTH
          </span>
          <span>
            PARTNERING WITH UK BRANDS FOR GROWTH
          </span>
        </div>
      </section>

      <section className="p-8 md:p-24 max-w-screen-2xl mx-auto" id="edge">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border border-border-subtle bg-white">
          <div className="lg:col-span-2 p-14 border-b lg:border-b-0 lg:border-r border-border-subtle">
            <div className="data-label mb-6 text-desaturated-teal">
              Why Choose Us
            </div>
            <h2 className="text-4xl mb-8 font-semibold">
              We Simplify Amazon
            </h2>
            <p className="text-lg mb-12">
              Navigating Amazon can be overwhelming. We bring the expertise, tools, and dedication needed to turn complexities into growth opportunities for your business.
            </p>
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-border-subtle pb-4">
                <span className="data-label">Listing Optimization</span>
                <span className="data-value">Expert</span>
              </div>
              <div className="flex justify-between items-end border-b border-border-subtle pb-4">
                <span className="data-label">Account Health</span>
                <span className="data-value">Protected</span>
              </div>
              <div className="flex justify-between items-end border-b border-border-subtle pb-4">
                <span className="data-label">Support</span>
                <span className="data-value">Dedicated</span>
              </div>
            </div>
          </div>
          <div className="soft-block flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-subtle">
            <span className="text-desaturated-teal text-3xl font-light">
              {/* Material Symbol placeholder or Lucide icon */}
              ★
            </span>
            <div>
              <h3 className="text-xl mb-3 font-semibold">Quality First</h3>
              <p className="text-sm">
                We are committed to representing your brand with the highest standards of quality and integrity.
              </p>
            </div>
          </div>
          <div className="soft-block flex flex-col justify-between bg-soft-bg/50 border-border-subtle">
            <div className="text-7xl font-light tracking-tighter text-desaturated-teal">
              100<span className="text-2xl">%</span>
            </div>
            <div>
              <h3 className="text-xl mb-3 font-semibold">Turnkey Solutions</h3>
              <p className="text-sm">
                From logistics to marketing, we handle the heavy lifting so you don't have to.
              </p>
            </div>
          </div>
          <div
            className="lg:col-span-1 p-8 border-t border-border-subtle flex flex-col justify-between"
            id="logistics"
          >
            <span className="text-3xl text-desaturated-teal/40 mb-10">
              🤝
            </span>
            <div>
              <h3 className="text-lg mb-2 font-semibold">Partnership</h3>
              <div className="text-4xl font-mono text-deep-charcoal/90">
                Long-Term
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 p-14 border-t border-border-subtle bg-soft-bg/30">
            <h3 className="text-2xl mb-10 font-semibold tracking-tight">
              Comprehensive Brand Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <p className="mb-10 text-deep-charcoal/70 leading-relaxed">
                  We understand that your brand is your legacy. Our team works tirelessly to ensure your products are presented perfectly, stocked consistently, and marketed effectively on Amazon.
                </p>
                <Link
                  href="/wholesale"
                  className="text-desaturated-teal text-xs font-bold font-mono tracking-widest uppercase flex items-center gap-3 group"
                >
                  Explore Services
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex justify-between text-[11px] font-mono font-bold uppercase text-deep-charcoal/60">
                    <span>Retail Partnership</span>
                    <span>Trusted</span>
                  </div>
                  <div className="h-2 bg-deep-charcoal/5 w-full rounded-full overflow-hidden">
                    <div className="h-full bg-desaturated-teal w-[100%]"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-[11px] font-mono font-bold uppercase text-deep-charcoal/60">
                    <span>Growth Consultancy</span>
                    <span>Proven</span>
                  </div>
                  <div className="h-2 bg-deep-charcoal/5 w-full rounded-full overflow-hidden">
                    <div className="h-full bg-desaturated-teal/50 w-[100%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceComparison />
      <ContactForm />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
