import { Target, Heart, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Methodology() {
  return (
    <main className="flex-1 flex flex-col md:flex-row px-6 md:px-16 items-center z-10 py-12 md:py-16 w-full max-w-7xl mx-auto gap-12 md:gap-20">
      <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
        <div className="mb-4 inline-block px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-[#94A383]/20 rounded-full shadow-sm">
          <span className="text-[#94A383] text-xs font-bold uppercase tracking-widest">Hogyan dolgozunk?</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif italic text-[#2D2926] mb-6">
          A coaching <span className="not-italic font-bold text-[#5A634F]">módszertana</span>
        </h1>
        <p className="text-lg text-[#5C5C5C] leading-relaxed mb-10">
          A közös munka során a jelenre és a jövőre fókuszálunk. Nem kész megoldásokat adok, hanem egy védett, inspiráló teret és azokat a kérdéseket, amik elvezetnek a saját felismeréseidhez.
        </p>

        <div className="space-y-6 w-full">
          <div className="p-6 bg-white/50 backdrop-blur-sm border border-white/60 rounded-[24px] flex gap-5 items-start">
            <div className="mt-1 w-12 h-12 bg-[#F5F2ED] rounded-xl flex shrink-0 items-center justify-center shadow-sm border border-white">
              <Target className="w-5 h-5 text-[#94A383]" />
            </div>
            <div>
              <h3 className="font-serif text-xl mb-2 text-[#2D2926]">Fókuszált jelenlét</h3>
              <p className="text-sm text-[#5C5C5C] leading-relaxed">
                Minden ülés egy kitüntetett figyelem. Az ítélkezésmentes közegben olyan gondolatok is felszínre tudnak jönni, amikre a rohanó hétköznapokban nincs idő.
              </p>
            </div>
          </div>
          
          <div className="p-6 bg-white/50 backdrop-blur-sm border border-white/60 rounded-[24px] flex gap-5 items-start">
            <div className="mt-1 w-12 h-12 bg-[#F5F2ED] rounded-xl flex shrink-0 items-center justify-center shadow-sm border border-white">
              <Heart className="w-5 h-5 text-[#94A383]" />
            </div>
            <div>
              <h3 className="font-serif text-xl mb-2 text-[#2D2926]">Organikus fejlődés</h3>
              <p className="text-sm text-[#5C5C5C] leading-relaxed">
                Nem erőltetünk természetellenes tempót. Az egyéni ritmusodhoz igazodva bontjuk le a gátakat és építjük fel a támogató új szokásokat.
              </p>
            </div>
          </div>
          
          <div className="p-6 bg-white/50 backdrop-blur-sm border border-white/60 rounded-[24px] flex gap-5 items-start">
            <div className="mt-1 w-12 h-12 bg-[#F5F2ED] rounded-xl flex shrink-0 items-center justify-center shadow-sm border border-white">
              <CheckCircle2 className="w-5 h-5 text-[#94A383]" />
            </div>
            <div>
              <h3 className="font-serif text-xl mb-2 text-[#2D2926]">Cselekvés-orientált</h3>
              <p className="text-sm text-[#5C5C5C] leading-relaxed">
                A felismerés önmagában nem elég. Minden találkozót egy megvalósítható, kis lépésekből álló akciótervvel zárunk.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative flex justify-center items-center mt-10 md:mt-0">
        <div className="w-[300px] h-[500px] md:w-[380px] md:h-[600px] rounded-[200px] bg-gradient-to-tr from-[#D9C5B2] to-[#F5F2ED] shadow-xl relative overflow-hidden flex items-center justify-center border-4 border-white/50">
           <div className="absolute top-20 right-10 w-40 h-40 bg-[#94A383]/20 rounded-full blur-3xl"></div>
           <div className="absolute bottom-20 left-10 w-50 h-50 bg-[#A6B299]/20 rounded-full blur-3xl"></div>
           
           <div className="w-[260px] md:w-[320px] p-8 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[40px] shadow-lg text-center z-10">
              <h4 className="font-serif text-2xl mb-4 text-[#2D2926]">Készen állsz a változásra?</h4>
              <p className="text-sm text-[#5C5C5C] mb-8 leading-relaxed">Az első lépés mindig egy ingyenes, 30 perces ismerkedő beszélgetés, ahol megnézzük, tudunk-e együtt dolgozni.</p>
              <Link to="/kapcsolat" className="inline-block px-8 py-3 bg-[#94A383] text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Időpontot foglalok
              </Link>
           </div>
        </div>
      </div>
    </main>
  );
}
