import React from 'react';
import './ValueModal.css';

const ValueModal = ({ isOpen, onClose, value }) => {
  if (!isOpen) return null;

  const valueData = {
    dignidad: {
      icon: '/dignidad.png',
      title: 'DIGNIDAD',
      description: 'Reconocemos el valor intrínseco de cada niña, niño y familia, brindando un trato respetuoso y amable.'
    },
    calidad: {
      icon: '/calidad.png',
      title: 'CALIDAD',
      description: 'Ofrecemos atención médica segura, oportuna y basada en evidencia, mejorando de forma continua.'
    },
    corresponsabilidad: {
      icon: '/corresponsabilidad.png',
      title: 'CORRESPONSABILIDAD',
      description: 'Involucramos a la familia como aliados activos en la atención y la sostenibilidad de los programas.'
    },
    transparencia: {
      icon: '/transparencia.png',
      title: 'TRANSPARENCIA',
      description: 'Rendimos cuentas con honestidad sobre resultados, recursos y decisiones.'
    },
    compromiso: {
      icon: '/compromiso.png',
      title: 'COMPROMISO SOLIDARIO',
      description: 'Servimos con amor, optimismo y entrega, sumando talento remunerado y voluntario.'
    },
    innovacion: {
      icon: '/innovacion.png',
      title: 'INNOVACIÓN',
      description: 'Adoptamos tecnología y conocimientos que multipliquen el impacto en la salud de nuestros pacientes.'
    }
  };

  const currentValue = valueData[value] || valueData.dignidad;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-icon-container">
          <div className="modal-icon-circle">
            <img 
              src={process.env.PUBLIC_URL + currentValue.icon} 
              alt={currentValue.title} 
              className="modal-icon-image" 
            />
          </div>
        </div>
        
        <h2 className="modal-title">{currentValue.title}</h2>
        
        <p className="modal-description">{currentValue.description}</p>
      </div>
    </div>
  );
};

export default ValueModal;
