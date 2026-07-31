import React, { useState } from 'react';
import { UserCheck } from 'lucide-react';
import { ConveniosHeader } from '../components/ConveniosHeader';
import { ConvenioCard } from '../components/ConvenioCard';
import { ConvenioDetailModal } from '../components/ConvenioDetailModal';
import { FaqAccordion } from '../components/FaqAccordion';
import { Footer } from '../components/Footer';
import { faqData } from '../types';

interface ConveniosViewProps {
  onBackToHome: () => void;
}

export const ConveniosView: React.FC<ConveniosViewProps> = ({ onBackToHome }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
          <span className="hero-kicker">Beneficios Exclusivos</span>
          <h1 className="convenios-hero-title">Convenios para Socios Cooperadores</h1>
          <p className="convenios-hero-desc">
            Como Socio Cooperador de la Tercera Compañía de Bomberos de San Vicente de Tagua Tagua, accedes a beneficios exclusivos gracias a los convenios establecidos con empresas e instituciones que apoyan nuestra labor. Cada convenio es una forma de agradecer tu compromiso con Bomberos y fortalecer el vínculo entre nuestra Compañía y la comunidad.
          </p>
          <button onClick={handleEnrollClick} className="btn-primary-lg">
            Inscribirme Online
          </button>
        </div>
      </section>

      {/* NUESTROS CONVENIOS & TARJETA */}
      <section className="convenios-section">
        <div className="section-container">
          <div className="section-head">
            <h2>Nuestros Convenios</h2>
            <p>
              Conoce los beneficios disponibles para nuestros Socios Cooperadores. Continuamente trabajamos en la incorporación de nuevos convenios con comercios y empresas locales para entregar un mayor valor a quienes apoyan nuestra institución.
            </p>
          </div>

          <div className="convenios-grid">
            <ConvenioCard
              imageSrc="/optica_cosmovision.jpg"
              title="Óptica CosmoVisión"
              subtitle="10% de descuento para Socios Cooperadores."
              description="Obtén un 10% de descuento en productos y servicios seleccionados presentando tu calidad de Socio Cooperador vigente."
              discountText="10% OFF"
              onOpenDetails={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </section>

      {/* MODAL DETALLES */}
      <ConvenioDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
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
              <h3>Completa tu inscripción</h3>
              <p>Completa el formulario de inscripción en línea con tus datos personales. El proceso es rápido y solo toma unos minutos.</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Activa tu colaboración</h3>
              <p>Selecciona el monto de tu aporte mensual y confirma tu inscripción. Tu contribución permitirá fortalecer el equipamiento, la capacitación y la respuesta operativa de nuestra Compañía.</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Accede a los beneficios</h3>
              <p>Una vez confirmada tu inscripción, podrás disfrutar de los convenios vigentes y formar parte de la red de personas que apoyan activamente el trabajo de Bomberos.</p>
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
