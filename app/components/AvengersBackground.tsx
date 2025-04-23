export default function AvengersBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[url('/halftone.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-red-500/30 to-yellow-500/30"></div>
      <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          </pattern>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#small-grid)" />
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="w-64 h-64 bg-red-500 rounded-full filter blur-[100px] animate-pulse animation-delay-2000"></div>
        <div className="w-64 h-64 bg-yellow-500 rounded-full filter blur-[100px] animate-pulse animation-delay-4000"></div>
      </div>
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="20" cy="20" r="5" fill="#4285F4" className="animate-float">
            <animate attributeName="cy" values="20;25;20" dur="3s" repeatCount="indefinite" />
          </circle>
          <path d="M40 40 L45 35 L50 40 L45 45 Z" fill="#DB4437" className="animate-spin">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 45 40"
              to="360 45 40"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <rect x="70" y="70" width="10" height="10" fill="#F4B400" className="animate-pulse">
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
          </rect>
          <polygon points="80,10 85,20 90,10" fill="#0F9D58" className="animate-bounce">
            <animate
              attributeName="points"
              values="80,10 85,20 90,10; 80,15 85,25 90,15; 80,10 85,20 90,10"
              dur="2s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
      </div>
    </div>
  )
}

