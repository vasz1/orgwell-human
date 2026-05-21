import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonials } from "../data/testimonials";

export default function Home() {
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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
            Személyes és online coaching szolgáltatás vezetőknek és magánszemélyeknek, akik fenntartható fejlődést és belső békét keresnek a modern kihívások közepette.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link to="/kapcsolat" className="px-10 py-4 bg-[#94A383] text-white rounded-full shadow-lg shadow-[#94A383]/20 font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center">
              Konzultáció igénylése
            </Link>
            <Link to="/rolam" className="px-10 py-4 bg-white/80 backdrop-blur-md text-[#5A634F] rounded-full border border-white font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-white hover:-translate-y-0.5 transition-all w-full sm:w-auto">
              Bemutatkozás
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xl md:text-2xl italic font-serif text-[#5C5C5C] mt-6">
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
          <div className="absolute top-[60%] md:top-1/2 -left-2 md:-left-12 transform -translate-y-1/2 w-52 md:w-56">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial?.id || "empty"}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="w-full p-5 md:p-6 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[32px] shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E8DCCB] rounded-full flex items-center justify-center text-[#94A383] shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#94A383]">{currentTestimonial?.role}</p>
                    <p className="text-xs font-semibold text-[#3D3D3D]">{currentTestimonial?.stat}</p>
                  </div>
                </div>
                <p className="text-[11px] italic text-[#6B6B6B] leading-relaxed">"{currentTestimonial?.quote}"</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Bottom Service Bars */}
      <footer className="w-full px-6 md:px-16 py-12 md:py-0 md:h-40 flex items-center justify-center z-10 mt-12 md:mt-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">
          <Link to="/szolgaltatasok" className="p-6 md:p-8 rounded-[32px] bg-white/40 backdrop-blur-sm border border-white/60 hover:bg-white/60 transition-all cursor-pointer group shadow-sm hover:shadow-md">
            <h3 className="font-serif italic text-xl md:text-2xl mb-2 text-[#2D2926] group-hover:text-[#94A383] transition-colors">Life coaching</h3>
            <p className="text-xs uppercase tracking-wider text-[#5A634F] font-semibold opacity-80">Belső harmónia & Célkitűzés</p>
          </Link>
          <Link to="/szolgaltatasok" className="p-6 md:p-8 rounded-[32px] bg-white/40 backdrop-blur-sm border border-white/60 hover:bg-white/60 transition-all cursor-pointer group shadow-sm hover:shadow-md">
            <h3 className="font-serif italic text-xl md:text-2xl mb-2 text-[#2D2926] group-hover:text-[#94A383] transition-colors">Executive Coaching</h3>
            <p className="text-xs uppercase tracking-wider text-[#5A634F] font-semibold opacity-80">Tudatos vezetés & Hatékonyság</p>
          </Link>
        </div>
      </footer>
    </>
  );
}
