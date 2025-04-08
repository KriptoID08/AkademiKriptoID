const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware untuk proteksi password (Basic Auth)
app.use((req, res, next) => {
  const auth = { login: 'KriptoID', password: 'gaboleh share' }; // Ganti sesuai kebutuhan

  // Ambil Authorization header
  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

  // Cek apakah username & password cocok
  if (login === auth.login && password === auth.password) {
    return next(); // Lanjut ke route berikutnya
  }

  // Kalau gagal, minta autentikasi
  res.set('WWW-Authenticate', 'Basic realm="KriptoID Access Area"');
  res.status(401).send('Authentication required.');
});

// Menyajikan folder 'images' sebagai file statis
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname)));

// Endpoint utama untuk menyajikan file HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
