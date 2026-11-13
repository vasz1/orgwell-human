import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <main className="flex-1 flex flex-col px-6 md:px-16 z-10 py-12 md:py-16 w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5A634F] hover:text-[#94A383] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Vissza a főoldalra
        </Link>

        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-[#94A383]/20 rounded-full shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-[#94A383]" />
          <span className="text-[#94A383] text-xs font-bold uppercase tracking-widest">
            Adatvédelem
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-serif italic text-[#2D2926]">
          Adatkezelési <span className="not-italic font-bold text-[#5A634F]">tájékoztató</span>
        </h1>
        <p className="text-xs text-[#6B6B6B] mt-3">
          Hatályos: 2026. november 13-tól · Összhangban az Európai Parlament és a Tanács (EU) 2016/679 rendeletével (GDPR)
        </p>
      </div>

      <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-[36px] p-8 md:p-12 shadow-lg space-y-8 text-sm md:text-base text-[#5C5C5C] leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-xl text-[#2D2926]">1. Az adatkezelő adatai</h2>
          <p>
            <strong>Adatkezelő neve:</strong> Takács Diána
            <br />
            <strong>Helyszín:</strong> 8200 Veszprém, Stadion u. 28/c. és online tér
            <br />
            <strong>E-mail:</strong>{" "}
            <a href="mailto:takacs.diana@orgwell.hu" className="text-[#5A634F] underline hover:text-[#94A383]">
              takacs.diana@orgwell.hu
            </a>
            <br />
            <strong>Telefon:</strong>{" "}
            <a href="tel:+36303291095" className="text-[#5A634F] underline hover:text-[#94A383]">
              +36 30 329 1095
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-[#2D2926]">2. A kezelt adatok köre, az adatkezelés célja és jogalapja</h2>
          <p>
            A Kapcsolat oldalon található űrlap kitöltése során az alábbi személyes adatokat kezelem: <strong>név, e-mail cím, választott téma, valamint az üzenet szövege</strong>.
          </p>
          <p>
            <strong>Az adatkezelés célja:</strong> a beérkező megkeresések megválaszolása, tájékoztatás nyújtása és a díjmentes, 30 perces ismerkedő beszélgetés időpontjának egyeztetése.
          </p>
          <p>
            <strong>Az adatkezelés jogalapja:</strong> az érintett önkéntes, kifejezett hozzájárulása [GDPR 6. cikk (1) a)], illetve az érintett kérésére történő, együttműködést megelőző egyeztetés [GDPR 6. cikk (1) b)]. Az adatszolgáltatás önkéntes, azonban a válaszadáshoz nélkülözhetetlen.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-[#2D2926]">3. Gyermek- és kamasz coachinggal kapcsolatos adatkezelés</h2>
          <p>
            Kiskorú gyermekek és fiatalok esetében a kapcsolatfelvétel, az adatkezelési hozzájárulás megadása és az időpont-egyeztetés kizárólag a szülő vagy törvényes képviselő által és hozzájárulásával történik (GDPR 8. cikk). A beszélgetéseken és üléseken elhangzó információkat teljes diszkrécióval kezelem.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-[#2D2926]">4. Az adatmegőrzés időtartama</h2>
          <p>
            A megkeresés során megadott adatokat a hozzájárulás visszavonásáig, illetve – amennyiben nem jön létre további együttműködés – az utolsó érdemi kapcsolatfelvételt követő legfeljebb <strong>6 hónapig</strong> őrzöm meg, ezt követően véglegesen törlöm őket.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-[#2D2926]">5. Adatfeldolgozók és sütik (cookie-k)</h2>
          <p>
            A weboldal működtetéséhez és az üzenetek továbbításához az alábbi technikai szolgáltatók (adatfeldolgozók) közreműködését veszem igénybe:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Tárhelyszolgáltató:</strong> Vercel Inc. (a weboldal technikai kiszolgálása és a biztonságos működéshez szükséges szervernaplózás).
            </li>
            <li>
              <strong>Űrlapkezelés:</strong> Web3Forms (a kapcsolatfelvételi űrlapon megadott üzenet e-mailben történő továbbítása).
            </li>
          </ul>
          <p>
            Az adatok harmadik fél részére marketing- vagy kereskedelmi célból nem kerülnek átadásra. A weboldal <strong>nem használ statisztikai, elemző vagy marketing célú nyomkövető sütiket</strong>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-[#2D2926]">6. Az érintettek jogai és jogorvoslati lehetőségek</h2>
          <p>
            Bármikor jogosult vagy tájékoztatást (hozzáférést) kérni a rólad kezelt személyes adatokról, kérheted azok helyesbítését, törlését, az adatkezelés korlátozását, valamint bármikor visszavonhatod a hozzájárulásodat a{" "}
            <a href="mailto:takacs.diana@orgwell.hu" className="text-[#5A634F] underline hover:text-[#94A383]">
              takacs.diana@orgwell.hu
            </a>{" "}
            e-mail címen.
          </p>
          <p>
            Amennyiben úgy érzed, hogy a személyes adataid kezelésével kapcsolatban jogsérelem ért, panasszal fordulhatsz a felügyeleti hatósághoz:
          </p>
          <p className="bg-white/60 border border-white rounded-2xl p-4 text-xs md:text-sm">
            <strong>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</strong>
            <br />
            Székhely: 1055 Budapest, Falk Miksa utca 9–11. · Levelezési cím: 1363 Budapest, Pf. 9.
            <br />
            E-mail: ugyfelszolgalat@naih.hu · Honlap: www.naih.hu
          </p>
          <p>
            Az érintett az adatkezelővel szemben bíróság (a lakóhelye vagy tartózkodási helye szerint illetékes törvényszék) előtt is érvényesítheti jogait.
          </p>
        </section>
      </div>
    </main>
  );
}
