import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  activePage?: string;
}

export const Footer: React.FC<FooterProps> = ({ activePage }) => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.4946118216926!2d-71.0842201244549!3d-34.439590373013495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9664823d911f16bf%3A0xccb3eb48083048ae!2sTercera%20Compa%C3%B1ia%20De%20Bomberos!5e0!3m2!1ses-419!2scl!4v1786108815102!5m2!1ses-419!2scl";

  return (
    <footer className="main-footer">
      {/* RIBBONS ROJO (#E31A1C) Y AZUL (#2D3069) EN LA PARTE SUPERIOR DEL FOOTER */}
      <div className="footer-ribbons-bar">
        <div className="footer-ribbon-red" />
        <div className="footer-ribbon-blue" />
      </div>

      <div className="footer-container">

        {/* INFORMACIÓN PRINCIPAL EN 3 COLUMNAS LIMPIAS */}
        <div className="footer-grid">

          {/* COLUMNA 1: COMPAÑÍA */}
          <div className="footer-col">
            <div className="footer-brand">
              <img src="/logo.webp" alt="Tercera Compañía" className="footer-logo" />
              <div>
                <h3 className="footer-brand-title">TERCERA COMPAÑÍA</h3>
                <p className="footer-brand-sub">San Vicente de Tagua Tagua</p>
                <div className="footer-hazte-socio-container">
                  <a href="/convenios" className="footer-hazte-socio-box">
                    <span className="footer-hazte-socio-title">¡HAZTE SOCIO!</span>
                    <span className="footer-ver-convenios-subtext">Ver convenios</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA 2: CORREOS DE CONTACTO */}
          <div className="footer-col">
            <h4 className="footer-heading">Contacto</h4>
            <div className="footer-emails">
              <a href="mailto:director@tercerasanvicente.cl">
                <Mail size={14} /> director@tercerasanvicente.cl
              </a>
              <a href="mailto:capitan@tercerasanvicente.cl">
                <Mail size={14} /> capitan@tercerasanvicente.cl
              </a>
              <a href="mailto:secretario@tercerasanvicente.cl">
                <Mail size={14} /> secretario@tercerasanvicente.cl
              </a>
            </div>
          </div>

          {/* COLUMNA 3: UBICACIÓN Y MAPA */}
          <div className="footer-col">
            <h4 className="footer-heading">Ubicación</h4>
            <p className="footer-address">
              <MapPin size={14} color="#E31A1C" />
              Horacio Aránguiz 1205, San Vicente
            </p>
            <div className="footer-map-container">
              <iframe
                title="Mapa Cuartel"
                src={mapEmbedUrl}
                width="100%"
                height="120"
                style={{ border: 0, borderRadius: '6px' }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

        </div>

        {/* LÍNEA INFERIOR CON DECORACIÓN DE RIBBON ACCENTS */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Tercera Compañía de Bomberos San Vicente de Tagua Tagua.</p>
        </div>

      </div>
    </footer>
  );
};
