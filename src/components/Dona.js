import React, { useState } from 'react';
import './Dona.css';

const Dona = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <div className="dona-page">
      
      <div className="dona-content">
        {/* Sección principal */}
        <div className="hero-section">
          <h1 className="dona-main-title">Juntos salvamos vidas, creamos esperanzas</h1>
          <p className="dona-main-description">
            Tu apoyo hace la diferencia. Cada donación nos acerca más a nuestro objetivo de facilitar el acceso a 
            servicios de salud de tercer nivel para niños y niñas con cardiopatías congénitas, garantizando atención 
            médica digna, oportuna y de calidad.
          </p>
          
          <div className="call-to-action">
            <p className="cta-question">¿Quieres apoyar y colaborar con nuestras campañas?</p>
            <h2 className="cta-title">SÉ PARTE DEL CAMBIO</h2>
            <p className="cta-description">
              Tu donativo es esencial para transformar las vidas de los niños con cardiopatías congénitas. 
              ¡Únete a nosotros!
            </p>
          </div>
        </div>

        {/* Sección de donación */}
        <div className="donation-section">
          <div className="donation-methods">
            {/* Donación en línea */}
            <div className="donation-card online-donation">
              <div className="card-header">
                <div className="card-icon">
                  <img 
                    src="/dona6.png"
                    alt="Dona en línea"
                    className="card-icon-image"
                  />
                </div>
                <h3 className="card-title">Dona en línea</h3>
              </div>
              <p className="card-description">
                Realiza tu donación de forma segura a través de nuestra plataforma en línea.
              </p>
              <div className="donation-link">
                <strong>https://assistant.velpay.mx/ recurring-payment/12523</strong>
              </div>
            </div>

            {/* Transferencia bancaria */}
            <div className="donation-card bank-transfer">
              <div className="card-header">
                <div className="card-icon">
                  <img 
                    src="/dona6.png"
                    alt="Transferencia bancaria"
                    className="card-icon-image"
                  />
                </div>
                <h3 className="card-title">Transferencia bancaria</h3>
              </div>
              
              <div className="bank-info">
                <div className="bank-row">
                  <div className="bank-field">
                    <strong>Banco:</strong><br />
                    Banorte
                  </div>
                  <div className="bank-field">
                    <strong>Cuenta:</strong><br />
                    0265002102
                  </div>
                </div>
                
                <div className="bank-row">
                  <div className="bank-field">
                    <strong>CLABE:</strong><br />
                    072580002650021024
                  </div>
                  <div className="bank-field">
                    <strong>RFC:</strong><br />
                    AAN950815E6A
                  </div>
                </div>
                
                <div className="beneficiary">
                  <strong>Beneficiario:</strong><br />
                  Asociación de Ayuda a Niños en Estado Crítico A.B.P.
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="contact-form-section">
            <div className="contact-card">
              <div className="card-header">
                <div className="card-icon">
                  <img 
                    src="/dona7.png"
                    alt="Contáctanos"
                    className="card-icon-image"
                  />
                </div>
                <h3 className="card-title">Contáctanos</h3>
              </div>
              
              <div className="contact-types">
                <p><strong>Tipo de consulta:</strong></p>
                <p>Voluntariado</p>
                <p>Donativo</p>
                <p>Convenio</p>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo:</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje:</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows="4"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Sección de imágenes */}
          <div className="images-section">
            <div className="image-placeholder left-image">
              <img src="/dona1.png" alt="Imagen de niños y familias" />
            </div>
              <div className="image-placeholder right-image">
                <img src="/dona2.png" alt="Imagen del equipo médico" />
              </div>
          </div>
      </div>
    </div>
  );
};

export default Dona;
