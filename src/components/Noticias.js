import React from 'react';
import FechasRelevantes from './FechasRelevantes';
import CampanasEventos from './CampanasEventos';

const Noticias = () => {
  return (
    <div className="noticias-page">
      <FechasRelevantes />
      <CampanasEventos />
    </div>
  );
};

export default Noticias;
