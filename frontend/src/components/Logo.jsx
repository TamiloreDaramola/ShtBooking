export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Background geometric element */}
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-gray-100 rounded-lg transform rotate-12 opacity-50 z-0"></div>
        
        {/* Main logo text */}
        <div className="relative z-10 flex items-center">
          <div className="flex items-baseline">
            <span className="text-8xl text-black tracking-tight" style={{ fontWeight: 700 }}>
              Short
            </span>
            <span className="text-8xl text-gray-600 tracking-tight" style={{ fontWeight: 300 }}>
              let
            </span>
          </div>
          
          {/* Accent dot */}
          <div className="w-4 h-4 bg-gray-800 rounded-full ml-2 mb-4 z-20"></div>
        </div>
        
        {/* Subtle underline */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-400 to-transparent z-10"></div>
      </div>
    </div>
  );
}