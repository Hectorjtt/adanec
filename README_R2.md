# Guía para subir videos a Cloudflare R2

Esta guía te ayudará a configurar Cloudflare R2 para alojar los videos del proyecto y reducir el tamaño del repositorio.

## 📋 Requisitos previos

1. Una cuenta de Cloudflare
2. Un bucket de R2 creado
3. Credenciales de API de R2

## 🔧 Paso 1: Configurar Cloudflare R2

### 1.1 Crear un bucket en R2

1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navega a **R2** en el menú lateral
3. Haz clic en **Create bucket**
4. Nombra tu bucket (ej: `adanec-videos`)
5. Selecciona la ubicación (región)

### 1.2 Crear credenciales de API

1. En la página de R2, ve a **Manage R2 API Tokens**
2. Haz clic en **Create API Token**
3. Configura:
   - **Token name**: `adanec-videos-upload`
   - **Permissions**: Object Read & Write
   - **TTL**: (opcional, puedes dejarlo sin límite)
4. Haz clic en **Create API Token**
5. **IMPORTANTE**: Copia y guarda:
   - **Access Key ID**
   - **Secret Access Key**
   - **Account ID** (lo encuentras en la URL o en la configuración del bucket)

### 1.3 Configurar dominio público (opcional pero recomendado)

Para que los videos sean accesibles públicamente:

1. En tu bucket, ve a **Settings** > **Public Access**
2. Configura un dominio personalizado o usa el dominio R2 por defecto
3. Anota la URL pública (ej: `https://videos.tudominio.com` o `https://[account-id].r2.cloudflarestorage.com`)

## 📦 Paso 2: Instalar dependencias

Ejecuta en la terminal:

```bash
npm install @aws-sdk/client-s3 dotenv
```

## 🔐 Paso 3: Configurar variables de entorno

1. Crea un archivo `.env` en la raíz del proyecto (si no existe)
2. Agrega las siguientes variables:

```env
# Cloudflare R2 - Credenciales para subir videos
R2_ACCOUNT_ID=tu_account_id_aqui
R2_ACCESS_KEY_ID=tu_access_key_id_aqui
R2_SECRET_ACCESS_KEY=tu_secret_access_key_aqui
R2_BUCKET_NAME=adanec-videos

# Cloudflare R2 - URL pública para acceder a los videos
REACT_APP_R2_PUBLIC_URL=https://tu-dominio.r2.cloudflarestorage.com
# O si usas dominio personalizado:
# REACT_APP_R2_PUBLIC_URL=https://videos.tudominio.com
```

**⚠️ IMPORTANTE**: 
- El archivo `.env` ya está en `.gitignore`, así que no se subirá a GitHub
- **NUNCA** subas tus credenciales a GitHub

## 🚀 Paso 4: Subir videos a R2

Ejecuta el script de subida:

```bash
npm run upload-videos
```

Este script:
- Subirá todos los videos de `public/videos/` a R2
- Subirá todos los videos de `public/campañas-eventos/` a R2
- Mostrará el progreso de cada archivo

## ✅ Paso 5: Verificar que funciona

1. Reinicia tu aplicación React:
   ```bash
   npm start
   ```

2. Navega a las secciones que muestran videos:
   - Página de Clínica (testimonios)
   - Página de Noticias (campañas y eventos)

3. Verifica que los videos se carguen correctamente desde R2

## 🗑️ Paso 6: Eliminar videos locales (opcional)

Una vez que verifiques que todo funciona correctamente, puedes eliminar los videos locales para reducir el tamaño del repositorio:

```bash
# Hacer backup primero (recomendado)
mkdir -p backup-videos
cp -r public/videos backup-videos/
cp -r public/campañas-eventos backup-videos/

# Eliminar videos locales
rm -rf public/videos/*.mp4
rm -rf public/campañas-eventos/*.mp4
```

**Nota**: Los videos ya están en `.gitignore`, así que no se subirán a GitHub de todas formas.

## 🔄 Actualizar videos en el futuro

Si necesitas agregar o actualizar videos:

1. Coloca los nuevos videos en las carpetas correspondientes:
   - `public/videos/` para testimonios
   - `public/campañas-eventos/` para campañas

2. Ejecuta nuevamente:
   ```bash
   npm run upload-videos
   ```

3. Actualiza el código si es necesario (agregar nuevos nombres de videos en los componentes)

## 🐛 Solución de problemas

### Los videos no se cargan

1. Verifica que `REACT_APP_R2_PUBLIC_URL` esté correctamente configurado en `.env`
2. Verifica que el dominio público esté configurado en R2
3. Verifica que los videos estén en el bucket con las rutas correctas
4. Revisa la consola del navegador para ver errores de CORS

### Error de CORS

Si ves errores de CORS, configura CORS en tu bucket de R2:

1. Ve a tu bucket en Cloudflare
2. Configura CORS para permitir tu dominio
3. O usa un dominio personalizado con Cloudflare

### El script de subida falla

1. Verifica que todas las variables de entorno estén configuradas
2. Verifica que las credenciales sean correctas
3. Verifica que el bucket exista y tengas permisos

## 📝 Notas importantes

- Los videos seguirán funcionando localmente si no configuras `REACT_APP_R2_PUBLIC_URL` (modo desarrollo)
- Una vez configurado R2, los videos se cargarán desde la nube
- El código está preparado para funcionar tanto con archivos locales como con R2
- Los videos están en `.gitignore`, así que no se subirán a GitHub



