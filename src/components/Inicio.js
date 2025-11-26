import React from 'react';
import './Inicio.css';
import corazonImg from '../assets/images/corazon.png';

const Inicio = ({ setCurrentPage }) => {
  const handleDonacionClick = () => {
    setCurrentPage('dona');
  };

  const handleClinicaClick = () => {
    setCurrentPage('clinica');
  };

  return (
    <div className="inicio">
      <div className="inicio-container">
        <div className="inicio-content">
          <div className="inicio-left">
            <h1 className="main-title">30 AÑOS JUNTOS</h1>
            <div className="mission-lines">
              <h2>Salvando vidas</h2>
              <h2>Creando esperanzas</h2>
            </div>
            <p className="description">
              ADANEC organización sin fines de lucro dedicada a mejorar la salud y calidad de vida de niños con enfermedades del corazón.
            </p>
            <div className="buttons-container">
              <button className="donacion-button" onClick={handleDonacionClick}>
                Haz tu donación
              </button>
              <button className="clinica-button" onClick={handleClinicaClick}>
                Conoce nuestra clínica
              </button>
            </div>
          </div>
          <div className="inicio-right">
            <img src={corazonImg} alt="Niña sonriendo" className="corazon-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
