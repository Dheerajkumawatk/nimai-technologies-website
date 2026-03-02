import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const WHATSAPP_NUMBER = '91XXXXXXXXXX';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    // Particle nodes for neural network effect
    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const NODE_COUNT = 60;

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update positions
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(129, 140, 248, 0.6)';
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Nimai Technologies, I would like to talk to your AI Experts.'
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
      aria-label="Hero section"
    >
      {/* Hero background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Neural network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
        aria-hidden="true"
      />

      {/* Floating orbs */}
      <div
        className="orb w-96 h-96 bg-brand-indigo/20 top-1/4 -left-24"
        style={{ animationDelay: '0s' }}
        aria-hidden="true"
      />
      <div
        className="orb w-64 h-64 bg-brand-blue/25 bottom-1/4 right-0"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />
      <div
        className="orb w-48 h-48 bg-purple-600/15 top-1/3 right-1/4"
        style={{ animationDelay: '4s' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Badge */}
        <div className="fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          AI-Powered Institutional Intelligence Platform
        </div>

        {/* H1 Headline */}
        <h1 className="fade-in-up delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Revolutionizing{' '}
          <span className="gradient-text-blue">Institutional</span>
          <br />
          Intelligence with AI
        </h1>

        {/* Subheading */}
        <p className="fade-in-up delay-200 text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
          Empowering Business Schools &amp; Agencies with{' '}
          <span className="text-indigo-300 font-medium">Smart Automation</span> &amp;{' '}
          <span className="text-indigo-300 font-medium">Predictive Intelligence</span>
        </p>

        {/* CTA Buttons */}
        <div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
            aria-label="Request Institutional Demo"
          >
            Request Institutional Demo
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base px-8 py-3.5 w-full sm:w-auto"
            aria-label="Talk to Our AI Experts on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            Talk to Our AI Experts
          </a>
        </div>

        {/* Stats row */}
        <div className="fade-in-up delay-500 mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { value: '50+', label: 'Institutions Served' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '3x', label: 'Efficiency Gain' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="stat-number text-3xl sm:text-4xl mb-1">{stat.value}</div>
              <div className="text-white/50 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContact}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
