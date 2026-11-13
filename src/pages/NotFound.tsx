import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-16 z-10 py-16 w-full max-w-3xl mx-auto">
      <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-[40px] p-10 md:p-14 shadow-xl space-y-6">
        <div className="inline-block px-4 py-1.5 bg-white/60 border border-[#94A383]/20 rounded-full shadow-sm">
          <span className="text-[#94A383] text-xs font-bold uppercase tracking-widest">404</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif italic text-[#2D2926]">
          Az oldal <span className="not-italic font-bold text-[#5A634F]">nem található</span>
        </h1>
        <p className="text-base text-[#5C5C5C] leading-relaxed max-w-md mx-auto">
          Úgy tűnik, ez a hivatkozás elírás miatt nem létezik vagy megváltozott. Menjünk vissza a kezdőlapra!
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#94A383] text-white rounded-full font-semibold shadow-md hover:bg-[#839272] hover:shadow-lg transition-all text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Vissza a főoldalra
          </Link>
        </div>
      </div>
    </main>
  );
}
