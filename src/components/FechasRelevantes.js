import React from 'react';
import './FechasRelevantes.css';

const FechasRelevantes = () => {
  const fechas = [
    {
      dia: '10',
      mes: 'sept',
      titulo: 'Dia de todos los santos',
      color: '#e74c3c',
      imagen: '/calendarios/cal1.png'
    },
    {
      dia: '16',
      mes: 'sept',
      titulo: 'Día de Muertos',
      color: '#e74c3c',
      imagen: '/calendarios/cal2.png'
    },
    {
      dia: '20',
      mes: 'sept',
      titulo: 'Campaña Círugía Acapulco',
      color: '#e74c3c',
      imagen: '/calendarios/cal3.png'
    },
    {
      dia: '29',
      mes: 'sept',
      titulo: 'Día mundial de la diabetes',
      color: '#e74c3c',
      imagen: '/calendarios/cal4.png'
    }
  ];

  return (
    <section className="fechas-relevantes">
      <h2 className="section-title">Fechas relevantes</h2>
      <p className="section-subtitle">
        Mantente informado sobre las fechas más relevantes y nuestras actividades especiales.
      </p>
      
      <div className="fechas-grid">
        {fechas.map((fecha, index) => (
          <div key={index} className="fecha-card">
            <div className="calendario-imagen-container">
              <img 
                src={fecha.imagen} 
                alt={`Calendario ${fecha.titulo}`}
                className="calendario-imagen"
              />
            </div>
            <h3 className="fecha-titulo">{fecha.titulo}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FechasRelevantes;
