import React, { useState } from 'react';
import { Home, Users, Truck, Flame, Tag, Phone, Menu, X } from 'lucide-react';

interface ConveniosHeaderProps {
  activePage?: string;
}

export const ConveniosHeader: React.FC<ConveniosHeaderProps> = ({ activePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', title: 'INICIO', icon: Home, image: '/maintenance_photo.webp', href: '/' },
    { id: 'nosotros', title: 'NOSOTROS', icon: Users, image: '/nosotros.webp', href: '/nosotros' },
    { id: 'material_mayor', title: 'MATERIAL MAYOR', icon: Truck, image: '/material_mayor.webp', href: '/material-mayor' },
    { id: 'ser_bombero', title: 'SER BOMBERO', icon: Flame, image: '/ser_bombero.webp', href: '/ser-bombero' },
    { id: 'convenios', title: 'CONVENIOS', icon: Tag, image: '/convenios.webp', href: '/convenios' },
    { id: 'contacto', title: 'CONTACTO', icon: Phone, image: '/contacto.webp', href: '/contacto' },
  ];

  return (
    <>
      {/* OVERLAY Y SIDEBAR DRAWER MÓVIL */}
      <div
        className={`mobile-sidebar-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside className={`mobile-sidebar-panel ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-header">
          <div className="mobile-sidebar-brand">
            <img src="/logo.webp" alt="Tercera Compañía" className="mobile-sidebar-logo" decoding="async" />
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
              <a
                key={item.id}
                href={item.href}
                className="mobile-nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ textDecoration: 'none' }}
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
              </a>
            );
          })}
        </div>
      </aside>

      {/* BOTÓN HAMBURUESA (IGUAL TAMAÑO QUE EL LOGO A LA DERECHA) */}
      <button
        className="hero-pc-hamburger"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Abrir Menú"
      >
        <Menu size={26} color="#ffffff" />
      </button>
    </>
  );
};
