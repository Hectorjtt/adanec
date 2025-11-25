/**
 * Script para subir videos a Cloudflare R2
 * 
 * Requisitos:
 * 1. Instalar dependencias: npm install @aws-sdk/client-s3 dotenv
 * 2. Crear archivo .env con las credenciales de R2
 * 3. Ejecutar: npm run upload-videos
 */

require('dotenv').config();
const { S3Client, PutObjectCommand, ListObjectsV2Command } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');

// Configuración de R2 (compatible con S3)
const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

const BUCKET_NAME = process.env.R2_BUCKET_NAME;

// Función para subir un archivo
async function uploadFile(filePath, key) {
  try {
    const fileContent = fs.readFileSync(filePath);
    const contentType = path.extname(filePath) === '.mp4' ? 'video/mp4' : 'application/octet-stream';

    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: fileContent,
      ContentType: contentType,
    });

    await r2Client.send(command);
    console.log(`✅ Subido: ${key}`);
    return true;
  } catch (error) {
    console.error(`❌ Error subiendo ${key}:`, error.message);
    return false;
  }
}

// Función para subir todos los videos de una carpeta
async function uploadVideosFromFolder(folderPath, r2Prefix) {
  const fullPath = path.join(__dirname, '..', folderPath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Carpeta no encontrada: ${fullPath}`);
    return;
  }

  const files = fs.readdirSync(fullPath);
  const videoFiles = files.filter(file => file.endsWith('.mp4'));

  if (videoFiles.length === 0) {
    console.log(`⚠️  No se encontraron videos en: ${folderPath}`);
    return;
  }

  console.log(`\n📁 Subiendo videos de ${folderPath}...`);
  console.log(`   Encontrados ${videoFiles.length} videos\n`);

  for (const videoFile of videoFiles) {
    const localPath = path.join(fullPath, videoFile);
    const r2Key = `${r2Prefix}/${videoFile}`;
    await uploadFile(localPath, r2Key);
  }
}

// Función principal
async function main() {
  console.log('🚀 Iniciando subida de videos a Cloudflare R2...\n');

  // Verificar variables de entorno
  if (!process.env.R2_ACCOUNT_ID || !process.env.R2_ACCESS_KEY_ID || 
      !process.env.R2_SECRET_ACCESS_KEY || !process.env.R2_BUCKET_NAME) {
    console.error('❌ Error: Faltan variables de entorno en .env');
    console.error('   Necesitas: R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME');
    process.exit(1);
  }

  // Subir videos de testimonios
  await uploadVideosFromFolder('public/videos', 'videos');

  // Subir videos de campañas y eventos
  await uploadVideosFromFolder('public/campañas-eventos', 'campañas-eventos');

  console.log('\n✨ ¡Proceso completado!');
  console.log('\n📝 Próximos pasos:');
  console.log('   1. Configura REACT_APP_R2_PUBLIC_URL en tu .env');
  console.log('   2. Si usas un dominio personalizado, configúralo en Cloudflare R2');
  console.log('   3. Reinicia tu aplicación React');
}

main().catch(console.error);



