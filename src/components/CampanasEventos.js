import React from 'react';
import './CampanasEventos.css';

const CampanasEventos = () => {
  const eventos = [
    {
      titulo: 'DONATIVO MINDRAY SIMULADOR FETAL',
      video: 'donativo medicina fetal video.mp4',
      tipo: 'donativo'
    },
    {
      titulo: '30° ANIVERSARIO ADANEC',
      subtitulo: 'PEQUEÑOS CORAZONES ADANEC',
      video: '30 aniversario video.mp4',
      tipo: 'aniversario'
    },
    {
      titulo: 'RUBA RACE 2025',
      subtitulo: 'A BENEFICIO DE ADANEC',
      video: 'ruba race donativo.mp4',
      tipo: 'evento'
    },
    {
      titulo: 'CAMPAÑA DIAGNÓSTICO ACAPULCO MAR-25',
      video: 'campaña diagnostico acapulco video.mp4',
      tipo: 'campaña'
    },
    {
      titulo: 'CAMPAÑA CIRUGÍAS TOLUCA MAR-25',
      video: 'campaña cirugias toluca video.mp4',
      tipo: 'campaña'
    },
    {
      titulo: 'CAMPAÑA SALTILLO DIF',
      video: 'campaña saltillo DIF video.mp4',
      tipo: 'campaña'
    },
    {
      titulo: 'COLEGIO LATIN',
      video: 'colegio latin video.mp4',
      tipo: 'evento'
    },
    {
      titulo: 'HIMALAYA',
      video: 'himalaya.mp4',
      tipo: 'evento'
    }
  ];

  return (
    <section className="campanas-eventos">
      <h2 className="section-title">Campañas y eventos</h2>
      
      <div className="eventos-grid">
        {eventos.map((evento, index) => (
          <div key={index} className="evento-card">
            <div className="evento-video">
              <video 
                className="evento-video-player"
                controls
                preload="metadata"
                onLoadedMetadata={(e) => {
                  const video = e.target;
                  video.currentTime = 0.1;
                }}
                onSeeked={(e) => {
                  const video = e.target;
                  if (!video.poster) {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    video.poster = canvas.toDataURL('image/jpeg', 0.8);
                  }
                }}
              >
                <source src={`/campañas-eventos/${evento.video}`} type="video/mp4" />
                Tu navegador no soporta el elemento video.
              </video>
            </div>
            <div className="evento-info">
              <h3 className="evento-titulo">{evento.titulo}</h3>
              {evento.subtitulo && (
                <p className="evento-subtitulo">{evento.subtitulo}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampanasEventos;
