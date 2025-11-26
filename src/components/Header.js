import React from 'react';
import './Header.css';
import logotipoImg from '../assets/images/logotipo.png';

const Header = ({ currentPage, setCurrentPage }) => {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-circle" onClick={() => handleNavClick('inicio')}>
            <img src={logotipoImg} alt="ADANEC" className="logo-image" />
          </div>
        </div>
        
        <nav className="navigation">
          <button 
            className={`nav-button ${currentPage === 'quienes-somos' ? 'active' : ''}`}
            onClick={() => handleNavClick('quienes-somos')}
          >
            QUIÉNES SOMOS
          </button>
          <button 
            className={`nav-button ${currentPage === 'clinica' ? 'active' : ''}`}
            onClick={() => handleNavClick('clinica')}
          >
            CLÍNICA
          </button>
          <button 
            className={`nav-button ${currentPage === 'noticias' ? 'active' : ''}`}
            onClick={() => handleNavClick('noticias')}
          >
            NOTICIAS
          </button>
          <button 
            className={`nav-button ${currentPage === 'transparencia' ? 'active' : ''}`}
            onClick={() => handleNavClick('transparencia')}
          >
            TRANSPARENCIA
          </button>
          <button 
            className={`nav-button ${currentPage === 'contactanos' ? 'active' : ''}`}
            onClick={() => handleNavClick('contactanos')}
          >
            CONTÁCTANOS
          </button>
          <button 
            className={`nav-button dona-button ${currentPage === 'dona' ? 'active' : ''}`}
            onClick={() => handleNavClick('dona')}
          >
            DONA
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
