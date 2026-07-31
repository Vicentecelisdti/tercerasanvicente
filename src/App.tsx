import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  X, 
  ArrowLeft, 
  Percent,
  UserCheck
} from 'lucide-react';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
  const [selectedModal, setSelectedModal] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const handleEnrollClick = () => {
    alert("Formulario de inscripción online para Socios Cooperadores");
  };

  // RUTA /convenios
  if (currentPath === '/convenios') {
    return (
      <div className="maintenance-wrapper">
        {/* HEADER / NAVBAR DE LA LANDING DE CONVENIOS */}
        <header className="convenios-header">
          <div className="convenios-header-container">
            <div className="brand-group" onClick={() => navigateTo('/')} style={{ cursor: 'pointer' }}>
              <img src="/logo.png" alt="Tercera Compañía de Bomberos" className="company-logo-sm" />
              <div>
                <h1 className="brand-title">Tercera Compañía</h1>
                <span className="brand-subtitle">San Vicente de Tagua Tagua</span>
              </div>
            </div>
            
            <button onClick={() => navigateTo('/')} className="btn-back">
              <ArrowLeft size={16} /> Volver al Inicio
            </button>
          </div>
        </header>

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
              {/* TARJETA DE CONVENIO */}
              <div className="convenio-card">
                <div className="card-image-wrap">
                  <img src="/optica_cosmovision.jpg" alt="Óptica CosmoVisión" className="card-image" />
                  <span className="discount-badge"><Percent size={14} /> 10% OFF</span>
                </div>
                <div className="card-body">
                  <h3 className="card-title">Óptica CosmoVisión</h3>
                  <h4 className="card-subtitle">10% de descuento para Socios Cooperadores.</h4>
                  <p className="card-text">
                    Obtén un 10% de descuento en productos y servicios seleccionados presentando tu calidad de Socio Cooperador vigente.
                  </p>
                  <button onClick={() => setSelectedModal(true)} className="btn-card-details">
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MODAL DE DETALLE DEL CONVENIO */}
        {selectedModal && (
          <div className="modal-backdrop" onClick={() => setSelectedModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedModal(false)}>
                <X size={20} />
              </button>
              
              <div className="modal-header">
                <span className="modal-kicker">Detalle del Convenio</span>
                <h2>Óptica CosmoVisión</h2>
              </div>

              <div className="modal-body-scroll">
                <div className="detail-block">
                  <h3>Beneficio</h3>
                  <p>
                    Los Socios Cooperadores vigentes de la Tercera Compañía de Bomberos pueden acceder a un 10% de descuento en productos y servicios seleccionados de Óptica CosmoVisión.
                  </p>
                </div>

                <div className="detail-block">
                  <h3>Requisitos</h3>
                  <ul>
                    <li><CheckCircle2 size={16} color="var(--primary-red)" /> Ser Socio Cooperador vigente.</li>
                    <li><CheckCircle2 size={16} color="var(--primary-red)" /> Mantener las cuotas al día.</li>
                    <li><CheckCircle2 size={16} color="var(--primary-red)" /> Presentar la identificación correspondiente al momento de solicitar el beneficio.</li>
                  </ul>
                </div>

                <div className="detail-block">
                  <h3>Condiciones</h3>
                  <p>
                    El beneficio es personal e intransferible. Algunas promociones o servicios específicos podrían no ser acumulables con otros descuentos vigentes del establecimiento.
                  </p>
                </div>
              </div>

              <div className="modal-footer">
                <button onClick={handleEnrollClick} className="btn-primary-full">
                  Quiero ser Socio Cooperador
                </button>
              </div>
            </div>
          </div>
        )}

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
                <p>Selecciona el monto de tu aporte mensual y confirma tu inscripción. Tu contribución permitirán fortalecer el equipamiento, la capacitación y la respuesta operativa de nuestra Compañía.</p>
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

            <div className="faq-list">
              {[
                {
                  q: "¿Qué es un Socio Cooperador?",
                  a: "Es una persona que realiza un aporte económico voluntario y periódico para apoyar el funcionamiento de la Tercera Compañía de Bomberos de San Vicente de Tagua Tagua."
                },
                {
                  q: "¿Cómo puedo inscribirme?",
                  a: "Puedes completar el formulario de inscripción disponible en esta página. Una vez enviada la solicitud, nos pondremos en contacto contigo para finalizar el proceso."
                },
                {
                  q: "¿Cuál es el valor del aporte?",
                  a: "El aporte mensual es voluntario y puede variar según las modalidades disponibles al momento de la inscripción."
                },
                {
                  q: "¿Cómo accedo a los convenios?",
                  a: "Solo debes mantener tu calidad de Socio Cooperador vigente y presentar la identificación correspondiente cuando utilices un beneficio."
                },
                {
                  q: "¿Los convenios cambian?",
                  a: "Sí. Constantemente buscamos incorporar nuevos convenios con empresas y comercios locales para entregar más beneficios a nuestros Socios Cooperadores."
                },
                {
                  q: "¿Puedo dejar de ser Socio Cooperador?",
                  a: "Sí. Puedes solicitar la cancelación de tu aporte en cualquier momento contactándote con nuestra Compañía."
                }
              ].map((faq, index) => (
                <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span>{faq.q}</span>
                    {openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
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

        {/* FOOTER */}
        <footer className="bottom-navbar">
          <div className="bottom-nav-container">
            <nav className="nav-links">
              <a href="#redes-sociales">Redes Sociales</a>
              <a onClick={() => navigateTo('/convenios')} style={{ cursor: 'pointer', color: 'var(--primary-red)' }}>Convenios</a>
            </nav>

            <div className="nav-copy">
              Tercera Compañía de Bomberos • San Vicente de Tagua Tagua
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // RUTA POR DEFECTO: MANTENIMIENTO
  return (
    <div className="maintenance-wrapper">
      <main className="hero-split">
        <div className="hero-left">
          <img 
            src="/logo.png" 
            alt="Tercera Compañía de Bomberos" 
            className="company-logo"
          />
          
          <h1 className="hero-title">En Mantenimiento</h1>
          
          <div className="accent-line"></div>
          
          <p className="hero-desc">
            Estamos trabajando para mejorar nuestra web.
          </p>
        </div>

        <div className="hero-right">
          <img 
            src="/maintenance_photo.jpg" 
            alt="Bomberos San Vicente" 
            className="hero-image"
          />
        </div>
      </main>

      <footer className="bottom-navbar">
        <div className="bottom-nav-container">
          <nav className="nav-links">
            <a href="#redes-sociales">Redes Sociales</a>
            <a onClick={() => navigateTo('/convenios')} style={{ cursor: 'pointer' }}>
              Convenios
            </a>
          </nav>

          <div className="nav-copy">
            Tercera Compañía de Bomberos • San Vicente de Tagua Tagua
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
