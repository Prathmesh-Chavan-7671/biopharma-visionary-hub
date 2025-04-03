
export const TYPOGRAPHY = {
  h1: "text-5xl md:text-7xl font-bold tracking-tighter",
  h2: "text-3xl md:text-5xl font-semibold",
  h3: "text-2xl md:text-3xl font-medium",
  body: "text-lg leading-relaxed",
  caption: "text-sm text-gray-400"
};

export const SPACING = {
  section: "py-20 md:py-32",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  gap: "space-y-8 md:space-y-12"
};

export const COLORS = {
  primary: "from-[#3b82f6] to-[#1d4ed8]",
  secondary: "from-[#8b5cf6] to-[#6366f1]",
  accent: "from-[#14b8a6] to-[#0d9488]",
  dark: "from-[#0F172A] to-[#1E293B]",
  industry: {
    pharma: "from-[#3b82f6] to-[#1d4ed8]", 
    biotech: "from-[#10b981] to-[#059669]",
    medical: "from-[#6366f1] to-[#4f46e5]"
  }
};

export const INDUSTRY_METRICS = {
  costReduction: "Reduced R&D costs by 30-40%",
  timeToMarket: "Accelerated time-to-market by 8-12 months",
  productionEfficiency: "Improved manufacturing yield by 25-60%",
  regulatorySuccess: "90% success rate in regulatory approvals",
  commercialImpact: "Generated $50M+ in revenue for partner companies"
};

export const ANIMATIONS = {
  fadeIn: "transition-all duration-700 ease-out opacity-0 transform translate-y-8",
  slideIn: "transition-all duration-700 ease-out opacity-0 transform -translate-x-8",
  scaleIn: "transition-all duration-500 ease-out opacity-0 transform scale-95",
  hoverScale: "transform transition-transform duration-300 hover:scale-105",
  hoverElevate: "transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
  pulseGlow: "animate-pulse-slow",
  float: "animate-float",
  gradientText: "text-transparent bg-clip-text bg-gradient-to-r",
  gradientBorder: "border border-transparent bg-gradient-to-r p-[1px]",
  glassmorphism: "bg-white/10 backdrop-blur-md border border-white/10",
  darkGlassmorphism: "bg-slate-900/80 backdrop-blur-md border border-white/10",
  shimmer: "animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:400%_100%]"
};

export const EFFECTS = {
  cardHover: "transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl",
  buttonGlow: "hover:shadow-lg hover:shadow-blue-500/20",
  textGradient: "text-transparent bg-clip-text bg-gradient-to-r",
  borderGradient: "border-gradient",
  glassmorphism: "bg-white/10 backdrop-blur-md border border-white/10 shadow-xl",
  neuomorphism: "shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(255,255,255,0.1)]"
};
