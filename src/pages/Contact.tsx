import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const subjectLabels: Record<string, string> = {
    eletvezetes: "Life coaching",
    executive: "Executive Coaching",
    ismerkedo: "Ingyenes ismerkedő beszélgetés",
    egyeb: "Egyéb"
  };

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 10000); // 10 seconds per prompt
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Kérlek töltsd ki a kötelező mezőket (Név, E-mail cím, Üzenet)!");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY || "e732fffc-ded2-4f32-8418-d79045eeeed3";

    const payload = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      subject: `Új üzenet - ${subjectLabels[formData.subject] || "Általános érdeklődés"}`,
      message: formData.message,
      from_name: formData.name
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setStatus("error");
        if (data.message && data.message.includes("Invalid Form ID")) {
          setErrorMessage(
            "Érvénytelen Web3Forms elérési kulcs (Access Key)! " +
            "Az üzenőfal működéséhez kérlek hozz létre egy ingyenes kulcsot a https://web3forms.com oldalon a takacs.diana@orgwell.hu e-mail címeddel, majd az AI Studio-ban a bal alsó sarokban lévő Settings (Fogaskerék) -> Secrets / Environment Variables menüpontban add hozzá a VITE_WEB3FORMS_ACCESS_KEY nevű változót a megkapott kulccsal!"
          );
        } else {
          setErrorMessage(data.message || "Hiba történt a küldés során. Kérlek próbáld újra!");
        }
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Hálózati hiba történt. Kérlek győződj meg az internetkapcsolatodról, vagy próbáld újra később!");
    }
  };

  const isPlaceholderKey = !(import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY || 
    (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY";


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

          {status === "success" ? (
            <div className="min-h-[380px] flex flex-col items-center justify-center text-center space-y-4 py-8">
              <div className="w-16 h-16 bg-[#94A383]/20 text-[#94A383] rounded-full flex items-center justify-center mb-2 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl text-[#2D2926] font-semibold">Köszönöm az érdeklődést...</h4>
              <p className="text-[#5C5C5C] max-w-sm text-sm leading-relaxed">
                Az üzenetküldés sikeres volt. Rövidesen felveszem veled a kapcsolatot a megadott e-mail címen.
              </p>
              <div className="text-xs text-[#94A383]/80 font-mono pt-4 select-none">
                Ez a visszajelzés még néhány másodpercig látható marad.
              </div>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              {status === "error" && (
                <div className="flex items-start gap-3 p-4 bg-red-50 text-red-700 rounded-2xl border border-red-200/50 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#5A634F] ml-2">Név *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Neved" 
                    className="w-full px-5 py-4 bg-white/80 border border-[#D9C5B2] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#94A383] focus:border-transparent transition-all placeholder:text-[#A8A8A8]" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#5A634F] ml-2">E-mail cím *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="pelda@email.hu" 
                    className="w-full px-5 py-4 bg-white/80 border border-[#D9C5B2] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#94A383] focus:border-transparent transition-all placeholder:text-[#A8A8A8]" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#5A634F] ml-2">Téma</label>
                <div className="relative">
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/80 border border-[#D9C5B2] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#94A383] focus:border-transparent transition-all text-[#3D3D3D] appearance-none cursor-pointer"
                  >
                    <option value="">Válassz témát...</option>
                    <option value="eletvezetes">Life coaching</option>
                    <option value="executive">Executive Coaching</option>
                    <option value="ismerkedo">Ingyenes ismerkedő beszélgetés</option>
                    <option value="egyeb">Egyéb</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-[#5A634F]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#5A634F] ml-2">Üzenet *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Miben segíthetek? Írd le röviden a helyzeted..." 
                  rows={4} 
                  className="w-full px-5 py-4 bg-white/80 border border-[#D9C5B2] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#94A383] focus:border-transparent transition-all resize-none placeholder:text-[#A8A8A8]"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className={`w-full py-4 rounded-full font-semibold shadow-md transition-all mt-4 flex items-center justify-center gap-2 text-white ${
                  status === "submitting" 
                    ? "bg-[#94A383]/80 cursor-not-allowed" 
                    : "bg-[#94A383] hover:bg-[#839272] hover:shadow-lg"
                }`}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Küldés folyamatban...
                  </>
                ) : (
                  "Üzenet elküldése"
                )}
              </button>

              {isPlaceholderKey && (
                <p className="text-[10px] text-center text-[#94A383]/60 italic mt-2 select-none">
                  Megjegyzés fejlesztőknek: Helyezd el a saját Web3Forms kulcsodat a .env-ben (VITE_WEB3FORMS_ACCESS_KEY) az üzenetek fogadásához.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

