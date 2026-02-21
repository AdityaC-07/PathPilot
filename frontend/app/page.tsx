import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PathPilot – Navigate Your Future",
  description: "AI-powered career roadmap generator.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ background: "var(--bg)" }}>
      <Navbar />

      <main className="flex-1">
        {/* ── Hero Section with Background Image ── */}
        <section
          className="relative px-6 pt-32 pb-48 flex flex-col items-center text-center overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(rgba(17, 17, 17, 0.8), rgba(17, 17, 17, 0.9)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div
            className="relative z-10 inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-8 text-xs font-bold tracking-widest uppercase"
            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            PATHPILOT - YOUR CAREER INNOVATION PARTNER
          </div>

          <h1 className="relative z-10 text-white text-5xl sm:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1]">
            Powering the Future <br />
            with <span style={{ color: "var(--accent)" }}>Intelligent Roadmaps</span>
          </h1>

          <p className="relative z-10 mt-6 text-lg sm:text-xl max-w-2xl leading-relaxed text-gray-300">
            Transform your career trajectory with cutting-edge AI guidance. Clean, efficient, and designed for tomorrow's job market.
          </p>

          <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/generate"
              className="px-8 py-4 rounded-lg text-base font-bold transition-all hover:scale-105 inline-flex items-center gap-2"
              style={{ background: "var(--accent)", color: "white" }}
            >
              Generate Free Roadmap →
            </Link>
            <Link
              href="/generate"
              className="px-8 py-4 rounded-lg text-base font-bold transition-all border hover:bg-white/10"
              style={{ color: "white", borderColor: "rgba(255,255,255,0.8)" }}
            >
              Learn More
            </Link>
          </div>

          {/* Stats Overlay inside Hero */}
          <div className="absolute bottom-10 left-0 w-full px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-10">
              {[
                { label: "YEARS EXPERIENCE", value: "10+", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
                { label: "MOCK ROADMAPS", value: "5000+", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
                { label: "API CALLS SAVED", value: "50K", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent" style={{ color: "var(--accent)" }}>{stat.icon}</span>
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">{stat.value}</span>
                  </div>
                  <div className="text-sm font-medium tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Solutions Overlay Section (Light Theme) ── */}
        <section className="px-6 py-24 bg-white text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "var(--accent)" }}>
            COMPREHENSIVE SOLUTIONS
          </p>
          <div className="max-w-2xl mx-auto flex flex-col items-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight self-end sm:self-center w-full text-right sm:text-center" style={{ color: "var(--bg)" }}>
              Comprehensive <span style={{ color: "var(--accent)" }}>Solutions</span>
            </h2>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-3xl">
              From initial skill assessment to ongoing interview prep, we provide end-to-end career growth solutions tailored to your specific requirements.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {/* Card 1: Solid Accent */}
            <div
              className="rounded-[2rem] p-8 relative overflow-hidden group shadow-lg transition-transform hover:-translate-y-1"
              style={{ background: "var(--accent)", color: "white" }}
            >
              <div className="mb-6 opacity-90"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
              <h4 className="text-xl font-bold mb-3">Building & Architecture</h4>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                Integrated learning solutions for transitioning into complex structural engineering with seamless design integration.
              </p>
              <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 rounded-full opacity-20" style={{ background: "white" }} />
            </div>

            {/* Card 2: Light with Accent Icon */}
            <div className="rounded-[2rem] p-8 border hover:shadow-xl transition-all hover:-translate-y-1 block bg-gray-50 border-gray-100">
              <div className="mb-6" style={{ color: "var(--accent)" }}><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg></div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Logistics</h4>
              <p className="text-sm leading-relaxed text-gray-600">
                Optimized supply chain and installation logistics for efficient project delivery across all sectors.
              </p>
              <div className="mt-8 w-12 h-12 rounded-full flex items-center justify-center opacity-[0.15]" style={{ background: "var(--accent)" }} />
            </div>

            {/* Card 3: Solid Accent */}
            <div
              className="rounded-[2rem] p-8 relative overflow-hidden group shadow-lg transition-transform hover:-translate-y-1"
              style={{ background: "var(--accent)", color: "white" }}
            >
              <div className="mb-6 opacity-90"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg></div>
              <h4 className="text-xl font-bold mb-3">On the Horizon</h4>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                Next-generation career technologies including AI-driven interview coaching and real-time skill market integration.
              </p>
              <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 rounded-full opacity-20" style={{ background: "white" }} />
            </div>

            {/* Card 4: Light with Accent Icon */}
            <div className="rounded-[2rem] p-8 border hover:shadow-xl transition-all hover:-translate-y-1 block bg-gray-50 border-gray-100">
              <div className="mb-6" style={{ color: "var(--accent)" }}><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Consultation</h4>
              <p className="text-sm leading-relaxed text-gray-600">
                Expert advisory services to help you choose the right learning path, bootcamp, or degree for your specific career needs.
              </p>
              <div className="mt-8 w-12 h-12 rounded-full flex items-center justify-center opacity-[0.15]" style={{ background: "var(--accent)" }} />
            </div>

            {/* Card 5: Solid Accent */}
            <div
              className="rounded-[2rem] p-8 relative overflow-hidden group shadow-lg transition-transform hover:-translate-y-1"
              style={{ background: "var(--accent)", color: "white" }}
            >
              <div className="mb-6 opacity-90"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <h4 className="text-xl font-bold mb-3">Mobile Insights</h4>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                Real-time tracking and metrics through our dynamic app platform for optimal learning management and retention.
              </p>
              <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 rounded-full opacity-20" style={{ background: "white" }} />
            </div>

            {/* Card 6: Light with Accent Icon */}
            <div className="rounded-[2rem] p-8 border hover:shadow-xl transition-all hover:-translate-y-1 block bg-gray-50 border-gray-100">
              <div className="mb-6" style={{ color: "var(--accent)" }}><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Maintenance & Support</h4>
              <p className="text-sm leading-relaxed text-gray-600">
                Comprehensive support and coaching services to ensure long-term career resilience and professional reliability.
              </p>
              <div className="mt-8 w-12 h-12 rounded-full flex items-center justify-center opacity-[0.15]" style={{ background: "var(--accent)" }} />
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="/generate"
              className="px-8 py-4 rounded-lg text-sm font-bold transition-all bg-[#1a1a1a] text-white hover:bg-black inline-block tracking-wide"
            >
              Explore All Solutions
            </Link>
          </div>
        </section>

        {/* ── End-to-End Services Section (Dark Theme) ── */}
        <section className="px-6 py-32" style={{ background: "var(--bg)" }}>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
                End-to-End <span style={{ color: "var(--accent)" }}>Services</span>
              </h2>
              <p className="text-lg mb-12 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Our comprehensive service portfolio covers every aspect of your professional journey, from initial assessment to long-term maintenance and optimization.
              </p>

              <div className="space-y-10">
                {[
                  { title: "Energy Assessment", desc: "Comprehensive analysis of your energy needs and potential savings with detailed ROI calculations.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
                  { title: "Custom Installation", desc: "Professional installation by certified technicians with minimal disruption to your operations.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
                  { title: "Performance Monitoring", desc: "Real time tracking and optimization of your solar system's performance through advanced analytics.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
                  { title: "24/7 Support", desc: "Round-the-clock technical support and maintenance services to ensure optimal system performance.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
                ].map((svc) => (
                  <div key={svc.title} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}>
                      {svc.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{svc.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full lg:w-auto relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full border border-gray-700 opacity-50 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full pointer-events-none" style={{ background: "rgba(255,69,0,0.1)" }} />

              <div className="relative rounded-[2rem] overflow-hidden w-full aspect-[4/5] max-w-md mx-auto shadow-2xl z-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1549421253-5d51cb3e1c28?auto=format&fit=crop&w=1000&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                />

                {/* Stats overlay card aligned to bottom */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl p-6 backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-black mb-1" style={{ color: "var(--accent)" }}>99.9%</div>
                        <div className="text-xs font-bold text-white/90">Uptime</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black mb-1" style={{ color: "var(--accent)" }}>25yr</div>
                        <div className="text-xs font-bold text-white/90">Warranty</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Values Section (Light Theme) ── */}
        <section className="px-6 py-32 bg-white text-center border-t border-gray-100">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "var(--accent)" }}>
            OUR FOUNDATION
          </p>
          <h2 className="text-5xl font-black mb-24 text-gray-900 tracking-tight">
            Our Core Values
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-x-12 gap-y-16">
            {[
              { title: "Innovation", desc: "Pioneering the latest in solar technology and sustainable energy solutions.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
              { title: "Transparency", desc: "Clear communication and honest pricing throughout your solar journey.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> },
              { title: "Sustainability", desc: "Committed to creating a cleaner, greener future for generations to come.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
            ].map((val) => (
              <div key={val.title} className="flex flex-col items-center text-center">
                <div
                  className="w-24 h-24 flex items-center justify-center rounded-[2rem] mb-8"
                  style={{ border: "2px solid var(--accent)", color: "var(--accent)" }}
                >
                  {val.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{val.title}</h4>
                <p className="text-base leading-relaxed text-gray-500 max-w-xs">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
