import React, { useState } from 'react';
import { ShieldCheck, UserPlus, FileCheck, Award, Mail, Phone, Clock, MapPin, Send } from 'lucide-react';
import { ConveniosHeader } from '../components/ConveniosHeader';
import { Footer } from '../components/Footer';

export const AdmisionView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    rut: '',
    edad: '',
    telefono: '',
    email: '',
    ocupacion: '',
    mensaje: '',
    _honey: '' // Campo honeypot oculto para protección contra bots
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Si el campo honeypot está completo, es un bot.
    // Simulamos éxito de envío sin procesar la petición real.
    if (formData._honey) {
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
      }, 500);
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/informatica@tercerasanvicente.cl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Nombre: formData.nombre,
          RUT: formData.rut,
          Edad: formData.edad,
          Telefono: formData.telefono,
          Email: formData.email,
          Ocupacion: formData.ocupacion,
          Motivacion: formData.mensaje,
          _subject: `Nueva Postulación de ${formData.nombre} - 3ª Compañía`,
          _honey: formData._honey // FormSubmit también ignorará la petición si se envía
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error();
      }
    } catch (err) {
      setError("Hubo un problema al enviar tu postulación. Por favor intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="maintenance-wrapper nosotros-page">

      {/* CABECERA CON LOGO A LA IZQUIERDA, TÍTULO CENTRADO Y HAMBURGUESA A LA DERECHA */}
      <header className="nosotros-sober-header hero-admision">
        <div className="nosotros-header-overlay" />
        <div className="nosotros-header-container hero-three-col-header">
          <a href="/" className="hero-logo-link" title="Ir a Inicio">
            <img src="/logo.webp" alt="Tercera Compañía" className="hero-pc-logo" decoding="async" />
          </a>
          <h1 className="nosotros-main-title">SER BOMBERO</h1>
          <ConveniosHeader activePage="/admision" />
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="nosotros-sober-body">

        {/* SECCIÓN 1: REQUISITOS DE ADMISIÓN (FONDO BLANCO) */}
        <section className="nosotros-section section-bg-white">
          <div className="nosotros-section-container">
            <h2 className="nosotros-section-title admision-main-title">ADMISION Y POSTULACIÓN</h2>
            <div className="editorial-lead-p text-center-max" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
              Formar parte de la <strong>Tercera Compañía de Bomberos de San Vicente de Tagua Tagua</strong> requiere vocación de servicio, disciplina y compromiso con la comunidad. Te invitamos a integrarte a nuestra labor de respuesta.
            </div>

            <div className="requisitos-sequential-layout">
              {/* Imagen 1: Aspirantes en instrucción */}
              <div className="material-blog-img-wrapper sequential-img">
                <img src="/aspirantes.webp" alt="Aspirantes en Instrucción" className="material-img-element" />
                <div className="sequential-img-caption">
                  Aspirantes en Instrucción
                </div>
              </div>

              {/* Contenido: Requisitos de Postulación */}
              <div className="sequential-requirements-card">
                <h3 className="sub-heading-editorial" style={{ marginTop: 0 }}>Requisitos Postulación</h3>
                <ul className="requirements-clean-list">
                  <li><strong>Edad:</strong> Tener 18 años cumplidos o estar pronto a cumplirlos.</li>
                  <li><strong>Antecedentes:</strong> Certificado de antecedentes.</li>
                  <li><strong>Salud:</strong> Salud compatible con la exigencia física del servicio activo de bomberos.</li>
                  <li><strong>Compromiso:</strong> Disponibilidad para asistir a capacitaciones, academias y citaciones cuando se soliciten.</li>
                  <li><strong>Disponibilidad:</strong> Frente a cualquier otro requisito que sea solicitado.</li>
                </ul>
              </div>

              {/* Imagen 2: Capacitación y entrenamiento */}
              <div className="material-blog-img-wrapper sequential-img">
                <img src="/capacitacion.webp" alt="Capacitación y Entrenamiento" className="material-img-element" />
                <div className="sequential-img-caption">
                  Capacitación y Entrenamiento
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: PROCESO DE INCORPORACIÓN (FONDO GRIS CLARO) */}
        <section className="nosotros-section section-bg-gray">
          <div className="nosotros-section-container">
            <h2 className="nosotros-section-title process-title-uppercase">PROCESO DE INGRESO</h2>

            <div className="process-steps-grid">
              <div className="process-step-card">
                <span className="step-num">01</span>
                <h4>Postúlate</h4>
                <p>Completa el formulario de postulación y entrega tus antecedentes para iniciar el proceso de incorporación a la Compañía.</p>
              </div>

              <div className="process-step-card">
                <span className="step-num">02</span>
                <h4>Entrevista</h4>
                <p>Nos pondremos en contacto contigo para conocer tus motivaciones, resolver tus dudas y conversar sobre el compromiso que implica ser Bombero.</p>
              </div>

              <div className="process-step-card">
                <span className="step-num">03</span>
                <h4>Ingresa como Aspirante</h4>
                <p>Una vez aceptada tu postulación, comenzarás tu etapa como Aspirante a Bombero, participando en las actividades y formación de la Compañía.</p>
              </div>

              <div className="process-step-card">
                <span className="step-num">04</span>
                <h4>Fórmate y avanza</h4>
                <p>Durante tu período de formación adquirirás los conocimientos y competencias necesarias para desempeñarte de manera segura y responsable en emergencias.</p>
              </div>

              <div className="process-step-card">
                <span className="step-num">05</span>
                <h4>Sé Bombero</h4>
                <p>Al completar las etapas y requisitos establecidos por la institución, podrás avanzar en tu incorporación como Bombero, previa aprobación de la compañía.</p>
              </div>
            </div>

            <p className="process-footer-text">
              Un camino de formación, compromiso y servicio que comienza con una decisión.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3: FORMULARIO DE POSTULACIÓN (FONDO BLANCO) */}
        <section className="nosotros-section section-bg-white">
          <div className="nosotros-section-container">
            <div className="editorial-grid">
              <div className="editorial-main">
                <h2 className="nosotros-section-title">FORMULARIO DE INGRESO</h2>
                <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  Ingresa tus datos a continuación y nos pondremos en contacto contigo para citarte a una reunión informativa.
                </p>

                {submitted ? (
                  <div className="form-success-box">
                    <FileCheck size={36} color="#15803d" />
                    <h3>¡Postulación Recibida!</h3>
                    <p>Gracias por tu interés en integrar la 3ª Compañía. Nos pondremos en contacto contigo a la brevedad.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="sober-form">
                    <div className="form-row-2">
                      <div className="form-group">
                        <label>Nombre Completo *</label>
                        <input
                          type="text"
                          required
                          placeholder="Ej: Juan Pérez Morales"
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>RUT *</label>
                        <input
                          type="text"
                          required
                          placeholder="Ej: 12.345.678-9"
                          value={formData.rut}
                          onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-row-3">
                      <div className="form-group">
                        <label>Edad *</label>
                        <input
                          type="number"
                          required
                          placeholder="Ej: 24"
                          value={formData.edad}
                          onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>Teléfono *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+56 9 1234 5678"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>Correo Electrónico *</label>
                        <input
                          type="email"
                          required
                          placeholder="correo@ejemplo.cl"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Ocupación / Profesión *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Estudiante / Técnico Mecánico"
                        value={formData.ocupacion}
                        onChange={(e) => setFormData({ ...formData, ocupacion: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Motivación para ingresar a la 3ª Compañía</label>
                      <textarea
                        rows={4}
                        placeholder="Cuéntanos brevemente por qué deseas ser voluntario..."
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      />
                    </div>

                    {/* Honeypot field for bot protection */}
                    <input
                      type="text"
                      name="_honey"
                      style={{ display: 'none' }}
                      value={formData._honey}
                      onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
                      autoComplete="off"
                    />

                    {error && (
                      <div style={{ color: '#e11d48', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 500 }}>
                        {error}
                      </div>
                    )}

                    <button type="submit" className="sober-btn-submit" disabled={isSubmitting}>
                      <Send size={16} /> {isSubmitting ? "Enviando..." : "Enviar Postulación"}
                    </button>
                  </form>
                )}
              </div>

              <aside className="editorial-sidebar">
                <div className="material-blog-img-wrapper">
                  <img src="/cia_2.webp" alt="Tercera Compañía" className="material-img-element" />
                  <div style={{ padding: '0.75rem', fontSize: '0.85rem', fontWeight: 600, color: '#475569', textAlign: 'center', backgroundColor: '#f8fafc' }}>
                    Tercera Compañía de Bomberos
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

      </main>

      <Footer activePage="/admision" />
    </div>
  );
};
