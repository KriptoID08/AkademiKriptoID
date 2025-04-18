const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

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
