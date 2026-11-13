import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonials } from "../data/testimonials";

export default function Home() {
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentTestimonial = testimonials[currentTestimonialIdx];

  return (
    <>
      <main className="flex-1 flex flex-col md:flex-row px-6 md:px-16 items-center z-10 py-12 md:py-0 w-full max-w-7xl mx-auto">
        <div className="w-full md:w-3/5 md:pr-12 flex flex-col items-center text-center md:items-start md:text-left mb-16 md:mb-0">
          <div className="mb-8 inline-block px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-[#94A383]/20 rounded-full shadow-sm">
            <span className="text-[#94A383] text-xs font-bold uppercase tracking-widest">Személyre szabott coaching</span>
          </div>
          <h1 className="text-5xl md:text-[72px] leading-[1.1] md:leading-[0.95] font-serif italic text-[#2D2926] mb-8">
            Találd meg a <br className="hidden md:block"/> <span className="not-italic font-bold text-[#5A634F]">csendet</span> a zajban!
          </h1>
          <p className="text-lg text-[#5C5C5C] leading-relaxed max-w-md mb-10">
            Személyes és online támogatás gyermekeknek és felnőtteknek, magánéleti és szakmai elakadásokban. Mert a valódi változás belülről indul – ebben az útkeresésben pedig végig melletted állok.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link to="/kapcsolat?tema=ismerkedo" className="px-10 py-4 bg-[#94A383] text-white rounded-full shadow-lg shadow-[#94A383]/20 font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center">
              Konzultáció igénylése
            </Link>
            <Link to="/rolam" className="px-10 py-4 bg-white/80 backdrop-blur-md text-[#5A634F] rounded-full border border-white font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-white hover:-translate-y-0.5 transition-all w-full sm:w-auto">
              Bemutatkozás
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs font-medium text-[#5A634F]/90 mt-4 tracking-wide">
            Első lépésként: ingyenes, 30 perces ismerkedő beszélgetés – kötelezettségmentesen.
          </p>
          <p className="text-xl md:text-2xl italic font-serif text-[#5C5C5C] mt-5">
            A csend nem az űr, hanem a válaszok bölcsője.
          </p>
        </div>
        
        {/* Visual Feature (The Frosted Glass Element) */}
        <div className="w-full md:w-2/5 relative flex justify-center items-center">
          <div className="w-72 h-[420px] md:w-80 md:h-[480px] rounded-[160px] bg-gradient-to-br from-[#94A383] to-[#A6B299] shadow-2xl relative overflow-hidden">
             {/* Inner abstract shapes to simulate glass texture */}
             <div className="absolute top-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
             <div className="absolute bottom-20 -right-10 w-60 h-60 bg-black/10 rounded-full blur-3xl"></div>
          </div>
          {/* Floating Frosted Card */}
          <div
            className="absolute top-[58%] md:top-1/2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-left-12 -translate-y-1/2 w-72 sm:w-80 z-20"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial?.id || "empty"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
                className="w-full min-h-[240px] p-5 md:p-6 bg-white/75 backdrop-blur-xl border border-white/60 rounded-[32px] shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-10 h-10 bg-[#E8DCCB] rounded-full flex items-center justify-center text-[#94A383] shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase font-bold text-[#94A383]">{currentTestimonial?.role}</p>
                      <p className="text-xs font-semibold text-[#3D3D3D]">{currentTestimonial?.stat}</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed italic text-[#4A4A4A]">"{currentTestimonial?.quote}"</p>
                </div>

                <div className="flex items-center justify-center gap-2 pt-4">
                  {testimonials.map((t, idx) => (
                    <button
                      key={t.id}
                      type="button"
                      aria-label={`${t.role} véleménye`}
                      onClick={() => setCurrentTestimonialIdx(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentTestimonialIdx
                          ? "w-5 bg-[#94A383]"
                          : "w-1.5 bg-[#94A383]/35 hover:bg-[#94A383]/60"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Bottom Service Bars */}
      <footer className="w-full px-6 md:px-16 py-12 md:py-6 md:min-h-40 flex items-center justify-center z-10 mt-12 md:mt-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl">
          <Link to="/szolgaltatasok" className="p-6 md:p-8 rounded-[32px] bg-white/40 backdrop-blur-sm border border-white/60 hover:bg-white/60 transition-all cursor-pointer group shadow-sm hover:shadow-md flex flex-col justify-center">
            <h3 className="font-serif italic text-xl md:text-2xl mb-2 text-[#2D2926] group-hover:text-[#94A383] transition-colors">Life coaching</h3>
            <p className="text-xs uppercase tracking-wider text-[#5A634F] font-semibold opacity-80">Belső harmónia & Célkitűzés</p>
          </Link>
          <Link to="/szolgaltatasok" className="p-6 md:p-8 rounded-[32px] bg-white/40 backdrop-blur-sm border border-white/60 hover:bg-white/60 transition-all cursor-pointer group shadow-sm hover:shadow-md flex flex-col justify-center">
            <h3 className="font-serif italic text-xl md:text-2xl mb-2 text-[#2D2926] group-hover:text-[#94A383] transition-colors">Executive Coaching</h3>
            <p className="text-xs uppercase tracking-wider text-[#5A634F] font-semibold opacity-80">Tudatos vezetés & Hatékonyság</p>
          </Link>
          <Link to="/szolgaltatasok" className="p-6 md:p-8 rounded-[32px] bg-white/40 backdrop-blur-sm border border-white/60 hover:bg-white/60 transition-all cursor-pointer group shadow-sm hover:shadow-md flex flex-col justify-center">
            <h3 className="font-serif italic text-xl md:text-2xl mb-2 text-[#2D2926] group-hover:text-[#94A383] transition-colors">Gyermek, kamasz és ifjúsági coaching</h3>
            <p className="text-xs uppercase tracking-wider text-[#5A634F] font-semibold opacity-80">Önismeret & Kiegyensúlyozott fejlődés</p>
          </Link>
        </div>
      </footer>
    </>
  );
}
