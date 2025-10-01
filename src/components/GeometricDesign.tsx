export default function GeometricDesign() {
  return (
    <div className="hidden lg:flex justify-center lg:justify-end">
      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Background circle */}
        <div className="absolute w-full h-full bg-gradient-to-br from-blue-100/60 to-purple-100/60 dark:from-blue-900/15 dark:to-purple-900/15 rounded-full"></div>
        
        {/* Mountain/Triangle design inspired by logo */}
        <div className="relative">
          <svg
            width="200"
            height="160"
            viewBox="0 0 200 160"
            className="drop-shadow-lg"
          >
            {/* Back mountain */}
            <path
              d="M20 140 L80 40 L140 140 Z"
              fill="url(#gradient1)"
              className="opacity-80"
            />
            
            {/* Front mountain */}
            <path
              d="M60 140 L120 20 L180 140 Z"
              fill="url(#gradient2)"
            />
            
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Subtle decorative dots */}
        <div className="absolute top-12 right-16 w-3 h-3 bg-blue-400/60 rounded-full opacity-60"></div>
        <div className="absolute bottom-16 left-12 w-2 h-2 bg-purple-400/60 rounded-full opacity-40"></div>
        <div className="absolute top-20 left-20 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-50"></div>
      </div>
    </div>
  );
}