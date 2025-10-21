import React from 'react';
import './Contactanos.css';

const Contactanos = () => {
  return (
    <div className="contactanos-page">
      <div className="contactanos-content">
        <div className="contactanos-container">
          {/* Sección izquierda - Información de contacto */}
          <div className="contact-info-section">
            <div className="contact-item">
              <div className="contact-icon">
                <img src="/contactanos/ubicacion.png" alt="Ubicación" className="icon-image" />
              </div>
              <div className="contact-details">
                <h3 className="contact-title">Visítanos</h3>
                <p className="contact-text">
                  Nos encontramos en: Avenida Sertoma 109-B, Esq. Avenida Hospital<br />
                  Col. Sertoma 64718 Monterrey, Nuevo León, México<br />
                  (Frente Hospital San José, planta alta del Oxxo)
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img src="/contactanos/horario.png" alt="Horario" className="icon-image" />
              </div>
              <div className="contact-details">
                <h3 className="contact-title">Horarios</h3>
                <p className="contact-text">
                  Con un horario de: Lunes a Viernes - 9:30 am a 3:30 pm
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img src="/contactanos/telefono.png" alt="Teléfono" className="icon-image" />
              </div>
              <div className="contact-details">
                <h3 className="contact-title">Teléfono</h3>
                <p className="contact-text">8184008738 y 8184008731</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img src="/contactanos/whatsapp.png" alt="WhatsApp" className="icon-image" />
              </div>
              <div className="contact-details">
                <h3 className="contact-title">Whatsapp</h3>
                <p className="contact-text">8134115836</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img src="/contactanos/correo.png" alt="Email" className="icon-image" />
              </div>
              <div className="contact-details">
                <h3 className="contact-title">Correo</h3>
                <p className="contact-text">contacto@adanec.org</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img src="/contactanos/facebook.png" alt="Facebook" className="icon-image" />
              </div>
              <div className="contact-details">
                <h3 className="contact-title">Facebook</h3>
                <p className="contact-text">ADANEC ABP</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img src="/contactanos/insta.png" alt="Instagram" className="icon-image" />
              </div>
              <div className="contact-details">
                <h3 className="contact-title">Instagram</h3>
                <p className="contact-text">@adanecabp</p>
              </div>
            </div>
          </div>

          {/* Sección derecha - Mapa */}
          <div className="map-section">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5248.955556122932!2d-100.35275522341794!3d25.668873712432497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bdfe27a52b9d%3A0xc4025ea48904ac78!2sADANEC!5e1!3m2!1ses-419!2smx!4v1760399582900!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de ADANEC"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;
