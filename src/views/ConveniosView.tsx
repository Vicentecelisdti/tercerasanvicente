import React, { useState } from 'react';
import { UserCheck } from 'lucide-react';
import { ConveniosHeader } from '../components/ConveniosHeader';
import { ConvenioCard } from '../components/ConvenioCard';
import { ConvenioDetailModal } from '../components/ConvenioDetailModal';
import { FaqAccordion } from '../components/FaqAccordion';
import { Footer } from '../components/Footer';
import { conveniosData, faqData } from '../types';
import type { ConvenioItem } from '../types';

export const ConveniosView: React.FC = () => {
  const [selectedConvenio, setSelectedConvenio] = useState<ConvenioItem | null>(null);

  return (
    <div className="maintenance-wrapper convenios-page">

      {/* CABECERA CON LOGO A LA IZQUIERDA, TÍTULO CENTRADO Y HAMBURGUESA A LA DERECHA */}
      <header className="nosotros-sober-header hero-convenios">
        <div className="nosotros-header-overlay" />
        <div className="nosotros-header-container hero-three-col-header">
          <a href="/" className="hero-logo-link" title="Ir a Inicio">
            <img src="/logo.webp" alt="Tercera Compañía" className="hero-pc-logo" decoding="async" />
          </a>
          <h1 className="nosotros-main-title">CONVENIOS</h1>
          <ConveniosHeader activePage="/convenios" />
        </div>
      </header>

      {/* BANNER TEMPORAL DE INACTIVIDAD */}
      <div className="convenios-temporary-banner">
        <div className="banner-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="banner-icon">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p>
            Por motivos de captación de nuevos socios cooperadores, los convenios están <strong>temporalmente inactivos</strong>. Te informaremos en cuanto estén disponibles.
          </p>
        </div>
      </div>

      {/* LISTADO DE CONVENIOS EN GRID MAS GRANDE Y CARDS 1x1 */}
      <section className="convenios-section">
        <div className="section-container">
          <div className="convenios-grid">
            {conveniosData.map((item) => (
              <ConvenioCard
                key={item.id}
                imageSrc={item.imageSrc}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                discountText={item.discountText}
                onOpenDetails={() => setSelectedConvenio(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DETALLES */}
      <ConvenioDetailModal
        convenio={selectedConvenio}
        onClose={() => setSelectedConvenio(null)}
      />

      {/* ¿QUIÉNES PUEDEN ACCEDER? */}
      <section className="convenios-section section-bg-alt">
        <div className="section-container text-center-max">
          <UserCheck size={36} color="var(--primary-red)" style={{ margin: '0 auto 1rem auto' }} />
          <h2>¿Quiénes pueden acceder?</h2>
          <p className="section-lead">
            Los convenios están disponibles exclusivamente para quienes forman parte del programa de Socios Cooperadores de la Tercera Compañía de Bomberos de San Vicente de Tagua Tagua y mantienen su colaboración al día. De esta manera, buscamos reconocer el apoyo constante de quienes contribuyen al funcionamiento y desarrollo de nuestra compañía.
          </p>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES (FAQ) */}
      <section className="convenios-section section-bg-alt">
        <div className="section-container-narrow">
          <div className="section-head">
            <h2>Preguntas Frecuentes</h2>
          </div>

          <FaqAccordion faqs={faqData} />
        </div>
      </section>

      {/* SECCIÓN FINAL */}
      <section className="final-cta-section">
        <div className="section-container text-center-max">
          <h2>CONVIÉRTETE EN SOCIO COOPERADOR</h2>
          <p>
            Tu aporte, sin importar el monto, se destina directamente a:
            <br />
            <br />• Mantención y mejora de nuestro equipamiento.
            <br />• Capacitación continua de nuestros voluntarios.
            <br />• Costos operativos de nuestra compañía.
            <br />• Implementación de nuevas tecnologías y herramientas para emergencias.

            <br /><br />
            Recuerda que <strong>cooperar con bomberos es cooperar con tu propia seguridad.</strong>
          </p>
          {/* Botón removido a petición del usuario */}
        </div>
      </section>

      <div className="convenios-help-box text-center-max" style={{ padding: '2rem 1rem', textAlign: 'center', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: '#334155' }}>
          ¿Problemas o dudas? Comunícate a <a href="mailto:convenios@tercerasanvicente.cl" style={{ color: 'var(--primary-red)', textDecoration: 'none', fontWeight: 700 }}>convenios@tercerasanvicente.cl</a>
        </p>
      </div>

      <Footer activePage="/convenios" />
    </div>
  );
};
