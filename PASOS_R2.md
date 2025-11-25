# 🚀 Pasos Rápidos para Configurar Cloudflare R2

## ✅ Lo que ya está hecho:

1. ✅ Código actualizado para usar R2 (funciona con archivos locales si R2 no está configurado)
2. ✅ Script de subida creado
3. ✅ Videos agregados a .gitignore (no se subirán a GitHub)
4. ✅ Archivos de configuración creados

## 📝 Pasos que TÚ debes hacer:

### 1. Instalar dependencias
```bash
npm install @aws-sdk/client-s3 dotenv
```

### 2. Crear cuenta y bucket en Cloudflare R2

1. Ve a https://dash.cloudflare.com/
2. Clic en **R2** en el menú
3. Clic en **Create bucket**
4. Nombre: `adanec-videos` (o el que prefieras)
5. Crea el bucket

### 3. Obtener credenciales

1. En R2, ve a **Manage R2 API Tokens**
2. Clic en **Create API Token**
3. Configura:
   - Name: `adanec-upload`
   - Permissions: **Object Read & Write**
4. Clic en **Create**
5. **COPIA Y GUARDA**:
   - Access Key ID
   - Secret Access Key
   - Account ID (está en la URL o en Settings del bucket)

### 4. Configurar dominio público

1. En tu bucket, ve a **Settings** > **Public Access**
2. Habilita acceso público
3. Anota la URL (ej: `https://[account-id].r2.cloudflarestorage.com`)
4. O configura un dominio personalizado si lo prefieres

### 5. Crear archivo .env

Crea un archivo `.env` en la raíz del proyecto con:

```env
R2_ACCOUNT_ID=tu_account_id_aqui
R2_ACCESS_KEY_ID=tu_access_key_id_aqui
R2_SECRET_ACCESS_KEY=tu_secret_access_key_aqui
R2_BUCKET_NAME=adanec-videos
REACT_APP_R2_PUBLIC_URL=https://tu-url-publica-aqui
```

### 6. Subir videos

```bash
npm run upload-videos
```

### 7. Probar

```bash
npm start
```

Ve a las páginas con videos y verifica que funcionen.

## 🎉 ¡Listo!

Ahora los videos están en R2 y tu repositorio es mucho más liviano.

**Nota**: Si no configuras R2, la app seguirá funcionando con los videos locales (modo desarrollo).



