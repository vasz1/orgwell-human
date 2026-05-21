import { Sparkles, Brain } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#94A383]" />,
      title: "Life coaching",
      subtitle: "Belső harmónia & Célkitűzés",
      description: (
        <>
          Egyéni fókuszú ülések, ahol feltérképezzük az elakadásokat és kidolgozunk egy fenntartható, Téged támogató jövőképet. Azoknak ajánlom, akik személyre szabott támogatást keresnek a mindennapi nehézségek megoldásában, akik velem szeretnének együtt haladni az önismeret útján, és főként azoknak, akik ismét szeretnének kapcsolódni Önmagukhoz.
          <br /><br />
          <span className="font-semibold">Fedezd fel a belső erőforrásaidat és érj el tartós változást!</span>
        </>
      ),
      features: ["Személyre szabott akcióterv", "Stresszkezelési technikák", "Önismeret elmélyítése"]
    },
    {
      icon: <Brain className="w-6 h-6 text-[#94A383]" />,
      title: "Executive Coaching",
      subtitle: "Tudatos vezetés & Hatékonyság",
      description: (
        <>
          Vezetői pozícióban dolgozóknak szóló program. Azoknak ajánlom, akik keresik a karrierjükben is Önmagukat, és hatékonyabb munkavégzést, motiválóbb környezetet szeretnének kialakítani maguk körül.
          <br /><br />
          <span className="font-semibold">Találd meg a hivatásodban a szenvedélyt és az egyensúlyt!</span>
        </>
      ),
      features: ["Vezetői blokkok oldása", "Konfliktuskezelés fejlesztése", "Burnout prevenció"]
    }
  ];

  return (
    <main className="flex-1 flex flex-col px-6 md:px-16 z-10 py-12 md:py-16 w-full max-w-7xl mx-auto">
      <div className="text-center md:text-left mb-16">
        <div className="mb-4 inline-block px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-[#94A383]/20 rounded-full shadow-sm">
          <span className="text-[#94A383] text-xs font-bold uppercase tracking-widest">Miben segíthetek?</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif italic text-[#2D2926] mb-6">
          Coaching <span className="not-italic font-bold text-[#5A634F]">szolgáltatások</span>
        </h1>
        <p className="text-lg text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto md:mx-0">
          Hiszek abban, hogy minden élethelyzet és elakadás egyedi megközelítést igényel. 
          Válaszd azt a formát, ami a leginkább illeszkedik a jelenlegi céljaidhoz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto md:mx-0">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col p-8 md:p-10 bg-white/60 backdrop-blur-xl border border-white/60 rounded-[40px] shadow-lg shadow-[#94A383]/5 relative overflow-hidden group hover:shadow-xl transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#94A383]/10 to-[#D9C5B2]/10 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
            
            <div className="w-14 h-14 bg-[#F5F2ED] rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-white">
              {service.icon}
            </div>
            
            <h3 className="font-serif text-2xl text-[#2D2926] mb-2">{service.title}</h3>
            <p className="text-xs uppercase tracking-wider text-[#94A383] font-bold mb-6">{service.subtitle}</p>
            
            <p className="text-sm text-[#5C5C5C] leading-relaxed mb-8 flex-1">
              {service.description}
            </p>
            
            <ul className="space-y-3 mb-10">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#3D3D3D]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#94A383]"></div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link to="/kapcsolat" className="mt-auto px-6 py-3 border-2 border-[#94A383] text-[#5A634F] rounded-full text-center text-sm font-semibold hover:bg-[#94A383] hover:text-white transition-all">
              Kiválasztom
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
