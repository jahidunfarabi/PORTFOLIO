import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    
    if (menuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = '';
      };
    }
  }, [menuOpen, setMenuOpen]);

  const menuItems = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#about", label: "About", icon: "👨‍💻" },
    { href: "#projects", label: "Projects", icon: "🚀" },
    { href: "#contact", label: "Contact", icon: "📧" },
  ];

  return (
    <>
      {/* Backdrop - Responsive for all screens */}
      <div
        className={`fixed inset-0 z-30 bg-black transition-all duration-500 md:hidden ${
          menuOpen ? "bg-opacity-60 backdrop-blur-sm" : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Menu Container - Responsive width */}
      <div
        className={`fixed top-0 right-0 h-full z-40 
                   transform transition-all duration-500 ease-out
                   w-80 max-w-[85vw] sm:max-w-[90vw]  // Responsive max-width
                   ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Background */}
        <div className="relative h-full w-full bg-linear-to-br from-gray-900 via-black to-blue-900/50 backdrop-blur-xl border-l border-white/10 shadow-2xl">
          
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          {/* Header - Responsive padding */}
          <div className="relative z-10 flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
            <h2 className="text-lg sm:text-xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Navigation
            </h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 
                         text-white text-xl sm:text-2xl transition-all duration-300 hover:scale-110 
                         hover:shadow-lg hover:shadow-red-500/20"
              aria-label="Close Menu"
            >
              <span className="block transform rotate-0 hover:rotate-90 transition-transform duration-300">
                &times;
              </span>
            </button>
          </div>

          {/* Menu Items - Responsive spacing */}
          <nav className="relative z-10 flex flex-col p-4 sm:p-6 space-y-3 sm:space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl 
                           bg-white/5 border border-white/10 hover:border-white/20
                           transform transition-all duration-500 hover:scale-105
                           hover:shadow-xl hover:shadow-blue-500/10
                           ${menuOpen 
                             ? "opacity-100 translate-x-0" 
                             : "opacity-0 translate-x-10"
                           }`}
                style={{
                  transitionDelay: menuOpen ? `${index * 100}ms` : "0ms"
                }}
              >
                <span className="text-xl sm:text-2xl transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {item.label}
                </span>
                <span className="ml-auto text-white/40 group-hover:text-white/60 transform group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </a>
            ))}
          </nav>

          {/* Footer - Responsive padding */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-white/10">
            <div className="text-center">
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Let's build something amazing</p>
              <div className="flex justify-center space-x-2 sm:space-x-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};