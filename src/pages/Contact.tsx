import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="flex-1 flex flex-col md:flex-row px-6 md:px-16 items-center justify-center z-10 py-12 md:py-16 w-full max-w-7xl mx-auto gap-12 md:gap-20">
      
      <div className="w-full md:w-5/12 flex flex-col items-center text-center md:items-start md:text-left">
        <div className="mb-4 inline-block px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-[#94A383]/20 rounded-full shadow-sm">
          <span className="text-[#94A383] text-xs font-bold uppercase tracking-widest">Kapcsolat</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif italic text-[#2D2926] mb-6">
          Kezdjük el a <span className="not-italic font-bold text-[#5A634F]">közös munkát</span>
        </h1>
        <p className="text-lg text-[#5C5C5C] leading-relaxed mb-10">
          Kérdésed van, vagy szeretnél jelentkezni egy nulladik, ismerkedő beszélgetésre? Keress bizalommal az alábbi elérhetőségeken, vagy küldj üzenetet közvetlenül.
        </p>

        <div className="space-y-8 w-full mb-10 md:mb-0">
          <div className="flex items-center gap-5 p-4 rounded-3xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-colors">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#94A383]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-[#94A383] mb-1">Telefon</p>
              <p className="text-[#3D3D3D] font-medium">+36 30 329 1095</p>
            </div>
          </div>
          
          <div className="flex items-center gap-5 p-4 rounded-3xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-colors">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#94A383]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-[#94A383] mb-1">E-mail</p>
              <p className="text-[#3D3D3D] font-medium">takacs.diana@orgwell.hu</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-4 rounded-3xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-colors">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#94A383]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-[#94A383] mb-1">Helyszín</p>
              <p className="text-[#3D3D3D] font-medium">8200 Veszprém<br/><span className="text-xs text-[#6B6B6B] font-normal">vagy Online (Google Meet)</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-7/12">
        <div className="bg-white/60 backdrop-blur-2xl border border-white/60 p-8 md:p-12 rounded-[40px] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#94A383]/10 to-transparent rounded-full -z-10 blur-3xl"></div>
          
          <h3 className="font-serif text-2xl text-[#2D2926] mb-6">Küldj üzenetet</h3>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#5A634F] ml-2">Név</label>
                <input type="text" placeholder="Neved" className="w-full px-5 py-4 bg-white/80 border border-[#D9C5B2] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#94A383] focus:border-transparent transition-all placeholder:text-[#A8A8A8]" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#5A634F] ml-2">E-mail cím</label>
                <input type="email" placeholder="pelda@email.hu" className="w-full px-5 py-4 bg-white/80 border border-[#D9C5B2] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#94A383] focus:border-transparent transition-all placeholder:text-[#A8A8A8]" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#5A634F] ml-2">Téma</label>
              <select className="w-full px-5 py-4 bg-white/80 border border-[#D9C5B2] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#94A383] focus:border-transparent transition-all text-[#3D3D3D] appearance-none cursor-pointer">
                <option value="">Válassz témát...</option>
                <option value="eletvezetes">Life coaching</option>
                <option value="executive">Executive Coaching</option>
                <option value="ismerkedo">Ingyenes ismerkedő beszélgetés</option>
                <option value="egyeb">Egyéb</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#5A634F] ml-2">Üzenet</label>
              <textarea placeholder="Miben segíthetek? Írd le röviden a helyzeted..." rows={4} className="w-full px-5 py-4 bg-white/80 border border-[#D9C5B2] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#94A383] focus:border-transparent transition-all resize-none placeholder:text-[#A8A8A8]"></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-[#94A383] text-white rounded-full font-semibold shadow-md hover:bg-[#839272] hover:shadow-lg transition-all mt-4">
              Üzenet elküldése
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
