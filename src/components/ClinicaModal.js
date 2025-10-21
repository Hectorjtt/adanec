import React from 'react';
import './ClinicaModal.css';

const ClinicaModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-icon-container">
          <div className={`modal-icon-circle ${content.title === '¿Se pueden curar?' ? 'modal-heart-background' : ''}`}>
            <img 
              src={process.env.PUBLIC_URL + content.icon} 
              alt={content.title} 
              className="modal-icon-image" 
            />
          </div>
        </div>
        
        <h2 className="modal-title">{content.title}</h2>
        
        <p className="modal-description">{content.description}</p>
      </div>
    </div>
  );
};

export default ClinicaModal;


