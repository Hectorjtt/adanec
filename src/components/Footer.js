import React from 'react';
import './Footer.css';
import ubicacionImg from '../assets/images/footer/ubicación.png';
import horarioImg from '../assets/images/footer/horario.png';
import chatImg from '../assets/images/footer/chat.png';
import telefonoImg from '../assets/images/footer/telefono.png';
import emailImg from '../assets/images/footer/email.png';
import facebookImg from '../assets/images/footer/facebook.png';
import instagramImg from '../assets/images/footer/instagram.png';
import donaImg from '../assets/images/footer/dona.png';
import qrImg from '../assets/images/qr.png';

const Footer = () => {
  const handleDonaClick = () => {
    window.location.hash = 'dona';
    // Hacer scroll hacia arriba de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUbicacionClick = () => {
    window.open('https://maps.app.goo.gl/XLkhjJ1aNdcsFojY7?g_st=aw', '_blank', 'noopener,noreferrer');
  };

  const handleHorarioClick = () => {
    window.location.hash = 'contactanos';
    // Hacer scroll hacia arriba de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactoClick = () => {
    window.location.hash = 'contactanos';
    // Hacer scroll hacia arriba de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">VISÍTANOS</h3>
          <div className="visitanos-icons">
            <div className="icon-circle" onClick={handleUbicacionClick} style={{ cursor: 'pointer' }}>
              <img src={ubicacionImg} alt="Ubicación" className="icon-img" />
            </div>
            <div className="icon-circle" onClick={handleHorarioClick} style={{ cursor: 'pointer' }}>
              <img src={horarioImg} alt="Horario" className="icon-img" />
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">CONTÁCTANOS</h3>
          <div className="contact-icons">
            <div className="icon-circle" onClick={handleContactoClick} style={{ cursor: 'pointer' }}>
              <img src={chatImg} alt="Chat" className="icon-chat" />
            </div>
            <div className="icon-circle" onClick={handleContactoClick} style={{ cursor: 'pointer' }}>
              <img src={telefonoImg} alt="Teléfono" className="icon-img" />
            </div>
            <div className="icon-circle" onClick={handleContactoClick} style={{ cursor: 'pointer' }}>
              <img src={emailImg} alt="Email" className="icon-img" />
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">REDES</h3>
          <div className="social-icons">
            <a 
              href="https://www.facebook.com/adanec.abp/?locale=es_LA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="icon-circle-link"
            >
              <div className="icon-circle">
                <img src={facebookImg} alt="Facebook" className="icon-img" />
              </div>
            </a>
            <a 
              href="https://www.instagram.com/adanecabp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="icon-circle-link"
            >
              <div className="icon-circle">
                <img src={instagramImg} alt="Instagram" className="icon-img" />
              </div>
            </a>
          </div>
        </div>

        <div className="footer-section qr-section">
          <div className="qr-code">
            <img src={qrImg} alt="QR Code" className="qr-image" />
          </div>
        </div>

        <div className="footer-section dona-section">
          <div className="dona-button" onClick={handleDonaClick}>
            <div className="dona-circle">
              <img src={donaImg} alt="Dona" className="dona-img" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
