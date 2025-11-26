import React from 'react';
import './Transparencia.css';
import imagenTransparencia from '../assets/images/transparencia.png';
import informesImg from '../assets/images/informes.png';

const Transparencia = () => {
  const informes = [
    {
      año: '2024',
      titulo: 'Informe anual 2024',
      subtitulo: 'Disponible su descarga',
      pdf: 'INFORME 2024 - PEQUEÑOS CORAZONES POR ADANEC.pdf',
      disponible: true
    },
    {
      año: '2023',
      titulo: 'Informe anual 2023',
      subtitulo: 'Disponible su descarga',
      pdf: 'ADANEC INFORME ANUAL 2023.pdf',
      disponible: true
    },
    {
      año: '2022',
      titulo: 'Informe anual 2022',
      subtitulo: 'Próximamente disponible',
      pdf: null,
      disponible: false
    },
    {
      año: '2021',
      titulo: 'Informe anual 2021',
      subtitulo: 'Disponible su descarga',
      pdf: 'INFORME ANUAL  2021 (1).pdf',
      disponible: true
    },
    {
      año: '2020',
      titulo: 'Informe anual 2020',
      subtitulo: 'Disponible su descarga',
      pdf: 'INFORME-ANUAL-2020.pdf',
      disponible: true
    }
  ];

  const handleInformeClick = (informe) => {
    if (informe.disponible && informe.pdf) {
      // Abrir el PDF en una nueva pestaña
      window.open(`/cuentas/${informe.pdf}`, '_blank');
    }
  };

  return (
    <div className="transparencia-page">
      
      <div className="transparencia-content">
        <div className="content-left">
          <h1 className="page-title">Rendición de cuentas</h1>
          <p className="page-subtitle">
            Conoce cómo utilizamos los recursos y el impacto de nuestras actividades a través de 
            nuestros informes anuales.
          </p>
          
          <div className="informes-list">
            {informes.map((informe, index) => (
              <div 
                key={index} 
                className={`informe-item ${informe.disponible ? 'clickeable' : 'no-disponible'}`}
                onClick={() => handleInformeClick(informe)}
              >
                <div className="informe-icon">
                  <div className="informe-icon-circle">
                    <img 
                      src={informesImg} 
                      alt="Informe"
                      className="informe-icon-image"
                    />
                  </div>
                </div>
                <div className="informe-info">
                  <h3 className="informe-titulo">{informe.titulo}</h3>
                  <p className="informe-subtitulo">{informe.subtitulo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="content-right">
          <div className="child-image">
            <img 
              src={imagenTransparencia} 
              alt="Imagen de transparencia"
              className="child-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparencia;
