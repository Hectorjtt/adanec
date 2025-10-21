import React, { useState } from 'react';
import './QuienesSomos.css';
import ValueModal from './ValueModal';

const QuienesSomos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('dignidad');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleValueClick = (value) => {
    setSelectedValue(value);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Lista de todas las empresas
  const empresas = [
    'acmes.png', 'amaerimed-hospitals.png', 'amerimed hospital.png', 'arca continental.png',
    'bebe cardio.png', 'bebecardio.png', 'cemefi-logo.00f654bbfe8c08205664.png', 'cemefi.png',
    'century fasteners.png', 'chapa.png', 'de acero.png', 'elite bridge.png', 'else.png',
    'escalando fronteras.png', 'escalandofronteras.png', 'farmacias iguales.png', 'field.png',
    'fomento moral.png', 'frisa.png', 'fundacion clisa.png', 'gob nl.png', 'gp grupo.png',
    'HEB.png', 'himalaya colegio.png', 'jesús montemayor.png', 'kenworth.png',
    'lab hidalgo m.png', 'latin colegio.png', 'Logo_de_la_UANL.svg.png', 'logoNiños360.png',
    'lux.png', 'maat advisory.png', 'medicina.png', 'medtronic.png', 'monte de piedad.png',
    'niños 360.png', 'operacion corazon.png', 'operacioncorazon.jpg', 'oxxo.png',
    'promax.png', 'salvando latidos.png', 'SalvandoLatidos.png', 'sanatorio español.png',
    'sec igualdad nl.png', 'sec salud nl.png', 'seca.png', 'ser y crecer.png',
    'serycrecer.png', 'smart.png', 'tec salud.png', 'tecmilenio.png', 'tecnológico mty.png',
    'ternium.png', 'terumo.png', 'trayecto grupo.png', 'uanl.png', 'udem.png',
    'uni del paciente.png', 'uni lux.png', 'yco.png'
  ];

  const itemsPerSlide = 9;
  const totalSlides = Math.ceil(empresas.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="quienes-somos-page">
      <div className="quienes-somos-content">
               {/* Sección principal con video y logo */}
               <div className="quienes-somos-hero-section">
          <div className="video-section">
            <div className="video-container">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/qy_ruQyJYr8?start=4&autoplay=0&rel=0&modestbranding=1"
                title="ADANEC 2025 - DÍA MUNDIAL DE LAS CARDIOPATÍAS CONGÉNITAS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="logo-section">
            <div className="adanec-logo">ADANEC</div>
            <div className="adanec-slogan">30 años cuidando pequeños corazones</div>
          </div>
        </div>

        {/* Sección de información */}
        <div className="info-section">
          <div className="info-content">
            <h2 className="info-title">ADANEC (Asociación de Ayuda a Niños en Estado Crítico A.B.P.)</h2>
            <p className="info-text">
              ADANEC es una organización legalmente constituida el 15 de agosto de 1995 en Monterrey, Nuevo León, México. Nuestro compromiso es atender a bebés, niñas, niños y adolescentes en un estado crítico de salud, enfrentando condiciones que ponen en riesgo su vida. Nos esforzamos por garantizar diagnósticos precisos y especializados, facilitando así una atención rápida y eficiente para prevenir pérdidas de vida en casos de enfermedades tratables.
            </p>
          </div>
        </div>

        {/* Sección de estadísticas */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <div className="stat-icon-circle">
                  <img src="/quienes1.png" alt="Cirugías de corazón" className="stat-icon-image" />
                </div>
              </div>
              <div className="stat-text">
                <div className="stat-number">84 campañas</div>
                <div className="stat-label">cirugía</div>
                <div className="stat-number">+ 900 cirugías</div>
                <div className="stat-label">de corazón</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <div className="stat-icon-circle">
                  <img src="/quienes2.png" alt="Servicios médicos" className="stat-icon-image" />
                </div>
              </div>
              <div className="stat-text">
                <div className="stat-number">+ 39,000</div>
                <div className="stat-label">servicios</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <div className="stat-icon-circle">
                  <img src="/quienes3.png" alt="Diagnósticos" className="stat-icon-image" />
                </div>
              </div>
              <div className="stat-text">
                <div className="stat-number">111 campañas</div>
                <div className="stat-label">diagnóstico</div>
                <div className="stat-number">+ 3,680 diagnósticos</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <div className="stat-icon-circle">
                  <img src="/quienes4.png" alt="Cirugías fetales" className="stat-icon-image" />
                </div>
              </div>
              <div className="stat-text">
                <div className="stat-number">34 cirugías fetales</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Misión, Visión y Objetivo */}
        <div className="mission-vision-section">
          <div className="mission-vision-grid">
            <div className="mission-vision-card">
              <div className="mv-header">
                <div className="mv-icon">
                  <div className="mv-icon-circle">
                    <img src="/mv1.png" alt="Misión" className="mv-icon-image" />
                  </div>
                </div>
                <h3 className="mv-title">MISIÓN</h3>
              </div>
              <div className="mv-content">
                <p className="mv-text">
                  Cuidar, proteger y mejorar la salud de pacientes con cardiopatías congénitas en situación de vulnerabilidad, 
                  mediante un modelo especializado, humanizado y corresponsable, que integra diagnóstico, cirugía y seguimiento 
                  integral en México.
                </p>
              </div>
            </div>

            <div className="mission-vision-card">
              <div className="mv-header">
                <div className="mv-icon">
                  <div className="mv-icon-circle">
                    <img src="/mv2.png" alt="Visión" className="mv-icon-image" />
                  </div>
                </div>
                <h3 className="mv-title">VISIÓN</h3>
              </div>
              <div className="mv-content">
                <p className="mv-text">
                  Ser la institución referente nacional en cardiología pediátrica humanizada, reconocida por el impacto medible 
                  de nuestros programas y por elevar la calidad de vida de nuestros pacientes más desfavorecidos y sus familias.
                </p>
              </div>
            </div>

            <div className="mission-vision-card">
              <div className="mv-header">
                <div className="mv-icon">
                  <div className="mv-icon-circle">
                    <img src="/mv3.png" alt="Objetivo" className="mv-icon-image" />
                  </div>
                </div>
                <h3 className="mv-title">OBJETIVO</h3>
              </div>
              <div className="mv-content">
                <p className="mv-text">
                  Facilitar el acceso a servicios de salud de tercer nivel para niños y niñas con cardiopatías congénitas, 
                  garantizando atención médica digna, oportuna y de calidad.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Valores */}
        <div className="values-section">
          <div className="values-header">
            <h2 className="values-title">Nuestros Valores</h2>
            <p className="values-subtitle">
              Principios que guían cada uno de nuestras acciones y decisiones
            </p>
          </div>
          
          <div className="values-grid">
            <div className="value-card" onClick={() => handleValueClick('dignidad')}>
              <div className="value-icon-circle">
                <img src={process.env.PUBLIC_URL + "/dignidad.png"} alt="Dignidad" className="value-icon-image" />
              </div>
              <div className="value-label">Dignidad</div>
            </div>

            <div className="value-card" onClick={() => handleValueClick('calidad')}>
              <div className="value-icon-circle">
                <img src={process.env.PUBLIC_URL + "/calidad.png"} alt="Calidad" className="value-icon-image" />
              </div>
              <div className="value-label">Calidad</div>
            </div>

            <div className="value-card" onClick={() => handleValueClick('corresponsabilidad')}>
              <div className="value-icon-circle">
                <img src={process.env.PUBLIC_URL + "/corresponsabilidad.png"} alt="Corresponsabilidad" className="value-icon-image" />
              </div>
              <div className="value-label">Corresponsabilidad</div>
            </div>

            <div className="value-card" onClick={() => handleValueClick('transparencia')}>
              <div className="value-icon-circle">
                <img src={process.env.PUBLIC_URL + "/transparencia.png"} alt="Transparencia" className="value-icon-image" />
              </div>
              <div className="value-label">Transparencia</div>
            </div>

            <div className="value-card" onClick={() => handleValueClick('compromiso')}>
              <div className="value-icon-circle">
                <img src={process.env.PUBLIC_URL + "/compromiso.png"} alt="Compromiso solidario" className="value-icon-image" />
              </div>
              <div className="value-label">Compromiso solidario</div>
            </div>

            <div className="value-card" onClick={() => handleValueClick('innovacion')}>
              <div className="value-icon-circle">
                <img src={process.env.PUBLIC_URL + "/innovacion.png"} alt="Innovación" className="value-icon-image" />
              </div>
              <div className="value-label">Innovación</div>
            </div>
          </div>
        </div>

        {/* Sección de Cobertura Nacional */}
        <div className="coverage-section">
          <div className="coverage-content">
            <div className="coverage-text">
              <h2 className="coverage-title">
                Llegamos a todo <span className="coverage-title-highlight">MÉXICO</span>
              </h2>
              <p className="coverage-description">
                ADANEC tiene presencia en 14 estados de la República Mexicana y brinda atención a pacientes de todo el país a través de 3 oficinas regionales. Cuenta con un staff médico integrado por más de 150 especialistas, entre médicos, enfermeras, técnicos y proveedores voluntarios.
              </p>
            </div>
            
            <div className="coverage-visuals">
              <div className="map-container">
                <img src="/mapa.png" alt="Mapa de México" className="mapa-image" />
              </div>
              
              <div className="staff-photo-container">
                <img src="/circlulo.png" alt="Staff médico" className="staff-photo" />
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Donadores y Alianzas */}
        <div className="donors-alliances-section">
          <div className="donors-alliances-content">
            <h2 className="donors-alliances-title">Donadores y Alianzas</h2>
            <p className="donors-alliances-description">
              El respaldo de nuestros donadores y aliados estratégicos ha sido fundamental para el cumplimiento de nuestra misión. Su compromiso social permite a ADANEC fortalecer programas de diagnóstico oportuno, tratamiento y cirugías de alta especialidad, beneficiando a niños con enfermedades del corazón en situación de vulnerabilidad en todo México.
            </p>
            
            <div className="carousel-container">
              <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
                ‹
              </button>
              
              <div className="carousel-wrapper">
                <div 
                  className="carousel-slide" 
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }, (_, slideIndex) => (
                    <div key={slideIndex} className="carousel-slide-content">
                      <div className="donors-circles-grid">
                        {empresas
                          .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                          .map((empresa, index) => (
                            <div key={index} className="donors-circle">
                              <div className="donors-circle-content">
                                <img 
                                  src={process.env.PUBLIC_URL + `/empresas/${empresa}`} 
                                  alt={empresa.replace('.png', '').replace('.jpg', '')} 
                                  className="donors-circle-image" 
                                />
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
                ›
              </button>
            </div>
            
            <div className="carousel-dots">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <ValueModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        value={selectedValue} 
      />
    </div>
  );
};

export default QuienesSomos;
