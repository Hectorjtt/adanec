/**
 * Utilidad para obtener URLs de videos desde Cloudflare R2
 * Si REACT_APP_R2_PUBLIC_URL está configurado, usa R2
 * Si no, usa los archivos locales (para desarrollo)
 */

const getVideoUrl = (path, videoName) => {
  const r2BaseUrl = process.env.REACT_APP_R2_PUBLIC_URL;
  
  if (r2BaseUrl) {
    // Usar Cloudflare R2
    // Asegúrate de que la URL termine con / y que el path esté correcto
    const cleanBaseUrl = r2BaseUrl.endsWith('/') ? r2BaseUrl.slice(0, -1) : r2BaseUrl;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${cleanBaseUrl}${cleanPath}/${encodeURIComponent(videoName)}`;
  }
  
  // Fallback a archivos locales (desarrollo)
  return `${path}/${videoName}`;
};

export const getTestimonioVideoUrl = (videoName) => {
  return getVideoUrl('/videos', videoName);
};

export const getCampanaVideoUrl = (videoName) => {
  return getVideoUrl('/campañas-eventos', videoName);
};



