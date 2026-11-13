import { Sparkles, Brain, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#94A383]" />,
      subjectKey: "eletvezetes",
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
      subjectKey: "executive",
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
    },
    {
      icon: <Sprout className="w-6 h-6 text-[#94A383]" />,
      subjectKey: "ifjusagi",
      title: "Gyermek, kamasz és ifjúsági coaching",
      subtitle: "Önismeret & Kiegyensúlyozott fejlődés",
      description: (
        <>
          A felnőtté válás és az iskolás évek tele vannak láthatatlan elvárásokkal és bizonytalansággal. Az ülések során olyan támogató közeget teremtek, ahol a fiatalok saját tempójukban, játékos eszközökkel és jól irányzott kérdésekkel tanulják meg felismerni az erősségeiket és kezelni a nehéz helyzeteket.
          <br /><br />
          <span className="font-semibold">Bátor lépések, nyugodtabb mindennapok – személyre szabott figyelemmel.</span>
        </>
      ),
      features: ["Érzelmi tudatosság és kommunikáció", "Koncentráció és vizsgadrukk kezelése", "Önállóság és felelősségvállalás"]
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
            
            <Link to={`/kapcsolat?tema=${service.subjectKey}`} className="mt-auto px-6 py-3 border-2 border-[#94A383] text-[#5A634F] rounded-full text-center text-sm font-semibold hover:bg-[#94A383] hover:text-white transition-all">
              Kiválasztom
            </Link>
          </div>
        ))}
      </div>

      {/* Milyen élethelyzetekben segíthet? */}
      <section className="mt-20 md:mt-24 w-full">
        <div className="text-center md:text-left mb-10">
          <div className="mb-4 inline-block px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-[#94A383]/20 rounded-full shadow-sm">
            <span className="text-[#94A383] text-xs font-bold uppercase tracking-widest">Gyakori témák</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif italic text-[#2D2926] mb-3">
            Milyen élethelyzetekben <span className="not-italic font-bold text-[#5A634F]">segíthet?</span>
          </h2>
          <p className="text-base text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto md:mx-0">
            Ha még bizonytalan vagy, nézd meg, milyen hétköznapi vagy szakmai elakadásokkal fordulnak hozzám leggyakrabban.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              category: "Life coaching",
              subtitle: "Magánélet & Önismeret",
              topics: [
                "Párkapcsolati nehézségek, visszatérő konfliktusok",
                "Munkahelyi elakadások, váltás előtti bizonytalanság",
                "Időhiány, állandó túlterheltség és kiégés",
                "Döntési nehézségek, halogatás",
                "Élethelyzeti váltás, újrakezdés",
                "Önbizalomhiány, önértékelési kérdések"
              ]
            },
            {
              category: "Executive Coaching",
              subtitle: "Vezetés & Karrier",
              topics: [
                "Új vezetői szerepbe való belerázódás",
                "Delegálás és hatékony időgazdálkodás",
                "Kiégés (burnout) megelőzése, terhelhetőség",
                "Csapaton belüli kommunikáció és konfliktusok"
              ]
            },
            {
              category: "Gyermek, kamasz & ifjúsági",
              subtitle: "Iskola & Fiatalok",
              topics: [
                "Vizsgadrukk és teljesítményszorongás",
                "Tanulási motiváció és figyelemfókusz",
                "Kortárs kapcsolatok és beilleszkedés",
                "Pályaválasztás, továbbtanulási döntések",
                "Önbizalomhiány"
              ]
            }
          ].map((group, idx) => (
            <div
              key={idx}
              className="p-7 md:p-8 bg-white/50 backdrop-blur-lg border border-white/60 rounded-[32px] shadow-sm flex flex-col"
            >
              <p className="text-[11px] uppercase tracking-wider text-[#94A383] font-bold mb-1">
                {group.subtitle}
              </p>
              <h3 className="font-serif text-xl text-[#2D2926] mb-5">{group.category}</h3>
              <ul className="space-y-3 text-sm text-[#5C5C5C]">
                {group.topics.map((topic, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#94A383] mt-2 shrink-0"></span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Hogyan épül fel a közös munka? */}
      <section className="mt-20 md:mt-24 w-full">
        <div className="text-center md:text-left mb-10">
          <div className="mb-4 inline-block px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-[#94A383]/20 rounded-full shadow-sm">
            <span className="text-[#94A383] text-xs font-bold uppercase tracking-widest">A folyamat menete</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif italic text-[#2D2926]">
            Hogyan épül fel a <span className="not-italic font-bold text-[#5A634F]">közös munka?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Jelentkezés",
              text: "Válaszd ki a hozzád illő témát, és küldj egy rövid üzenetet a Kapcsolat oldalon, vagy hívj telefonon!"
            },
            {
              step: "02",
              title: "Díjmentes ismerkedés",
              text: "Egy 30 perces, kötelezettségmentes online vagy személyes beszélgetés során megismerjük egymást és a céljaidat."
            },
            {
              step: "03",
              title: "Közös folyamat",
              text: "Saját tempódban haladunk – gyermekeknél és kamaszoknál minimum 3, felnőtteknél minimum 5 alkalommal."
            },
            {
              step: "04",
              title: "Tartós változás",
              text: "A felismerésekből konkrét, a mindennapokban is működő szokások és önálló megoldások születnek."
            }
          ].map((item) => (
            <div
              key={item.step}
              className="p-7 bg-white/60 backdrop-blur-xl border border-white/60 rounded-[32px] shadow-sm flex flex-col"
            >
              <span className="font-serif italic text-3xl font-bold text-[#94A383]/70 mb-3">
                {item.step}
              </span>
              <h3 className="font-serif text-xl text-[#2D2926] mb-2">{item.title}</h3>
              <p className="text-sm text-[#5C5C5C] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:justify-start">
          <Link
            to="/kapcsolat?tema=ismerkedo"
            className="px-8 py-4 bg-[#94A383] text-white rounded-full shadow-lg shadow-[#94A383]/20 font-semibold hover:bg-[#839272] hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm text-center"
          >
            Kérek egy ingyenes ismerkedő beszélgetést
          </Link>
        </div>
      </section>
    </main>
  );
}
