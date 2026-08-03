import React, { useState, useEffect } from 'react';
import { Users, Truck, Flame, Tag, Phone, ArrowRight, Menu, X } from 'lucide-react';
import { ScrollScrubSequence } from '../components/ScrollScrubSequence';

interface HomeViewProps {
  onNavigateToConvenios?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigateToConvenios }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    {
      id: 'nosotros',
      title: 'NOSOTROS',
      icon: Users,
      image: '/nosotros.jpg'
    },
    {
      id: 'material_mayor',
      title: 'MATERIAL MAYOR',
      icon: Truck,
      image: '/material_mayor.jpg'
    },
    {
      id: 'ser_bombero',
      title: 'SER BOMBERO',
      icon: Flame,
      image: '/ser_bombero.jpg'
    },
    {
      id: 'convenios',
      title: 'CONVENIOS',
      icon: Tag,
      image: '/convenios.jpg'
    },
    {
      id: 'contacto',
      title: 'CONTACTO',
      icon: Phone,
      image: '/contacto.png'
    }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === 'convenios' && onNavigateToConvenios) {
      onNavigateToConvenios();
    }
  };

  const tickerItems = [1, 2, 3, 4];

  return (
    <div className="page-container">
      {/* BARRITA DE EMERGENCIA TICKER TOP */}
      <div className="emergency-ticker-bar">
        <div className="emergency-ticker-track">
          {tickerItems.map((num) => (
            <div key={num} className="emergency-ticker-content">
              <span>En caso de emergencia llama al</span>
              <Phone size={13} color="#ffffff" fill="#ffffff" className="phone-icon-filled" />
              <span className="emergency-number">132</span>
            </div>
          ))}
        </div>
      </div>

      {/* OVERLAY Y SIDEBAR DRAWER MÓVIL */}
      <div 
        className={`mobile-sidebar-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside className={`mobile-sidebar-panel ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-header">
          <div className="mobile-sidebar-brand">
            <img src="/logo.png" alt="Tercera Compañía" className="mobile-sidebar-logo" decoding="async" />
          </div>
          <button 
            className="mobile-sidebar-close" 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <X size={24} color="#ffffff" />
          </button>
        </div>

        <div className="mobile-sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="mobile-nav-item"
                onClick={() => handleNavClick(item.id)}
              >
                <div 
                  className="mobile-nav-bg"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="mobile-nav-overlay" />
                <div className="mobile-nav-content">
                  <Icon size={20} color="#ffffff" strokeWidth={1.75} />
                  <span>{item.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      {/* SECCIÓN 1: HERO + NAVBAR VERTICAL */}
      <section className="tercera-layout">
        <main className="tercera-hero">
          <div className="hero-top">
            <img src="/logo.png" alt="Tercera Compañía San Vicente" className="tercera-logo" decoding="async" />
            
            <button 
              className="mobile-menu-trigger"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir Menú"
            >
              <Menu size={26} color="#ffffff" />
            </button>
          </div>

          <div className="hero-center">
            <h1 className="tercera-title">TERCERA COMPAÑÍA</h1>
            <p className="hero-subtitle">"Lealtad y Disciplina"</p>
          </div>
        </main>

        <nav className="tercera-navbar desktop-only-navbar">
          <div className="navbar-columns">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id} 
                  className="nav-column" 
                  onClick={() => handleNavClick(item.id)}
                >
                  <div 
                    className="nav-column-bg" 
                    style={{ backgroundImage: `url(${item.image})` }} 
                  />
                  <div className="nav-column-overlay" />
                  <span className="nav-column-title">{item.title}</span>
                  <div className="nav-column-icon">
                    <Icon size={24} color="#ffffff" strokeWidth={1.5} />
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
      </section>

      {/* SECCIÓN 2: BAJADA / HISTORIA */}
      <section className="bajada-section">
        <div className="bajada-container">
          <div className="bajada-content scroll-reveal">
            <h2 className="bajada-heading">Más de 67 años de historia</h2>
            <p className="bajada-text">
              Somos una compañía de respuesta a emergencias perteneciente al Cuerpo de Bomberos de San Vicente de Tagua Tagua. Con vocación de servicio, capacitación permanente y equipamiento especializado, trabajamos cada día para entregar una respuesta profesional, oportuna y cercana a nuestra comunidad.
            </p>
            <a href="/#" className="bajada-btn">
              Descubrir más <ArrowRight size={16} />
            </a>
          </div>

          <div className="bajada-image-wrap scroll-reveal">
            <img src="/cuartelviejo.png" alt="Cuartel Viejo Tercera Compañía" className="bajada-img" decoding="async" />
          </div>
        </div>
      </section>

      {/* SECUENCIA VIDEO SCROLL-SCRUBBED (ENTRE SECCIÓN 2 Y SECCIÓN 3) */}
      <ScrollScrubSequence />

      {/* SECCIÓN 3: FLOTA DE RESPUESTA */}
      <section className="flota-section">
        <div className="flota-container">
          <div className="flota-image-wrap scroll-reveal">
            <img src="/rh3servicio.jpg" alt="Flota de respuesta Tercera Compañía" className="flota-img" decoding="async" />
          </div>

          <div className="flota-content scroll-reveal">
            <h2 className="flota-heading">Nuestra flota de respuesta</h2>
            <p className="flota-text">
              Nuestra capacidad operativa se sustenta en una flota de cinco unidades especializadas, equipadas para responder a distintos tipos de emergencias. Cada una cumple un rol específico, permitiéndonos actuar de manera rápida, coordinada y eficiente al servicio de la comunidad.
            </p>
            <a href="/#" className="flota-btn">
              Conoce nuestras unidades <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: ADMISIÓN / SER BOMBERO */}
      <section className="admision-section">
        <div className="admision-container">
          <div className="admision-content scroll-reveal">
            <h2 className="admision-heading">¿Sueñas con ser Bombero?</h2>
            <p className="admision-text">
              Conoce el proceso de admisión y da el primer paso para formar parte de nuestra Compañía. Descubre los requisitos, etapas de formación y cómo iniciar un camino marcado por la vocación de servicio, el compromiso y el trabajo en equipo.
            </p>
            <a href="/#" className="admision-btn">
              Proceso de Admisión <ArrowRight size={16} />
            </a>
          </div>

          <div className="admision-image-wrap scroll-reveal">
            <img src="/llamado.jpg" alt="Proceso de admisión Tercera Compañía" className="admision-img" decoding="async" />
          </div>
        </div>
      </section>
    </div>
  );
};
