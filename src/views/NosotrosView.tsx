import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ConveniosHeader } from '../components/ConveniosHeader';
import { Footer } from '../components/Footer';


// Custom SVG Icons with white fill (#ffffff)
const SvgRescateAgreste: React.FC<{ size?: number }> = ({ size = 28 }) => (
  <svg fill="#ffffff" height={`${size}px`} width={`${size}px`} viewBox="0 0 458.326 458.326" xmlSpace="preserve">
    <g>
      <path d="M370.263,14.919c-45.292,0-82.701,34.37-87.53,78.397C253.507,69.904,217.373,56.48,179.68,55.259 c-41.732-1.353-82.504,12.287-114.833,38.393c-4.76,3.825-9.431,8.022-13.884,12.475C20.397,136.692,2.376,177.283,0.219,220.421 c-2.141,42.827,11.454,84.706,38.279,117.92c3.894,4.821,8.088,9.485,12.464,13.861c4.686,4.685,9.66,9.127,14.781,13.198 c30.57,24.352,69.016,37.763,108.257,37.763c39.241,0,77.687-13.411,108.253-37.76c5.126-4.075,10.1-8.517,14.784-13.202 c0.88-0.88,1.752-1.773,2.616-2.675c9.723,27.762,23.416,54.184,40.894,78.605c6.946,9.707,17.777,15.273,29.714,15.273 s22.768-5.567,29.714-15.273c38.173-53.336,58.35-116.198,58.35-181.789V102.983C458.326,54.425,418.821,14.919,370.263,14.919z M174.005,317.593c-23.62,0-45.827-9.198-62.529-25.9s-25.9-38.909-25.9-62.529c0-23.621,9.198-45.827,25.9-62.529 s38.909-25.9,62.529-25.9c23.621,0,45.827,9.198,62.53,25.9c16.702,16.702,25.9,38.909,25.9,62.529 c0,23.62-9.198,45.827-25.9,62.529C219.833,308.394,197.626,317.593,174.005,317.593z M282.199,108.597v30.92l-28.51,28.501 c-2.654-3.445-5.544-6.743-8.67-9.869c-2.855-2.855-5.854-5.513-8.976-7.975l43.72-43.72 C280.582,107.16,281.394,107.873,282.199,108.597z M274.436,229.163c0-18.238-4.834-35.732-13.887-51.025l21.65-21.65v89.857 c0,21.567,2.196,42.834,6.481,63.57l-28.727-28.733C269.39,265.654,274.436,247.797,274.436,229.163z M179.292,67.253 c33.017,1.069,64.75,12.192,91.047,31.656l-44.31,44.31c-15.529-9.438-33.387-14.485-52.024-14.485 c-18.636,0-36.494,5.046-52.023,14.484L77.671,98.906C106.87,77.272,142.691,66.062,179.292,67.253z M59.448,114.612 c2.849-2.849,5.796-5.573,8.796-8.161l43.723,43.723c-3.122,2.462-6.121,5.12-8.976,7.975c-3.126,3.126-6.016,6.426-8.671,9.871 l-43.759-43.76C53.385,120.941,56.342,117.717,59.448,114.612z M12.205,221.02c1.585-31.714,12.388-61.944,30.873-87.273 l44.387,44.387c-9.054,15.295-13.888,32.789-13.888,51.029c0,18.636,5.046,36.494,14.484,52.023l-44.318,44.318 C21.493,295.491,10.323,258.654,12.205,221.02z M51.292,334.925l43.724-43.724c2.462,3.122,5.12,6.121,7.975,8.976 c3.126,3.126,6.426,6.016,9.871,8.671l-43.763,43.763c-3.319-2.825-6.554-5.798-9.65-8.894 C56.634,340.903,53.909,337.955,51.292,334.925z M78.581,360.1l44.396-44.396c15.295,9.054,32.789,13.888,51.029,13.888 c18.24,0,35.735-4.834,51.029-13.888l44.393,44.393c-27.524,20.078-61.147,31.067-95.426,31.067 C139.726,391.164,106.106,380.178,78.581,360.1z M288.555,343.718c-3.094,3.094-6.327,6.065-9.646,8.89l-43.759-43.76 c3.445-2.655,6.744-5.544,9.87-8.671c2.856-2.856,5.516-5.857,7.979-8.981l41.22,41.229c0.385,1.344,0.769,2.687,1.171,4.025 C293.189,338.938,290.899,341.373,288.555,343.718z M446.326,246.345c0,63.071-19.401,123.517-56.107,174.804c0,0,0,0,0,0 c-4.666,6.519-11.939,10.257-19.956,10.257s-15.29-3.739-19.956-10.257c-36.706-51.289-56.107-111.735-56.107-174.805V102.983 c0-41.942,34.122-76.064,76.063-76.064s76.063,34.122,76.063,76.064V246.345z"></path>
      <path d="M370.263,37.945c-19.936,0-38.47,7.847-52.188,22.096c-6.28,6.524-7.976,15.763-4.424,24.112 c3.566,8.381,11.432,13.588,20.528,13.588h72.166c9.097,0,16.963-5.207,20.529-13.589c3.551-8.349,1.855-17.587-4.425-24.111 C408.733,45.792,390.199,37.945,370.263,37.945z M415.832,79.455c-1.675,3.937-5.221,6.287-9.486,6.287H334.18 c-4.266,0-7.812-2.35-9.485-6.286c-1.661-3.902-0.903-8.049,2.025-11.091c11.436-11.878,26.899-18.419,43.543-18.419 c16.645,0,32.108,6.541,43.543,18.418C416.734,71.406,417.492,75.553,415.832,79.455z"></path>
      <path d="M322.166,159.936h-2.732c-9.374,0-17,7.626-17,17v88.167c0,9.374,7.626,17,17,17h2.732c9.373,0,16.999-7.626,16.999-17 v-88.167C339.165,167.562,331.539,159.936,322.166,159.936z M327.165,265.104c0,2.757-2.242,5-4.999,5h-2.732c-2.757,0-5-2.243-5-5 v-88.167c0-2.757,2.243-5,5-5h2.732c2.757,0,4.999,2.243,4.999,5V265.104z"></path>
      <path d="M418.36,159.936c-9.374,0-17,7.626-17,17v88.167c0,9.374,7.626,17,17,17h2.731c9.374,0,17-7.626,17-17v-88.167 c0-9.374-7.626-17-17-17H418.36z M426.092,176.936v88.167c0,2.757-2.243,5-5,5h-2.731c-2.757,0-5-2.243-5-5v-88.167 c0-2.757,2.243-5,5-5h2.731C423.849,171.936,426.092,174.179,426.092,176.936z"></path>
      <path d="M370.263,388.871c-9.515,0-17.256,7.741-17.256,17.256s7.741,17.256,17.256,17.256c9.516,0,17.257-7.741,17.257-17.256 S379.778,388.871,370.263,388.871z M370.263,411.384c-2.898,0-5.256-2.358-5.256-5.256s2.357-5.256,5.256-5.256 s5.257,2.358,5.257,5.256S373.161,411.384,370.263,411.384z"></path>
    </g>
  </svg>
);

const SvgAguaAbastecimiento: React.FC<{ size?: number }> = ({ size = 28 }) => (
  <svg fill="#ffffff" height={`${size}px`} width={`${size}px`} viewBox="0 0 512 512" xmlSpace="preserve">
    <g>
      <g>
        <path d="M256,196.676c-37.426,0-67.875,30.448-67.875,67.875s30.448,67.875,67.875,67.875s67.875-30.448,67.875-67.875 S293.426,196.676,256,196.676z M256,316.393c-28.585,0-51.841-23.256-51.841-51.841S227.415,212.71,256,212.71 s51.841,23.256,51.841,51.841S284.585,316.393,256,316.393z"></path>
      </g>
    </g>
    <g>
      <g>
        <path d="M289.172,258.76c-0.757-4.363-4.904-7.284-9.271-6.527c-4.362,0.758-7.283,4.908-6.526,9.271 c0.173,0.997,0.261,2.022,0.261,3.047c0,9.725-7.912,17.637-17.637,17.637c-9.725,0-17.637-7.912-17.637-17.637 s7.912-17.637,17.637-17.637c0.99,0,1.982,0.082,2.951,0.245c4.371,0.734,8.499-2.217,9.23-6.583 c0.731-4.366-2.216-8.499-6.583-9.23c-1.841-0.309-3.724-0.465-5.598-0.465c-18.566,0-33.67,15.104-33.67,33.67 s15.105,33.67,33.67,33.67s33.67-15.105,33.67-33.67C289.67,262.609,289.502,260.66,289.172,258.76z"></path>
      </g>
    </g>
    <g>
      <g>
        <path d="M409.921,230.881h-17.637v-4.284c0-11.547-7.824-21.568-19.027-24.369l-15.177-3.795v-19.928h9.086 c9.136,0,16.568-7.432,16.568-16.568v-17.102c0-9.136-7.432-16.568-16.568-16.568h-9.4c-3.439-44.055-34.969-80.347-76.646-90.932 V16.568C281.119,7.432,273.687,0,264.551,0h-17.102c-9.136,0-16.568,7.432-16.568,16.568v20.768 c-41.677,10.585-73.207,46.876-76.646,90.932h-9.4c-9.136,0-16.568,7.432-16.568,16.568v17.102 c0,9.136,7.432,16.568,16.568,16.568h9.086v19.928l-15.177,3.795c-11.203,2.8-19.027,12.821-19.027,24.369v4.284h-17.637 c-9.136,0-16.568,7.432-16.568,16.568v34.205c0,9.136,7.432,16.568,16.568,16.568h17.637v4.284 c0,11.547,7.824,21.568,19.027,24.369l15.177,3.795v131.093h-34.739c-9.136,0-16.568,7.432-16.568,16.568v17.102 c0,9.136,7.432,16.568,16.568,16.568h273.637c9.136,0,16.568-7.432,16.568-16.568V478.33c0-9.136-7.432-16.568-16.568-16.568 h-34.739V330.669l15.177-3.795c11.203-2.801,19.027-12.821,19.027-24.369v-4.284h17.637c9.136,0,16.568-7.432,16.568-16.568 v-34.205C426.489,238.313,419.057,230.881,409.921,230.881z M119.716,282.188h-17.637c-0.295,0-0.534-0.239-0.534-0.534v-34.205 c0-0.295,0.239-0.534,0.534-0.534h17.637V282.188z M246.914,16.568c0-0.295,0.239-0.534,0.534-0.534h17.102 c0.295,0,0.534,0.239,0.534,0.534v18.046c-2.994-0.265-6.023-0.409-9.086-0.409c-3.062,0-6.092,0.143-9.086,0.409V16.568z M142.631,311.32c-4.052-1.013-6.882-4.638-6.882-8.814v-75.909c0-4.176,2.829-7.801,6.882-8.814l11.29-2.822v99.182 L142.631,311.32z M392.818,477.795c0.295,0,0.534,0.239,0.534,0.534v17.102c0,0.295-0.239,0.534-0.534,0.534H119.182 c-0.295,0-0.534-0.239-0.534-0.534V478.33c0-0.295,0.239-0.534,0.534-0.534h162.472c4.427,0,8.017-3.589,8.017-8.017 c0-4.427-3.589-8.017-8.017-8.017H169.954V178.505h172.092v283.257h-26.19c-4.427,0-8.017,3.589-8.017,8.017 c0,4.427,3.589,8.017,8.017,8.017H392.818z M144.835,162.472c-0.295,0-0.534-0.239-0.534-0.534v-17.102 c0-0.295,0.239-0.534,0.534-0.534H281.65c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H170.341 c4.059-43.7,40.918-78.029,85.659-78.029s81.602,34.33,85.659,78.029H315.86c-4.427,0-8.017,3.589-8.017,8.017 s3.589,8.017,8.017,8.017h51.305c0.295,0,0.534,0.239,0.534,0.534v17.102c0,0.295-0.239,0.534-0.534,0.534H144.835z M376.251,302.505c0,4.176-2.829,7.801-6.882,8.814l-11.29,2.822V214.96l11.29,2.822c4.052,1.013,6.882,4.638,6.882,8.814V302.505 z M410.455,281.653c0,0.295-0.239,0.534-0.534,0.534h-17.637v-35.273h17.637c0.295,0,0.534,0.239,0.534,0.534V281.653z"></path>
      </g>
    </g>
  </svg>
);

const SvgRescateVehicular: React.FC<{ size?: number }> = ({ size = 28 }) => (
  <svg fill="#ffffff" height={`${size}px`} width={`${size}px`} viewBox="0 0 488.074 488.074" xmlSpace="preserve">
    <g transform="translate(0 -540.36)">
      <g>
        <g>
          <path d="M365.774,863.067c-22.1,0-40.1,18.3-40.1,40.8c0,23.3,17.6,41.6,40.1,41.6s40.9-18.7,40.9-41.6 C406.674,881.367,388.374,863.067,365.774,863.067z M365.774,925.467c-11.3,0-20.1-9.5-20.1-21.6c0-11.5,9-20.8,20.1-20.8 c11.3,0,20.9,9.5,20.9,20.8C386.674,915.767,377.274,925.467,365.774,925.467z"></path>
          <path d="M477.274,904.667h-50.5c-5.5,0-10,4.5-10,10s4.5,10,10,10h50.5c5.5,0,10-4.5,10-10S482.774,904.667,477.274,904.667z"></path>
          <path d="M478.074,738.167L478.074,738.167c-0.1,0-0.2,0-0.3,0c-2.2-0.1-4.4,0.5-6.3,1.9l-99.2,71.5c-0.4,0.2-0.8,0.4-1.2,0.6 l-99.2,20.3c-3.8,0.8-6.8,3.7-7.7,7.5l-9.8,41.6c-0.4,1.8-0.3,3.6,0.2,5.3l9.8,30.8c1.3,4.2,5.2,7,9.5,7h30.9c5.5,0,10-4.5,10-10 s-4.5-10-10-10h-23.7l-6.7-21.2l7.7-32.7l95.5-19.5c0.7-0.1,1.3-0.3,1.9-0.6l97.7,0.8h0.1c3,0,5.7-1.3,7.6-3.5 c2-1.8,3.2-4.4,3.2-7.4v-72.4C488.074,742.667,483.574,738.167,478.074,738.167z M468.074,811.367l-60.8-0.5l60.8-43.8V811.367z"></path>
          <path d="M106.074,873.067c-19.4,0-35.2,16.4-35.2,36.6c0,19.7,15.8,35.8,35.2,35.8c19.9,0,36.1-16,36-35.8 C142.074,889.167,126.274,873.067,106.074,873.067z M106.074,925.467c-8.2,0-15.2-7.2-15.2-15.8c0-9.3,6.7-16.6,15.2-16.6 c9.2,0,16.1,7.1,16,16.6C122.074,918.567,115.074,925.467,106.074,925.467z"></path>
          <path d="M49.974,904.667h-39.9c-5.5,0-10,4.5-10,10s4.5,10,10,10h39.9c5.5,0,10-4.5,10-10S55.474,904.667,49.974,904.667z"></path>
          <path d="M216.074,863.467l-113.9-30.6l-87.9-41.3c-5-2.4-11-0.2-13.3,4.8c-2.4,5-0.2,11,4.8,13.3l88.7,41.6 c0.6,0.2,1.1,0.4,1.7,0.6l107.4,28.8v24h-42.9c-5.5,0-10,4.5-10,10s4.5,10,10,10h52.9v0c5.5,0,10-4.5,9.9-9.9v-41.6 C223.474,868.567,220.474,864.667,216.074,863.467z"></path>
          <path d="M261.374,723.467l23.5-24.1v28.3c0,3.6,1.9,6.9,5,8.7c3.1,1.7,6.9,1.7,10-0.1l36.7-21.6l-29.9,49.4 c-2.8,4.7-1.3,10.8,3.4,13.7c4.7,2.8,10.8,1.3,13.7-3.4l50.5-83.3c2.4-3.9,1.8-8.9-1.4-12.2s-8.3-3.9-12.2-1.6l-55.7,32.8v-35 c0-4.1-2.4-7.8-6.2-9.3c-3.7-1.5-8.1-0.6-10.9,2.3l-29.7,30.3l-25.4-68.5c-1.6-4.3-5.8-6.9-10.3-6.5c-4.4,0.4-8.1,3.8-8.9,8.2 l-18,101.5l-49-25.4c-3.9-2-8.7-1.3-11.8,1.9c-3.1,3.1-3.7,7.9-1.6,11.8l40.7,73.3c1.9,3.2,5.3,5.1,8.8,5.1l0,0 c1.6,0,3.3-0.4,4.9-1.3c4.8-2.7,6.6-8.8,3.9-13.6l-24.6-44.3l31.6,16.4c2.8,1.5,6.1,1.5,9,0.1c2.8-1.4,4.8-4.1,5.4-7.2l13.9-78.7 l18.1,48.8c1.2,3.2,3.9,5.6,7.3,6.3C255.474,726.967,258.974,725.867,261.374,723.467z"></path>
        </g>
      </g>
    </g>
  </svg>
);

export interface SpecialtyItem {
  id: string;
  title: string;
  desc: string;
  icon: React.FC<{ size?: number }>;
  image: string;
  fullText: string[];
}

export const NosotrosView: React.FC = () => {

  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyItem | null>(null);
  const [actaExpanded, setActaExpanded] = useState(false);

  React.useEffect(() => {
    if (selectedSpecialty) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedSpecialty]);

  const specialtiesData: SpecialtyItem[] = [
    {
      id: 'agreste',
      title: 'Rescate Agreste',
      desc: 'Búsqueda, localización, acceso, estabilización y evacuación de personas en cerros, quebradas y terrenos de difícil acceso.',
      icon: SvgRescateAgreste,
      image: '/agreste.webp',
      fullText: [
        'El <strong>rescate agreste</strong> comprende las operaciones de <strong>búsqueda, localización, acceso, estabilización y evacuación</strong> de personas que se encuentran en cerros, quebradas, sectores rurales y otros terrenos donde las condiciones geográficas dificultan el acceso de los equipos de emergencia.',
        'Estas situaciones pueden involucrar personas <strong>extraviadas, caídas desde altura, accidentes en sectores rurales</strong> o lesionadas que requieren evacuación. Cada procedimiento requiere <strong>evaluar previamente las condiciones del terreno</strong>, establecer una <strong>ruta segura de aproximación</strong> y determinar las técnicas y recursos necesarios para realizar el rescate.',
        'Las labores pueden contemplar la aproximación hasta el lugar, búsqueda y localización, evaluación de la persona afectada, inmovilización, descenso o ascenso y posterior evacuación hacia un punto seguro. Todo el procedimiento se desarrolla procurando resguardar tanto la <strong>integridad del paciente</strong> como la <strong>seguridad de los equipos</strong> que participan en la operación.'
      ]
    },
    {
      id: 'incendios',
      title: 'Combate de Incendios y Abastecimiento',
      desc: 'Control y extinción de incendios estructurales, interfaz y vegetación, sosteniendo el abastecimiento hídrico constante.',
      icon: SvgAguaAbastecimiento,
      image: '/incendio.webp',
      fullText: [
        'Las labores de <strong>combate de incendios</strong> comprenden el conjunto de acciones destinadas a <strong>controlar y extinguir incendios</strong>, evitando su propagación y reduciendo los riesgos para las personas, los bienes y el entorno.',
        'Dependiendo de las características de la emergencia, nuestros Bomberos pueden desarrollar labores de <strong>ataque y control del fuego, protección de sectores expuestos, búsqueda y rescate, ventilación, remoción de material y control de puntos calientes</strong>, entre otras acciones necesarias para alcanzar la extinción completa de la emergencia.',
        'Nuestra respuesta cuenta con distintas unidades que cumplen funciones complementarias. La <strong>unidad B-3</strong> corresponde a nuestra <strong>bomba principal</strong>, destinada principalmente al combate de incendios estructurales y preparada para entregar una <strong>respuesta inicial frente a emergencias</strong> que afectan viviendas, edificaciones y otras estructuras.',
        'Como unidad de apoyo, la <strong>unidad BX-3</strong> cumple funciones de <strong>bomba de apoyo y respuesta forestal</strong>, permitiendo reforzar las labores de extinción y participar en emergencias que afectan <strong>vegetación, terrenos rurales y sectores forestales</strong>. Además, puede complementar las operaciones de abastecimiento y apoyo a las unidades que trabajan directamente en el incendio.',
        'Por su parte, la <strong>unidad Z-3</strong> corresponde a nuestra <strong>unidad de abastecimiento</strong>, cuya función principal es <strong>apoyar el suministro de agua</strong> durante las emergencias, especialmente cuando la disponibilidad de fuentes de agua cercanas no permite mantener de manera continua el trabajo de las unidades de primera respuesta.',
        'La coordinación entre la <strong>unidad B-3, la unidad BX-3 y la unidad Z-3</strong> permite establecer una <strong>respuesta integral</strong>, donde cada carro cumple una función determinada dentro de la emergencia. De esta manera, la Compañía puede <strong>mantener las labores de extinción</strong> y asegurar la <strong>continuidad del abastecimiento de agua</strong> cuando las características del incendio así lo requieren.'
      ]
    },
    {
      id: 'vehicular',
      title: 'Rescate Vehicular',
      desc: 'Operaciones técnicas en accidentes de tránsito con personas atrapadas, estabilización y extricación con herramientas especializadas.',
      icon: SvgRescateVehicular,
      image: '/vehicular.webp',
      fullText: [
        'El <strong>rescate vehicular</strong> corresponde a las operaciones realizadas en accidentes de tránsito donde existen personas <strong>lesionadas, atrapadas o que requieren asistencia especializada</strong> para salir de un vehículo de manera segura.',
        'Estas emergencias requieren una <strong>intervención técnica y coordinada</strong> debido a los distintos riesgos presentes en una colisión. El procedimiento comienza con el <strong>aseguramiento y evaluación de la escena</strong>, identificando los peligros existentes y estableciendo una estrategia de trabajo que permita intervenir de forma segura.',
        'Entre las principales labores se encuentra la <strong>estabilización de los vehículos</strong> involucrados, <strong>control de riesgos, generación de accesos, protección y manejo inicial del paciente</strong> y, cuando es necesario, la <strong>extricación mediante herramientas especializadas</strong>.'
      ]
    }
  ];

  const fundadores = [
    "Samuel Correa Quesney",
    "Germán Segura Brand",
    "Rogelio Mena Toledo",
    "Fernando Villavicencio Larragaña",
    "Carlos Olea",
    "Joaquín García Valiente",
    "Francisco Vargas Goas",
    "Carlos Poblete",
    "Archivaldo Vasquez",
    "Carlos Valdivia Gomes",
    "Manuel Chacof Zuñiga",
    "Ramon Toro Ortiz",
    "Alexis Hernandez Vasquez",
    "Roberto Marambio Navarro",
    "Horacio Lagos Lambert",
    "Miguel Miranda Bustos",
    "Luis Vargas Solis",
    "José Galaz Peña",
    "Ismael Díaz Barahona",
    "Manuel Miranda Acuña",
    "Orlando Galaz P."
  ];

  const capitanes = [
    { period: "1959 - 1960", name: "Horacio Lagos Lambert" },
    { period: "1961 - 1969", name: "Carlos Olea" },
    { period: "1970", name: "Orlando Galaz" },
    { period: "1971", name: "Carlos Olea" },
    { period: "1972", name: "Orlando Galaz" },
    { period: "1973", name: "Daniel Carrasco" },
    { period: "1974", name: "Carlos Valdivia / Luis Díaz Pavez" },
    { period: "1975 - 1977", name: "Carlos Horta" },
    { period: "1978", name: "Nelson Garrido" },
    { period: "1979", name: "Carlos Horta" },
    { period: "1980", name: "Carlos Olea" },
    { period: "1981", name: "Carlos Horta" },
    { period: "1982 - 1984", name: "Alejandro Quintanilla" },
    { period: "1985", name: "Carlos Horta" },
    { period: "1986", name: "Manuel Miranda" },
    { period: "1987", name: "Luis Jorquera" },
    { period: "1988", name: "Carlos Olea" },
    { period: "1989", name: "Jose Horta" },
    { period: "1990", name: "Carlos Valdivia" },
    { period: "1991 - 2000", name: "Carlos Horta" },
    { period: "2001 - 2004", name: "Patricio Piña" },
    { period: "2005 - 2006", name: "Alejandro Quintanilla" },
    { period: "2006 - 2007", name: "Patricio Piña" },
    { period: "2008", name: "Alejandro Q. / Carlos H." },
    { period: "2009", name: "José Elias H. / Ricardo M." },
    { period: "2010", name: "Marcelo Piña" },
    { period: "2011", name: "Marcelo Piña / Orlando Galaz" },
    { period: "2012 - 2014", name: "Jose Elias Horta" },
    { period: "2015", name: "Pablo Affandy" },
    { period: "2016 - 2017", name: "Braulio Lopez" },
    { period: "2018 - 2019", name: "José Elias H." },
    { period: "2020", name: "Dante Ahumada" },
    { period: "2021 - 2022", name: "Alejandro Quintanilla J." },
    { period: "2023 - 2024", name: "Roberto Nuñez P." },
    { period: "2025 - 2026", name: "José Elías Horta" }
  ];

  return (
    <div className="maintenance-wrapper nosotros-page">

      <header className="nosotros-sober-header hero-nosotros">
        <div className="nosotros-header-overlay" />
        <div className="nosotros-header-container hero-three-col-header">
          <a href="/" className="hero-logo-link" title="Ir a Inicio">
            <img src="/logo.webp" alt="Tercera Compañía" className="hero-pc-logo" decoding="async" />
          </a>
          <h1 className="nosotros-main-title">NOSOTROS</h1>
          <ConveniosHeader activePage="/nosotros" />
        </div>
      </header>

      <main className="nosotros-history-body">

        <section className="history-section history-bg-white">
          <div className="history-container history-split-grid">

            <div className="history-stacked-title-box">
              <div className="gradient-1959-digits">
                <span>1</span>
                <span>9</span>
                <span>5</span>
                <span>9</span>
              </div>
              <h2 className="tercera-compania-blue-title">
                <span>TERCERA</span>
                <img src="/logo.webp" alt="Logo" className="history-title-logo-inline" />
                <span>COMPAÑÍA</span>
              </h2>

              <div className="history-title-image-container">
                <img src="/cia_1.webp" alt="Tercera Compañía en 1959" className="history-title-image" />
              </div>
            </div>

            <div className="history-editorial-content">
              <h3 className="history-blue-heading">QUIÉNES SOMOS</h3>
              <p className="history-lead-p">
                Somos la <strong>Tercera Compañía de Bomberos de San Vicente de Tagua Tagua</strong>, una institución voluntaria con más de <strong>67 años de historia ininterrumpida</strong>. Nuestro fin es resguardar a la <strong>vida y bienes</strong> de nuestra comunidad mediante un servicio <strong>profesional y altamente capacitado</strong>.
              </p>
              <p className="history-body-p">
                Fundada un 22 de abril de 1959, nuestra compañía ha evolucionado continuamente en sus capacidades tácticas, infraestructura y parque automotor, consolidándonos como un pilar central en la respuesta de emergencias en la Comuna y en la Región del O'Higgins.
              </p>

              <h3 className="history-blue-heading">NUESTRA LABOR OPERATIVA</h3>
              <p className="history-body-p">
                Mantenemos personal voluntario listo las 24 horas del día, los 365 días del año disponibles para responder a emergencias. Nuestra especialidad abarca el <strong>Rescate Vehicular, Rescate Agreste</strong> y el <strong>Combate de Incendios</strong>, contando con cinco unidades altamente preparadas y equipadas para desplegarse de manera inmediata.
              </p>
            </div>

          </div>
        </section>

        <section className="history-red-impact-banner">
          <div className="red-banner-overlay" />
          <div className="history-container red-banner-content">
            <span className="red-banner-kicker">¿Sueñas con ser bombero? </span>
            <h2 className="red-banner-title">¡ÚNETE A NUESTRA COMPAÑÍA!</h2>
            <p className="red-banner-desc">
              Somos un equipo humano voluntario, compuesto por hombres y mujeres comprometidos con la seguridad y el resguardo de San Vicente.
            </p>
            <a href="/ser-bombero" className="red-banner-btn">
              QUIERO SER BOMBERO
            </a>
          </div>
        </section>

        <section className="history-section history-bg-light">
          <div className="history-container">

            <div className="history-dual-cards-grid">

              <div className="history-card-box">
                <div className="history-card-header-red">
                  <h3>TODOS NUESTROS CAPITANES</h3>
                </div>
                <div className="history-card-body history-card-body-scroll">
                  <div className="fundadores-mini-grid">
                    {capitanes.map((item, idx) => (
                      <div key={idx} className="fundador-item-pill">
                        <span className="capitan-period-pill">{item.period}</span>
                        <span className="fundador-name">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="history-card-box">
                <div className="history-card-header-dark">
                  <h3>NUESTROS FUNDADORES</h3>
                </div>
                <div className="history-card-body history-card-body-scroll">
                  <div className="fundadores-mini-grid">
                    {fundadores.map((nombre, idx) => (
                      <div key={idx} className="fundador-item-pill">
                        <span className="fundador-num">{String(idx + 1).padStart(2, '0')}</span>
                        <span className="fundador-name">{nombre}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="history-acta-card-wrapper">
              <div className="history-card-box history-acta-card">
                <div className="history-card-header-dark">
                  <h3>ACTA DE FUNDACIÓN</h3>
                </div>
                <div className={`history-acta-body ${actaExpanded ? 'acta-expanded' : 'acta-collapsed'}`}>
                  <h4 className="history-acta-title">TERCERA COMPAÑÍA BOMBEROS SAN VICENTE T.T.</h4>

                  <p>En San Vicente de Tagua Tagua, a veintidós de Abril de mil novecientos cincuenta y nueve, a las 20:30 Horas. Se verificó en casa del Señor Horacio Lagos Lambert, ubicada en calle Riesco numero 610 de esta ciudad, la Sesión de Fundación de la Tercera Compañía de Bomberos.</p>

                  <div className="acta-collapsible-body">
                    <p>Presidio el Señor Horacio Lagos Lambert, asistieron el gobernador del Departamento, Señor Juan Barros Roldan, el Superintendente del Cuerpo Bomberos Local Don Carlos Aresti Herrera, el comandante del mismo don Carlos Moreno Ortega, El Capitán de la Primera Compañía don Enrique González Figueroa., y los siguientes socios activos de la nueva Compañía los Señores Samuel Correa Quesney, Doctor Germán Segura Brand, Señor Rogelio Mena Toledo, Fernando Villavicencio Larragaña, Mario Villavicencio Larragaña, Carlos Olea Olea, Joaquín García Valencia, Vargas Goas, Carlos Poblete, Archivaldo Vásquez, Carlos Valdivia Gómez, Manuel Chacoff Zúñiga, Ramón Toro Ortiz, Alexis Hernández Vásquez, Roberto Marambio Navarro, Horacio Lagos Lambert Miguel Miranda Bustos.</p>

                    <p>El Señor Horacio Lagos, en su calidad de organizador del comité pro fundación de la Tercera Compañía, dio cuenta a la sala, de las gestiones realizadas con este fin, dando a conocer a continuación, las especialidad que ocuparía la nueva compañía, la que sería de Salvataje, Escalas y Hachas.</p>

                    <p>El señor Superintendente del Cuerpo, Don Carlos Silva Herrera, en su calidad de observador, dio a conocer la tramitación a seguir para la autorización oficial del Cuerpo de Bomberos, como compañía propiamente tal, cuyos requisitos, son la presentación de una solicitud firmada por 25 socios activos como mínimo, y los reglamentos que regirán en la compañía fundada.</p>

                    <p>A continuación se entro a elegir un directorio provisorio, con el fin de redactar los reglamentos, y organizar en todos sus aspectos a la compañía.</p>

                    <p>Este quedo compuesto de la siguiente forma:</p>

                    <ul className="history-acta-list">
                      <li><strong>Director:</strong> Don Samuel Correa Quesney</li>
                      <li><strong>Capitán:</strong> Don Horacio Lagos Lambert</li>
                      <li><strong>Tesorero:</strong> Don Germán Segura Brand</li>
                      <li><strong>Ayudante:</strong> Don Carlos Olea Olea</li>
                      <li><strong>Secretario:</strong> Don Miguel Miranda Bustos</li>
                    </ul>

                    <p>Acto seguido, el gobernador Señor Juan Barros Roldan, felicito al señor Horacio Lagos Lambert, y a todos los socios de la nueva compañía, pues su formación, representaba un progreso y seguridad para San Vicente de Tagua Tagua, en seguida, el superintendente Señor Carlos Aresti Herrera, ofreció colaborar, en lo que sea posible para la redacción de los reglamentos, ofreciendo al mismo tiempo, facilitar los que rigen al cuerpo. Luego el Señor Carlos Moreno, comandante del Cuerpo, prometió ayudar en todo lo relacionado con la especialidad de Salvataje, Escalas y Hachas, por cuanto la experiencia que posee en esta materia es amplia, pues perteneció en la ciudad de Rancagua, a una compañía de esta misma índole, además el señor moreno, informo que la firma Williamson, Balfour y compañía, tiene en venta un económico traje para bomberos.</p>

                    <p>El material necesario para comenzar las actividades seria de seis escalas, seis hachas, estacas y cables.</p>

                    <p>Acto Seguido, el Señor director Don Samuel Correa Quesney, agradeció la designación que ha sido objeto, prometió ayudar a la compañía en todo lo que fuera posible, saludo a las visitas y acepto desde luego la cooperación tan gentilmente ofrecida.</p>

                    <p>Se acordó efectuar una reunión del directorio, el día 23 de abril, a fin de hacer un estudio de los reglamentos a presentar al Cuerpo.</p>

                    <p>Sin otro punto que tratar, se levanto la Sesión, para luego asistir a un coctel ofrecido por el Señor Horacio Lagos Lambert, en el cual hubo un franco ambiente de unidad y compañerismo.</p>

                    <div className="history-acta-footer">
                      <p className="firma-titulo">Firma LA PRESENTE ACTA</p>
                      <div className="history-acta-firmas">
                        <div className="firma-block">
                          <span className="firma-nombre">Samuel Correa Quesney</span>
                          <span className="firma-cargo">Director de Compañía</span>
                        </div>
                        <div className="firma-block">
                          <span className="firma-nombre">Miguel Miranda Bustos</span>
                          <span className="firma-cargo">Secretario</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="acta-ver-mas-btn"
                    onClick={() => setActaExpanded(!actaExpanded)}
                  >
                    {actaExpanded ? '▲ Ver menos' : '▼ Ver más'}
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section className="history-section history-bg-white">
          <div className="history-container">

            <div className="history-section-header">
              <h2 className="history-main-title">ESPECIALIDADES</h2>
            </div>

            <div className="specialties-carousel-wrapper">

              <div className="specialties-carousel-grid">
                {specialtiesData.map((spec) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={spec.id}
                      className="specialty-carousel-card"
                      onClick={() => setSelectedSpecialty(spec)}
                    >
                      <div className="specialty-card-img-wrap">
                        <img src={spec.image} alt={spec.title} className="specialty-card-img" />
                        <div className="specialty-card-gradient" />
                      </div>

                      <div className="specialty-card-body">
                        <div className="specialty-card-header">
                          <div className="specialty-icon-circle">
                            <Icon size={24} />
                          </div>
                          <h3 className="specialty-card-title">{spec.title}</h3>
                        </div>
                        <p className="specialty-card-desc">{spec.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>

        {/* SECCIÓN BRIGADA JUVENIL */}
        <section className="history-section history-bg-red">
          <div className="history-container">
            <div className="history-section-header">
              <h2 className="history-main-title" style={{ color: '#ffffff' }}>BRIGADA JUVENIL</h2>
            </div>

            {/* CARDS CARRUSEL: cada sección de la brigada como tarjeta deslizable */}
            <div className="brigada-cards-carousel">

              <div className="brigada-swipe-card">
                <div className="brigada-swipe-card-img">
                  <img src="/iniciosbrigada.webp" alt="Inicios de la Brigada" />
                </div>
                <div className="brigada-swipe-card-body">
                  <h3 className="brigada-swipe-card-title">Inicios</h3>
                  <p className="brigada-swipe-card-text">La Brigada emergió como una iniciativa de la oficialidad en 2023, reuniendo a 11 jóvenes y niños llenos de ímpetu y el deseo de convertirse en miembros destacados de la Compañía. Con el tiempo, su enfoque se ha dirigido hacia la consecución de resultados significativos, consolidando un camino de crecimiento y logros.</p>
                </div>
              </div>

              <div className="brigada-swipe-card">
                <div className="brigada-swipe-card-img">
                  <img src="/brigada2.webp" alt="Fundación de la Brigada" />
                </div>
                <div className="brigada-swipe-card-body">
                  <h3 className="brigada-swipe-card-title">Fundación</h3>
                  <p className="brigada-swipe-card-text">El 16 de noviembre de 2023 se realizó la ceremonia oficial de fundación, honrando al Director Honorario Carlos Horta Pérez. Presidida por el Director Don Juan Pidal Pino, culminó con una reunión social que marcó un hito histórico para la brigada.</p>
                </div>
              </div>

              <div className="brigada-swipe-card">
                <div className="brigada-swipe-card-img">
                  <img src="/legadobrigada.webp" alt="Legado de la Brigada" />
                </div>
                <div className="brigada-swipe-card-body">
                  <h3 className="brigada-swipe-card-title">Legado</h3>
                  <p className="brigada-swipe-card-text">La Brigada se embarca en un viaje para sembrar en sus miembros el arraigo a nuestra historia, tejiendo experiencias que nos enlazan con nuestra trayectoria y los valores que han sido el cimiento de nuestra compañía.</p>
                </div>
              </div>

              <div className="brigada-swipe-card">
                <div className="brigada-swipe-card-img">
                  <img src="/brigada3.webp" alt="Capacitaciones de la Brigada" />
                </div>
                <div className="brigada-swipe-card-body">
                  <h3 className="brigada-swipe-card-title">Capacitaciones</h3>
                  <p className="brigada-swipe-card-text">Desde marzo, cada sábado se han desplegado academias y capacitaciones para moldear a los futuros oficiales y bomberos. Los instructores comparten experiencia, pasión y técnicas de rescate, fomentando camaradería y trabajo en equipo.</p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* SECCIÓN OFICIALIDAD ACTUAL */}
        <section className="nosotros-section section-bg-gray">
          <div className="nosotros-section-container">
            <h2 className="history-main-title" style={{ textAlign: 'center', marginBottom: '3rem', color: '#0F1322' }}>
              OFICIALIDAD ACTUAL
            </h2>

            <div className="oficialidad-grid">

              {/* COLUMNA IZQUIERDA: DIRECCIÓN (ADMINISTRATIVA) */}
              <div className="oficialidad-col">
                <h3 className="oficialidad-col-title">Directorio Administrativo</h3>

                {/* Director */}
                <div className="oficialidad-node root-node">
                  <div className="node-role">Director</div>
                  <div className="node-name">Ricardo Macaya Horta</div>
                </div>

                <div className="node-connector-line"></div>

                {/* Secretario y Tesorero al mismo nivel */}
                <div className="oficialidad-row-2">
                  <div className="oficialidad-node side-node">
                    <div className="node-role">Secretario</div>
                    <div className="node-name">Francisco Valenzuela B.</div>
                  </div>
                  <div className="oficialidad-node side-node">
                    <div className="node-role">Tesorero</div>
                    <div className="node-name">Agustin Quinteros S.</div>
                  </div>
                </div>
              </div>

              {/* COLUMNA DERECHA: MANDO ACTIVO (OPERATIVA) */}
              <div className="oficialidad-col">
                <h3 className="oficialidad-col-title">Mando Activo</h3>

                {/* Capitán */}
                <div className="oficialidad-node root-node active-mando">
                  <div className="node-role">Capitán</div>
                  <div className="node-name">Jose Elias Horta</div>
                </div>

                <div className="node-connector-line"></div>

                {/* Tenientes 1, 2, 3 */}
                <div className="oficialidad-row-3">
                  <div className="oficialidad-node side-node active-mando-sub">
                    <div className="node-role">Teniente 1°</div>
                    <div className="node-name">Bastian Acevedo M.</div>
                  </div>
                  <div className="oficialidad-node side-node active-mando-sub">
                    <div className="node-role">Teniente 2°</div>
                    <div className="node-name">Lorena Brown M.</div>
                  </div>
                  <div className="oficialidad-node side-node active-mando-sub">
                    <div className="node-role">Teniente 3°</div>
                    <div className="node-name">Alejandro Quintanilla J.</div>
                  </div>
                </div>

                <div className="node-connector-line"></div>

                {/* Ayudante debajo bajando desde el Capitán */}
                <div className="oficialidad-node root-node active-mando">
                  <div className="node-role">Ayudante</div>
                  <div className="node-name">Constanza Gonzalez H.</div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      {/* MODAL DETALLES ESPECIALIDADES */}
      {selectedSpecialty && (
        <div className="specialty-modal-backdrop" onClick={() => setSelectedSpecialty(null)}>
          <div className="specialty-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="specialty-modal-close"
              onClick={() => setSelectedSpecialty(null)}
              aria-label="Cerrar ventana"
            >
              <X size={18} />
            </button>

            <div className="specialty-modal-header-compact">
              <span className="specialty-modal-icon-inline">
                <selectedSpecialty.icon size={22} />
              </span>
              <h3 className="specialty-modal-title-compact">
                {selectedSpecialty.title.toUpperCase()}
              </h3>
            </div>

            <div className="specialty-modal-body">
              {selectedSpecialty.fullText.map((p, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer activePage="/nosotros" />
    </div>
  );
};
