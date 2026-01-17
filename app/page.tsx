/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import BookingModal from '@/components/BookingModal';
import BookingButton from '@/components/BookingButton';
import DynamicImage from '@/components/DynamicImage';

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
            Amazon Account Management
          </div>
          <h1 className="text-5xl md:text-7xl mb-12 font-light">
            Scaling on the <br />
            <span className="font-semibold text-desaturated-teal">
              Amazon Marketplace
            </span>
          </h1>
          <p className="text-xl max-w-xl mb-14">
            Redefining the standard for Amazon FBA partnerships. We deploy
            sophisticated logistics infrastructure and analytical rigor to
            scale brands within the ecosystem.
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
                <div className="data-label text-[10px]">Global Network</div>
                <div className="text-xs font-mono opacity-50">
                  Active
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
            TRUSTED BY HIGH GROWTH BRANDS WORLDWIDE
          </span>
          <span>
            TRUSTED BY HIGH GROWTH BRANDS WORLDWIDE
          </span>
        </div>
      </section>

      <section className="p-8 md:p-24 max-w-screen-2xl mx-auto" id="edge">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border border-border-subtle bg-white">
          <div className="lg:col-span-2 p-14 border-b lg:border-b-0 lg:border-r border-border-subtle">
            <div className="data-label mb-6 text-desaturated-teal">
              Section 01 // Efficiency
            </div>
            <h2 className="text-4xl mb-8 font-semibold">
              The Amazon Analytical Edge
            </h2>
            <p className="text-lg mb-12">
              Precision is the core of our DNA. We eliminate guesswork through
              high-fidelity data modeling and real-time inventory
              synchronization.
            </p>
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-border-subtle pb-4">
                <span className="data-label">Latency Metric</span>
                <span className="data-value">{`< 140ms`}</span>
              </div>
              <div className="flex justify-between items-end border-b border-border-subtle pb-4">
                <span className="data-label">Market Absorption</span>
                <span className="data-value">99.2%</span>
              </div>
              <div className="flex justify-between items-end border-b border-border-subtle pb-4">
                <span className="data-label">Active Territories</span>
                <span className="data-value">Global_24</span>
              </div>
            </div>
          </div>
          <div className="soft-block flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-subtle">
            <span className="text-desaturated-teal text-3xl font-light">
              {/* Material Symbol placeholder or Lucide icon */}
              ∡
            </span>
            <div>
              <h3 className="text-xl mb-3 font-semibold">Neural Stocking</h3>
              <p className="text-sm">
                Predictive inventory modeling powered by proprietary
                algorithms.
              </p>
            </div>
          </div>
          <div className="soft-block flex flex-col justify-between bg-soft-bg/50 border-border-subtle">
            <div className="text-7xl font-light tracking-tighter text-desaturated-teal">
              100<span className="text-2xl">%</span>
            </div>
            <div>
              <h3 className="text-xl mb-3 font-semibold">Compliance</h3>
              <p className="text-sm">
                Exceeding all marketplace health and safety requirements daily.
              </p>
            </div>
          </div>
          <div
            className="lg:col-span-1 p-8 border-t border-border-subtle flex flex-col justify-between"
            id="logistics"
          >
            <span className="text-3xl text-desaturated-teal/40 mb-10">
              🌐
            </span>
            <div>
              <h3 className="text-lg mb-2 font-semibold">Cross-Border</h3>
              <div className="text-4xl font-mono text-deep-charcoal/90">
                22 Regions
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 p-14 border-t border-border-subtle bg-soft-bg/30">
            <h3 className="text-2xl mb-10 font-semibold tracking-tight">
              Global Supply Chain Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <p className="mb-10 text-deep-charcoal/70 leading-relaxed">
                  We orchestrate end-to-end logistics with minimal friction.
                  Our systems integrate directly with your production flow to
                  ensure consistent product availability.
                </p>
                <Link
                  href="/wholesale"
                  className="text-desaturated-teal text-xs font-bold font-mono tracking-widest uppercase flex items-center gap-3 group"
                >
                  Explore Capabilities
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex justify-between text-[11px] font-mono font-bold uppercase text-deep-charcoal/60">
                    <span>Optimization_Node_A</span>
                    <span>94%</span>
                  </div>
                  <div className="h-2 bg-deep-charcoal/5 w-full rounded-full overflow-hidden">
                    <div className="h-full bg-desaturated-teal w-[94%]"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-[11px] font-mono font-bold uppercase text-deep-charcoal/60">
                    <span>Optimization_Node_B</span>
                    <span>88%</span>
                  </div>
                  <div className="h-2 bg-deep-charcoal/5 w-full rounded-full overflow-hidden">
                    <div className="h-full bg-desaturated-teal/50 w-[88%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
