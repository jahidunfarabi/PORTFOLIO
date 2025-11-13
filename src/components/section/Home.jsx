import { useEffect, useState } from "react";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-linear-to-br from-gray-900 via-black to-blue-900/30 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 6}s ease-in-out ${Math.random() * 3}s infinite`
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className={`text-center z-10 px-4 transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Animated Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Hi, I'm Md Jahidun Muntaka
        </h1>

        {/* Animated Description */}
        <div className={`transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            I'm a MERN Stack Developer who loves crafting clean, scalable web applications. 
            My goal is to build solutions that offer both exceptional performance and a 
            delightful user experience.
          </p>
        </div>

        {/* Animated Buttons */}
        <div className={`flex justify-center space-x-4 transition-all duration-700 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <a
            href="#projects"
            className="group relative bg-linear-to-r from-blue-500 to-cyan-500 text-white py-3 px-8 rounded-xl font-medium transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
          </a>

          <a
            href="#contact"
            className="group relative border border-white/20 text-white py-3 px-8 rounded-xl font-medium transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-white/40 hover:bg-white/5"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300"></div>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className={`mt-16 transition-all duration-700 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex flex-col items-center text-gray-500 animate-bounce">
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-500 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </section>
  );
};