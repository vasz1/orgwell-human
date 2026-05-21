import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  
  const navItems = [
    { name: "Kezdőlap", path: "/" },
    { name: "Rólam", path: "/rolam" },
    { name: "Szolgáltatások", path: "/szolgaltatasok" },
    { name: "Módszertan", path: "/modszertan" },
    { name: "Kapcsolat", path: "/kapcsolat" },
  ];

  return (
    <div className="min-h-screen w-full bg-[#F5F2ED] text-[#3D3D3D] font-sans flex flex-col overflow-x-hidden relative">
      {/* Background Decorative Shapes (Organic) */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#94A383] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-12 w-64 h-64 bg-[#D9C5B2] opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#A6B299] opacity-15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Faint Botanical Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden text-[#94A383] opacity-40">
        <svg className="absolute -bottom-20 -left-10 w-[300px] h-[500px] md:w-[400px] md:h-[600px]" viewBox="0 0 200 300" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M 100,300 Q 120,200 80,50" />
          <path d="M 110,250 Q 150,230 160,200 Q 120,210 110,250" fill="currentColor" opacity="0.3"/>
          <path d="M 95,200 Q 50,180 40,140 Q 80,160 95,200" fill="currentColor" opacity="0.3"/>
          <path d="M 105,150 Q 140,120 150,80 Q 110,110 105,150" fill="currentColor" opacity="0.3"/>
          <path d="M 90,100 Q 40,70 30,30 Q 70,50 90,100" fill="currentColor" opacity="0.3"/>
          <path d="M 80,50 Q 100,20 110,0 Q 80,10 80,50" fill="currentColor" opacity="0.3"/>
        </svg>
        <svg className="absolute -top-10 -right-20 w-[250px] h-[400px] md:w-[300px] md:h-[500px] transform scale-x-[-1] rotate-45" viewBox="0 0 200 300" fill="none" stroke="currentColor" strokeWidth="1">
           <path d="M 100,300 Q 120,200 80,50" />
           <path d="M 110,250 Q 150,230 160,200 Q 120,210 110,250" fill="currentColor" opacity="0.3"/>
           <path d="M 95,200 Q 50,180 40,140 Q 80,160 95,200" fill="currentColor" opacity="0.3"/>
           <path d="M 105,150 Q 140,120 150,80 Q 110,110 105,150" fill="currentColor" opacity="0.3"/>
           <path d="M 90,100 Q 40,70 30,30 Q 70,50 90,100" fill="currentColor" opacity="0.3"/>
           <path d="M 80,50 Q 100,20 110,0 Q 80,10 80,50" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>

      {/* Header Navigation */}
      <header className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-6 md:h-24 z-10 gap-6 md:gap-0">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#94A383] flex items-center justify-center shadow-inner">
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tight uppercase text-[#5A634F]">
            Takács Diána
          </span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium tracking-wide uppercase">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors pb-1 ${
                location.pathname === item.path
                  ? "text-[#94A383] border-b-2 border-[#94A383]"
                  : "hover:text-[#94A383]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link to="/kapcsolat" className="px-6 py-2 border border-[#94A383] rounded-full text-xs font-semibold uppercase text-[#5A634F] hover:bg-[#94A383] hover:text-white transition-all shadow-sm hover:shadow-md">
          Időpontfoglalás
        </Link>
      </header>

      <Outlet />
    </div>
  );
}
