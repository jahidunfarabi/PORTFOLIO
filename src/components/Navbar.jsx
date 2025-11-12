import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-linear-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl border-b border-white/20 shadow-2xl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Animated Logo */}
          <a 
            href="#home" 
            className="group relative font-mono text-2xl font-bold text-white hover:scale-105 transition-all duration-300"
            aria-label="Homepage"
          >
            <span className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Md Jahidun Muntaka
            </span>
            <span className="text-blue-400 drop-shadow-lg">.dev</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
          </a>

          {/* Desktop Navigation with Hover Effects */}
          <div className="hidden md:flex items-center space-x-1 bg-black/30 rounded-2xl p-1.5 border border-white/10">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-6 py-2.5 text-gray-300 hover:text-white transition-all duration-300 rounded-xl group/nav-item"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover/nav-item:opacity-100 rounded-xl transition-all duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-500 group-hover/nav-item:w-4/5 group-hover/nav-item:left-1/10 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Modern Mobile Menu Button */}
          <button
            className="relative w-10 h-10 cursor-pointer z-40 md:hidden flex items-center justify-center group"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="relative w-6 h-5 transform transition-all duration-300">
              <span className={`absolute left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? 'rotate-45 top-2' : 'top-0'
              } group-hover:bg-blue-400`}></span>
              <span className={`absolute left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 top-2 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              } group-hover:bg-blue-400`}></span>
              <span className={`absolute left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? '-rotate-45 top-2' : 'top-4'
              } group-hover:bg-blue-400`}></span>
            </div>
            
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-full bg-blue-500/20 blur-md transition-all duration-300 ${
              menuOpen ? 'opacity-100 scale-125' : 'opacity-0 scale-50'
            }`}></div>
          </button>

          {/* CTA Button for Desktop */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="relative px-6 py-2.5 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group/cta overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-500 opacity-0 group-hover/cta:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover/cta:translate-x-full transition-all duration-1000"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Animated Border Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </nav>
  );
};