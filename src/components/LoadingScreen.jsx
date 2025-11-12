import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      setProgress((index / fullText.length) * 100);
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        
        // Complete progress bar
        setProgress(100);
        
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-linear-to-br from-gray-900 via-black to-blue-900/30 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-linear-to-r from-blue-500/10 to-purple-600/10 animate-pulse rounded-full"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-linear-to-r from-purple-500/10 to-pink-600/10 animate-pulse rounded-full"></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out ${Math.random() * 2}s infinite`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        
        {/* Main Text with Glow Effect */}
        <div className="text-center space-y-4">
          <div className="text-5xl md:text-6xl font-mono font-bold relative">
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="animate-pulse ml-1 text-cyan-400">|</span>
            
            {/* Text Shadow Glow */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent opacity-30 blur-lg">
              {text}
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-gray-400 text-lg font-light tracking-widest uppercase">
            Portfolio Loading
          </p>
        </div>

        {/* Modern Progress Bar */}
        <div className="w-80 md:w-96 space-y-4">
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden shadow-2xl">
            <div 
              className="h-full bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full relative transition-all duration-300 ease-out shadow-lg shadow-blue-500/50"
              style={{ width: `${progress}%` }}
            >
              {/* Shine Effect */}
              <div className="absolute top-0 left-0 w-1/2 h-full bg-white/30 rounded-full"
                   style={{ 
                     animation: 'shine 1.5s ease-in-out infinite'
                   }}>
              </div>
            </div>
          </div>
          
          {/* Progress Percentage */}
          <div className="flex justify-between text-sm text-gray-400">
            <span>Loading...</span>
            <span className="font-mono">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((dot) => (
            <div
              key={dot}
              className="w-2 h-2 bg-linear-to-r from-blue-400 to-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: `${dot * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="absolute bottom-8 text-gray-500 text-sm">
        <span className="animate-pulse">Preparing amazing content...</span>
      </div>
    </div>
  );
};