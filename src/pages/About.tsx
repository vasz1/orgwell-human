import { Link } from "react-router-dom";
import { testimonials } from "../data/testimonials";

export default function About() {
  return (
    <div className="flex-1 w-full flex flex-col z-10">
      <main className="flex flex-col md:flex-row px-6 md:px-16 items-center py-12 md:py-16 w-full max-w-7xl mx-auto gap-12 md:gap-20">
        <div className="w-full md:w-1/2 relative flex justify-center items-center order-2 md:order-1">
          <div className="w-72 h-[420px] md:w-80 md:h-[480px] rounded-t-[160px] rounded-b-[40px] bg-[#E8DCCB] relative overflow-hidden shadow-xl border border-white flex flex-col justify-end">
            
            {/* Háttér dekoráció a kép mögött */}
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#E8DCCB]/50 to-[#D9C5B2] mix-blend-multiply"></div>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-white/40 rounded-full blur-2xl"></div>

            {/* Kép beillesztése */}
            {/* Ide tudod majd feltölteni a saját végleges fotód (public/profile.png) */}
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" 
              alt="Takács Diána" 
              className="w-full h-full object-cover relative z-10 opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-md px-6 py-2 rounded-full border border-white/50 whitespace-nowrap z-20">
              <p className="text-xs font-bold uppercase tracking-widest text-[#5A634F]">Takács Diána</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left order-1 md:order-2">
          <div className="mb-4 inline-block px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-[#94A383]/20 rounded-full shadow-sm">
            <span className="text-[#94A383] text-xs font-bold uppercase tracking-widest">Rólam</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif italic text-[#2D2926] mb-6">
            Ismerjük meg <span className="not-italic font-bold text-[#5A634F]">egymást</span>
          </h1>
          
          <div className="space-y-4 text-[#5C5C5C] leading-relaxed mb-8">
            <p>
              Szia. Takács Diána vagyok. Végzettségemet tekintve közgazdász, könyvelő és akkreditált life & business coach. Hivatásomat tekintve pedig segítő szakember. 
            </p>
            <p>
              Küldetésem, hogy segítsek a hozzám fordulóknak megtalálni a saját belső hangjukat, segítsek újra kapcsolódni önmagukhoz, és kihozni magukból a maximumot, mind a magánéletben, mind a hivatásukban.
            </p>
            <p>
              Hiszek abban, hogy a tartós változás kulcsa az önismeret és a tudatos döntéshozatal. Munkám során diszkrét, támogató közegben kísérem végig az ügyfeleimet a saját útjukon.
            </p>
            <p>
              Módszerem alapja az empátia, a jelenlét és a strukturált kérdezés technika. Nem tanácsokat adok, hanem tükröt tartok, amiben megláthatod a saját megoldásaidat.
            </p>
            <p>
              Ebben a térben mindenki megkapja a lehetőséget, hogy ítélkezésmentesen őszinte lehessen önmagával.
            </p>
            <p className="font-bold text-[#2D2926]">
              A változás nem küzdelem, hanem egy folyamat, amiben biztonságban vagy.
            </p>
          </div>

          <Link to="/kapcsolat" className="px-8 py-3 bg-white/80 backdrop-blur-md text-[#5A634F] rounded-full border border-white font-semibold shadow-sm hover:bg-white hover:-translate-y-0.5 transition-all text-sm">
            Lépj kapcsolatba velem
          </Link>
        </div>
      </main>

      {/* Rólam mondták szekció */}
      <section className="px-6 md:px-16 py-12 md:py-20 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-4 inline-block px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-[#94A383]/20 rounded-full shadow-sm">
            <span className="text-[#94A383] text-xs font-bold uppercase tracking-widest">Visszajelzések</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#2D2926]">
            Rólam <span className="not-italic font-bold text-[#5A634F]">mondták</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="p-8 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[32px] shadow-sm hover:shadow-md transition-all flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#E8DCCB] rounded-full flex items-center justify-center text-[#94A383] shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-[#94A383]">{t.role}</p>
                  <p className="text-sm font-semibold text-[#3D3D3D]">{t.stat}</p>
                </div>
              </div>
              <p className="text-sm italic text-[#6B6B6B] leading-relaxed flex-1">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
