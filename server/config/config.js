//=====================
// Puerto
//=====================
process.env.PORT = process.env.PORT || 3000;

//=====================
// Entorno
//=====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=====================
// Vencimiento del token
//=====================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//=====================
// SEED de autenticación
//=====================
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';

//=====================
// Base de Datos
//=====================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//=====================
// Google Client ID
//=====================

process.env.CLIENT_ID = process.env.CLIENT_ID || '830394319989-hqkb54pdohe00g7677ktar75a1e4m5o3.apps.googleusercontent.com';