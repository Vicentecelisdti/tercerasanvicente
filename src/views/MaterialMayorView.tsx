import React from 'react';
import { ConveniosHeader } from '../components/ConveniosHeader';
import { Footer } from '../components/Footer';
import { ImageCarousel } from '../components/ImageCarousel';

export const MaterialMayorView: React.FC = () => {
  const units = [
    {
      code: "RH-3",
      desc: "Entre nuestra flota, resalta la unidad RH3, un vehículo de Rescate Urbano marca Man año 2022, versátil y con tracción 4x4, que cuenta con una capacidad de 2000 litros de agua. Este vehículo desempeña un papel crucial en una amplia gama de rescates, desde situaciones vehiculares hasta rescates en terrenos agrestes. Además, su equipamiento incluye un dron para labores de búsqueda, lo que amplía significativamente nuestras capacidades operativas y de respuesta ante emergencias.",
      specs: [
        "Chasis Man (Año 2022) con tracción integral 4x4.",
        "Estanque de agua integrado de 2.000 litros.",
        "Equipado para rescate vehicular, agreste, espacios confinados, trabajo de cuerdas, búsqueda y rescate."
      ],
      images: ["/rh3-1.webp", "/rh3-2.webp", "/rh3servicio.webp"]
    },
    {
      code: "B-3",
      desc: "Asimismo, nuestra unidad B3, un vehículo marca Mercedes Benz Atego 1030, con una capacidad de 4000 litros de agua, ejerce un rol fundamental como bomba principal en incendios estructurales, rescates vehiculares e incidentes que involucran materiales peligrosos. Esta unidad es la pieza clave en operaciones que demandan una respuesta inmediata y eficiente, desempeñando un papel vital en la protección de vidas y bienes.",
      specs: [
        "Chasis Mercedes Benz Atego 1030.",
        "Estanque de agua con capacidad de 4.000 litros.",
        "Primera línea de respuesta en incendios estructurales urbanos y rurales.",
        "Soporte primario en incidentes con materiales peligrosos (Hazmat) y labores de seguridad en accidentes vehiculares."
      ],
      images: ["/b3-1.webp", "/b3-2.webp", "/b3-3.webp"]
    },
    {
      code: "BX-3",
      desc: "No podemos pasar por alto nuestra unidad BX3, dedicada a las labores de combate de incendios, tanto estructurales como forestales. Este vehículo complementa nuestras capacidades operativas con su versatilidad y especialización, ofreciendo un respaldo esencial en contextos donde se necesita una unidad de respuesta versátil.",
      specs: [
        "Diseñado para terrenos de difícil acceso e interfaz forestal.",
        "Soporte especializado en incendios de pastizales y otras emergencias.",
        "Equipamiento de herramientas forestales y material de apoyo para el combate de incendios."
      ],
      images: ["/bx-3-1.webp", "/bx-3-2.webp", "/bx.webp"]
    },
    /*
    {
      code: "R-3",
      desc: "Nuestra unidad R3 es una camioneta Toyota Hilux 4x4 equipada para tareas de rescate, acondicionado especialmente para operaciones en terrenos complejos y agrestes, soporte vital primario y respuesta rápida ante emergencias de rescate y salvamento.",
      specs: [
        "Equipada para acceso a zonas agrestes y caminos difíciles.",
        "Equipamiento de inmovilización, trauma y soporte vital primario.",
        "Material táctico para rescate técnico y salvamento agreste."
      ],
      images: ["/bj.jpg", "/brigada.jpg", "/fd-1.jpg"]
    },
    */
    {
      code: "Z-3",
      desc: "Nuestra unidad Z3 es un camión cisterna de gran tonelaje destinado al abastecimiento continuo de agua en grandes incendios forestales, estructurales o en sectores rurales sin red de grifos. Cuenta con una capacidad de 12.000 litros de agua para dar soporte hídrico indispensable en operaciones de largo aliento.",
      specs: [
        "Estanque cisterna con capacidad de 12.000 litros de agua.",
        "Válvula de descarga rápida de gran diámetro para alimentación de piscinas.",
        "Soporte de abastecimiento hídrico principal en incendios de magnitud."
      ],
      images: ["/z3-1.webp", "/z3-2.webp", "/z3-3.webp"]
    }
  ];

  return (
    <div className="maintenance-wrapper nosotros-page">
      {/* CABECERA CON LOGO A LA IZQUIERDA, TÍTULO CENTRADO Y HAMBURGUESA A LA DERECHA */}
      <header className="nosotros-sober-header hero-material">
        <div className="nosotros-header-overlay" />
        <div className="nosotros-header-container hero-three-col-header">
          <a href="/" className="hero-logo-link" title="Ir a Inicio">
            <img src="/logo.webp" alt="Tercera Compañía" className="hero-pc-logo" decoding="async" />
          </a>
          <h1 className="nosotros-main-title">MATERIAL MAYOR</h1>
          <ConveniosHeader activePage="/material-mayor" />
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="nosotros-sober-body">

        {/* SECCIÓN 1: INTRO (FONDO BLANCO) */}
        <section className="nosotros-section section-bg-white" style={{ paddingBottom: '2.5rem' }}>
          <div className="nosotros-section-container text-center-max">
            <div className="editorial-lead-p" style={{ marginBottom: 0 }}>
              El material mayor (Unidades Motorizadas) de nuestra compañía de bomberos es la piedra angular de nuestra labor. Dotados con tecnología avanzada y herramientas especializadas, nuestros vehículos representan la encarnación de nuestra capacidad para enfrentar desafíos con precisión y eficacia.
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: UNIDADES CON DETALLE TIPO BLOG */}
        {units.map((unit, idx) => {
          let bgClass = "section-bg-white";
          if (idx % 2 === 1) {
            bgClass = "history-bg-red";
          } else if (idx === 0) {
            bgClass = "section-bg-gray";
          }
          return (
            <section key={unit.code} className={`nosotros-section ${bgClass}`}>
              <div className="nosotros-section-container">
                <div className="material-blog-section-header">
                  <h2 className="material-unit-title">UNIDAD {unit.code}</h2>
                </div>

                {/* CARRUSEL MOBILE: muestra todas las fotos deslizables */}
                <ImageCarousel images={unit.images} alt={`Unidad ${unit.code}`} className="material-carousel-mobile" />

                <div className="material-blog-grid material-desktop-grid">
                  {/* COLUMNA 1: DESCRIPCIÓN Y FOTO PRINCIPAL */}
                  <div className="material-blog-col-main">
                    <div className="material-blog-img-wrapper main-img">
                      <img src={unit.images[0]} alt={`Unidad ${unit.code} principal`} className="material-img-element" />
                    </div>
                    <div className="material-blog-card-content">
                      <p className="material-blog-desc">{unit.desc}</p>

                      <div className="material-blog-specs-box">
                        <h4 className="specs-box-title">Equipamiento y Capacidades</h4>
                        <ul className="requirements-clean-list">
                          {unit.specs.map((spec, i) => (
                            <li key={i}>{spec}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* COLUMNA 2: DOS FOTOS SECUNDARIAS */}
                  <div className="material-blog-col-side">
                    <div className="material-blog-img-wrapper side-img">
                      <img src={unit.images[1]} alt={`Unidad ${unit.code} detalle 1`} className="material-img-element" />
                    </div>
                    <div className="material-blog-img-wrapper side-img">
                      <img src={unit.images[2]} alt={`Unidad ${unit.code} detalle 2`} className="material-img-element" />
                    </div>
                  </div>
                </div>

                {/* DESCRIPCIÓN MOBILE (debajo del carrusel) */}
                <div className="material-blog-mobile-desc">
                  <p className="material-blog-desc">{unit.desc}</p>
                  <div className="material-blog-specs-box">
                    <h4 className="specs-box-title">Equipamiento y Capacidades</h4>
                    <ul className="requirements-clean-list">
                      {unit.specs.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* SECCIÓN 3: CIERRE (FONDO GRIS O BLANCO SEGÚN ALTERNANCIA) */}
        <section className="nosotros-section section-bg-gray">
          <div className="nosotros-section-container text-center-max" style={{ padding: '2rem 0' }}>
            <p className="editorial-lead-p" style={{ fontStyle: 'italic', color: '#475569', lineHeight: 1.8 }}>
              "Cada componente de nuestro material mayor es el resultado de una minuciosa selección y planificación, asegurando que estemos preparados para enfrentar cualquier situación. Este equipamiento es el reflejo de nuestra dedicación constante hacia la excelencia operativa y nuestro compromiso inquebrantable con la protección y el servicio a nuestra comunidad en todo momento."
            </p>
          </div>
        </section>

      </main>

      <Footer activePage="/material-mayor" />
    </div>
  );
};
