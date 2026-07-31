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
          <h1 className="convenios-hero-title">Convenios Socios Cooperadores</h1>
          <p className="convenios-hero-desc">
            Si eres socio cooperador puedes acceder a todos estos beneficios. Al ser parte de nuestra institución estas ayudando a mantener en óptimas condiciones el material.
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

      {/* ¿CÓMO SER SOCIO COOPERADOR? */}
      <section className="convenios-section">
        <div className="section-container">
          <div className="section-head">
            <h2>¿Cómo ser Socio Cooperador?</h2>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Rellena el formulario de inscripción</h3>
              <p>Completa el formulario de inscripción en línea con tus datos personales y selecciona el monto de tu aporte mensual. El proceso es simple, rápido y solo te tomará unos minutos.</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Firma el convenio</h3>
              <p>Una vez recibida tu solicitud, nuestro equipo se pondrá en contacto contigo para coordinar la firma del convenio que formaliza tu incorporación como Socio Cooperador.</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Accede a los beneficios</h3>
              <p>Tras completar el proceso de inscripción, comenzarás a formar parte de nuestra red de Socios Cooperadores y podrás acceder a los convenios y beneficios vigentes, además de contribuir directamente al fortalecimiento de la labor de la Tercera Compañía de Bomberos de San Vicente de Tagua Tagua.</p>
            </div>
          </div>

          <div className="text-center-cta">
            <button onClick={handleEnrollClick} className="btn-primary-lg">
              Inscribirme Online
            </button>
          </div>
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
          <h2>Tu apoyo hace la diferencia</h2>
          <p>
            Cada aporte recibido se transforma en equipamiento, capacitación, mantenimiento de nuestras unidades y mejores condiciones para responder a las emergencias de nuestra comunidad.
          </p>
          <p style={{ marginTop: '0.8rem', fontWeight: 600, color: 'var(--white)' }}>
            Hazte Socio Cooperador y forma parte de quienes hacen posible que siempre estemos preparados para servir.
          </p>
          <button onClick={handleEnrollClick} className="btn-primary-lg" style={{ marginTop: '2rem' }}>
            Inscribirme Online
          </button>
        </div>
      </section>

      <Footer activePage="/convenios" />
    </div>
  );
};
