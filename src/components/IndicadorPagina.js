import React from 'react';
import './IndicadorPagina.css';

const IndicadorPagina = ({ currentPage }) => {
  // No mostrar el indicador en la página de inicio
  if (currentPage === 'inicio') {
    return null;
  }

  const getIndicatorText = () => {
    switch(currentPage) {
      case 'noticias':
        return 'NOTICIAS';
      case 'transparencia':
        return 'TRANSPARENCIA';
      case 'quienes-somos':
        return 'QUIÉNES SOMOS';
      case 'clinica':
        return 'CLÍNICA';
      case 'contactanos':
        return 'CONTÁCTANOS';
      case 'dona':
        return 'HAZ TU DONATIVO';
      default:
        return 'NOTICIAS';
    }
  };

  const getIndicatorClass = () => {
    switch(currentPage) {
      case 'noticias':
        return 'noticias-indicator';
      case 'transparencia':
        return 'transparencia-indicator';
      case 'quienes-somos':
        return 'quienes-indicator';
      case 'clinica':
        return 'clinica-indicator';
      case 'contactanos':
        return 'contactanos-indicator';
      case 'dona':
        return 'dona-indicator';
      default:
        return 'noticias-indicator';
    }
  };

  return (
    <div className={`page-indicator ${getIndicatorClass()}`}>
      {getIndicatorText()}
    </div>
  );
};

export default IndicadorPagina;
