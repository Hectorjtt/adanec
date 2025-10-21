import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Noticias from './components/Noticias';
import QuienesSomos from './components/QuienesSomos';
import Transparencia from './components/Transparencia';
import Clinica from './components/Clinica';
import Dona from './components/Dona';
import Contactanos from './components/Contactanos';
import Footer from './components/Footer';
import IndicadorPagina from './components/IndicadorPagina';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    // Intentar obtener desde localStorage o URL, por defecto 'inicio'
    const savedPage = localStorage.getItem('currentPage');
    const hash = window.location.hash.substring(1);
    return hash || savedPage || 'inicio';
  });

  // Guardar la página actual en localStorage y actualizar la URL
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
    window.location.hash = currentPage;
  }, [currentPage]);

  // Hacer scroll hacia arriba cuando cambie la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Manejar cambios en la URL cuando el usuario navega con la barra de dirección
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && hash !== currentPage) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'inicio':
        return <Inicio setCurrentPage={setCurrentPage} />;
      case 'noticias':
        return <Noticias />;
      case 'transparencia':
        return <Transparencia />;
      case 'quienes-somos':
        return <QuienesSomos />;
      case 'clinica':
        return <Clinica />;
      case 'dona':
        return <Dona />;
      case 'contactanos':
        return <Contactanos />;
      default:
        return <Inicio setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="relative">
        <IndicadorPagina currentPage={currentPage} />
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
