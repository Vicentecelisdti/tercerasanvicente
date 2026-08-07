import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ConveniosHeader } from '../components/ConveniosHeader';
import { Footer } from '../components/Footer';

export const ContactoView: React.FC = () => {
  return (
    <div className="maintenance-wrapper nosotros-page">

      {/* CABECERA CON LOGO A LA IZQUIERDA, TÍTULO CENTRADO Y HAMBURGUESA A LA DERECHA */}
      <header className="nosotros-sober-header hero-contacto">
        <div className="nosotros-header-overlay" />
        <div className="nosotros-header-container hero-three-col-header">
          <a href="/" className="hero-logo-link" title="Ir a Inicio">
            <img src="/logo.webp" alt="Tercera Compañía" className="hero-pc-logo" decoding="async" />
          </a>
          <h1 className="nosotros-main-title">CONTACTO</h1>
          <ConveniosHeader activePage="/contacto" />
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="nosotros-sober-body">

        {/* TARJETAS DE CONTACTO RÁPIDO (FONDO BLANCO) - 3 COLUMNAS */}
        <section className="nosotros-section section-bg-white">
          <div className="nosotros-section-container">
            <div className="contact-cards-grid">

              <div className="contact-card">
                <Phone size={28} className="contact-card-icon" />
                <h3>EMERGENCIAS</h3>
                <p>GRATIS 24/7</p>
                <a href="tel:132" className="contact-card-link">132</a>
              </div>

              <div className="contact-card">
                <MapPin size={28} className="contact-card-icon" />
                <h3>DIRECCIÓN CUARTEL</h3>
                <p>Horacio Aránguiz 1205</p>
                <span className="contact-card-text">San Vicente de Tagua Tagua</span>
              </div>

              <div className="contact-card">
                <Mail size={28} className="contact-card-icon" />
                <h3>CORREOS OFICIALES</h3>
                
                <div className="official-email-item-compact">
                  <span className="email-role-compact">Director de Compañía</span>
                  <a href="mailto:director@tercerasanvicente.cl" className="contact-card-link">director@tercerasanvicente.cl</a>
                </div>

                <div className="official-email-item-compact">
                  <span className="email-role-compact">Capitán de Compañía</span>
                  <a href="mailto:capitan@tercerasanvicente.cl" className="contact-card-link">capitan@tercerasanvicente.cl</a>
                </div>

                <div className="official-email-item-compact" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                  <span className="email-role-compact">Secretario de Compañía</span>
                  <a href="mailto:secretario@tercerasanvicente.cl" className="contact-card-link">secretario@tercerasanvicente.cl</a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer activePage="/contacto" />
    </div>
  );
};
