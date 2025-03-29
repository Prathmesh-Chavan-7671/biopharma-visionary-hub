
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      canvas.width = containerRef.current.clientWidth;
      canvas.height = containerRef.current.clientHeight;
      
      // Recreate particles when resizing
      createParticles();
    };
    
    // Track mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
    };
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = this.getColor();
      }
      
      getColor() {
        const colors = [
          'rgba(14, 165, 233, 0.7)', // bio-blue
          'rgba(13, 148, 136, 0.7)', // bio-teal
          'rgba(186, 230, 253, 0.5)', // bio-light-blue
          'rgba(153, 246, 228, 0.5)', // bio-light-teal
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        if (!canvas) return;
        
        // Movement
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Boundary check
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        
        // Mouse interaction - particles are attracted to cursor
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (150 - distance) / 150;
          
          this.speedX += forceDirectionX * force * 0.02;
          this.speedY += forceDirectionY * force * 0.02;
        }
        
        // Limit speed
        const maxSpeed = 0.8;
        if (Math.abs(this.speedX) > maxSpeed) {
          this.speedX = this.speedX > 0 ? maxSpeed : -maxSpeed;
        }
        if (Math.abs(this.speedY) > maxSpeed) {
          this.speedY = this.speedY > 0 ? maxSpeed : -maxSpeed;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const createParticles = () => {
      if (!canvas) return;
      particles = [];
      
      // Number of particles based on canvas size
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    const connectParticles = () => {
      if (!ctx) return;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(14, 165, 233, ${(100 - distance) / 1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    window.addEventListener('resize', resizeCanvas);
    containerRef.current.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-black via-[#0E1428] to-[#142036] flex items-center">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue pb-2">
                Pioneering Biopharma
              </span>
              <span className="block text-white">
                Accelerating Industry Growth
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto md:mx-0">
              Helping pharma & biotech companies with cutting-edge R&D, 
              product development, and strategic consulting in the era of
              AI-accelerated discovery.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-bio-blue to-bio-teal text-white px-8 py-6 rounded-xl border border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-all duration-300 group animate-pulse">
                <span className="relative z-10">Collaborate Now</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button variant="outline" className="bg-transparent border border-white/10 text-white px-8 py-6 rounded-xl backdrop-blur-sm hover:bg-white/5 transition-all duration-300 group">
                <span className="relative z-10">Schedule a Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-bio-blue to-bio-teal rounded-full blur opacity-75 animate-pulse"></div>
              <div className="relative bg-black rounded-full overflow-hidden h-72 w-72 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Ratnesh Jain" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
