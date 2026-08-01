import React, { useState } from 'react';
import { UserCheck } from 'lucide-react';
import { ConveniosHeader } from '../components/ConveniosHeader';
import { ConvenioCard } from '../components/ConvenioCard';
import { ConvenioDetailModal } from '../components/ConvenioDetailModal';
import { FaqAccordion } from '../components/FaqAccordion';
import { Footer } from '../components/Footer';
import { conveniosData, faqData } from '../types';
import type { ConvenioItem } from '../types';

interface ConveniosViewProps {
  onBackToHome: () => void;
}

export const ConveniosView: React.FC<ConveniosViewProps> = ({ onBackToHome }) => {
  const [selectedConvenio, setSelectedConvenio] = useState<ConvenioItem | null>(null);

  const handleEnrollClick = () => {
    alert("Formulario de inscripción online para Socios Cooperadores");
  };

  return (
    <div className="maintenance-wrapper">
      <ConveniosHeader onBackToHome={onBackToHome} />

      {/* HERO SECTION DE CONVENIOS */}
      <section className="convenios-hero">
        <div className="convenios-hero-overlay"></div>
        <div className="convenios-hero-content">
          <h1 className="convenios-hero-title">CONVENIOS</h1>
          <p className="convenios-hero-desc">
            Como <strong>Socio Cooperador</strong> tienes acceso a beneficios y convenios exclusivos.
            <br /> <strong>Tu aporte es fundamental </strong>para poder realizar nuestra labor.
            <br />
            <br /> <p style={{ fontStyle: 'italic' }}>Revisa el listado de convenios y beneficios que tenemos para ti.</p>

          </p>
        </div>
      </section>

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
        onEnroll={handleEnrollClick}
      />

      {/* ¿QUIÉNES PUEDEN ACCEDER? */}
      <section className="convenios-section section-bg-alt">
        <div className="section-container text-center-max">
          <UserCheck size={36} color="var(--primary-red)" style={{ margin: '0 auto 1rem auto' }} />
          <h2>¿Quiénes pueden acceder?</h2>
          <p className="section-lead">
            Los convenios están disponibles exclusivamente para quienes forman parte del programa de Socios Cooperadores de la Tercera Compañía de Bomberos de San Vicente de Tagua Tagua y mantienen su colaboración al día. De esta manera, buscamos reconocer el apoyo constante de quienes contribuyen al funcionamiento y desarrollo de nuestra institución.
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

          <button onClick={handleEnrollClick} className="btn-primary-lg" style={{ marginTop: '2rem' }}>
            Quiero ser Socio.
          </button>
        </div>
      </section>

      <Footer activePage="/convenios" />
    </div>
  );
};
