// Array kategori utama
const kategoriUtama = ['E Book', 'Crypto Investing', 'Bitcoin', 'D`app', 'Live Class', 'Crypto Trading', 'Blockchain Fundamental', 'Blockchain Technology', 'Smart Contract And Security'];

// Array gambar, judul, dan link YouTube untuk setiap modul
const gambarModul = [
  'images/modul (1).jpg', 'images/modul (2).jpg', 'images/modul (3).jpg',
  'images/modul (4).jpg', 'images/modul (5).jpg', 'images/modul (6).jpg',
  'images/modul (7).jpg', 'images/modul (8).jpg', 'images/modul (9).jpg',
  'images/modul (10).jpg', 'images/modul (11).jpg', 'images/modul (12).jpg',
  'images/modul (13).jpg', 'images/modul (14).jpg', 'images/modul (15).jpg',
  'images/modul (16).jpg', 'images/modul (17).jpg', 'images/modul (18).jpg',
  'images/modul (19).jpg', 'images/modul (20).jpg', 'images/modul (21).jpg',
  'images/modul (22).jpg', 'images/modul (23).jpg', 'images/modul (24).jpg',
  'images/modul (25).jpg', 'images/modul (26).jpg', 'images/modul (27).jpg',
  'images/modul (28).jpg', 'images/modul (29).jpg', 'images/modul (30).jpg',
  'images/modul (31).jpg', 'images/modul (32).jpg', 'images/modul (33).jpg',
  'images/modul (34).jpg', 'images/modul (35).jpg', 'images/modul (36).jpg',
  'images/modul (37).jpg', 'images/modul (38).jpg', 'images/modul (39).jpg',
  'images/modul (40).jpg', 'images/modul (41).jpg', 'images/modul (42).jpg',
  'images/modul (43).jpg', 'images/modul (44).jpg', 'images/modul (45).jpg',
  'images/modul (46).jpg', 'images/modul (47).jpg', 'images/modul (48).jpg',
  'images/modul (49).jpg', 'images/modul (50).jpg', 'images/modul (51).jpg',
  'images/modul (52).jpg', 'images/modul (53).jpg', 'images/modul (54).jpg',
  'images/modul (55).jpg', 'images/modul (56).jpg', 'images/modul (57).jpg',
  'images/modul (58).jpg', 'images/modul (59).jpg', 'images/modul (60).jpg',
  'images/modul (61).jpg', 'images/modul (62).jpg', 'images/modul (63).jpg',
  'images/modul (64).jpg', 'images/modul (65).jpg', 'images/modul (66).jpg',
  'images/modul (67).jpg', 'images/modul (68).jpg', 'images/modul (69).jpg',
  'images/modul (70).jpg', 'images/modul (71).jpg', 'images/modul (72).jpg',
  'images/kriptoid.jpeg',
];

const judulModul = [
  'Crypto Fibonacci Secret', 'Cara Mencari Altcoin Yang Minimal Akan Naik 10x', '10x Your Portofolio This Bullrun',
  'Cara Screening Altcoin dari 0', 'Security Issues', 'Menggandakan Portfolio di AI Supercycle',
  'The Art Of Crypto Trading', 'Bitcoin Anonymity', 'Bitcoin Transaction In Depth',
  'Blockchain Interoperability', 'Blockchain Oracles', 'Blockchain Trilemma',
  'BTC to Alts Switching Timing', 'Consensus: Proof of ... And Security Premises', 'Cross-Chain Technology',
  'Cryptocurrency Fundamentals', 'Cryptocurrency Security', 'Crypto Harmonic Trading',
  'Crypto Investing', 'Crypto Investing Alpha', 'Crypto Investing Guides',
  'Crypto Investing Strategy', 'Crypto Investing Tools', 'Crypto Money Psychology',
  'Crypto Order Flow', 'Crypto Research', 'Crypto Self-Custody',
  'Crypto Smart Money', 'Crypto Technical Indicators', 'Crypto Spot Trading',
  'Crypto Trading Psychology', 'Crypto Wyckoff Trading', 'DEX Trading Tutorial',
  'Digital Money and Double Spending', 'Ethereum: Programmable Money', 'Crypto Order Flow',
  'Crypto Trading Guide', 'Kamus Pattern Crypto', 'Keys, Wallets, & How They Work',
  'Kopi Darat Akademi Crypto', 'Kuliah Crypto', 'Layer 2: Rollups',
  'Margin Call Khusus Member', 'Crypto Market Outlook 2025', 'Crypto Harmonic Trading',
  'Cryoto Smart Money', 'Mastering Altcoins', 'Mastering Altcoin',
  'Monero: Anonymity', 'Narratives for 2024 Bull Run', 'Narrative Research',
  'Token Unlock Trading Strategy', 'Octobull', 'Crypto Investing Principles',
  '2025 Crypto Regulation', 'Riding The Crypto Super Mega Cycle', 'Sales Mastery',
  'Crypto Investing Principles', 'Crypto Smart Money', 'Smart Contract Development',
  'Smart Contract Security', 'Strategi Jadi Milliarder Dari Crypto', 'Strategi Trading Crypto Untk Dapetin 100 Juta Pertama dari 0',
  'Crypto Trading Psychology', '2030 The Great Reset', 'Tokens',
  'Gagal memuat modul', 'Types of Accounts', 'US Election Market Outlook',
  'UTXO Model vs Account Model', 'What is a Smart Contract', 'Gagal memuat modul',
  'Monero Anomynity'
];

// Menentukan kategori manual untuk setiap modul
const kategoriModul = [
  'Crypto Trading', 'Live Class', 'Live Class', 'Crypto Trading', 'Smart Contract And Security', 'Live Class',
  'Live Class', 'Bitcoin', 'Blockchain Technology', 'Blockchain Technology', 'DApp', 'Blockchain Fundamental',
  'Live Class', 'Blockchain Fundamental', 'DApp', 'Blockchain Technology', 'Blockchain Technology', 'Crypto Trading',
  'Crypto Investing', 'Crypto Investing', 'Crypto Investing', 'Crypto Investing', 'Crypto Investing', 'Crypto Trading',
  'Crypto Trading', 'Blockchain Technology', 'Crypto Investing', 'Crypto Trading', 'Crypto Trading', 'Crypto Trading',
  'Live Class', 'Crypto Trading', 'Crypto Trading', 'Blockchain Fundamental', 'Blockchain Technology', 'Live Class',
  'E Book', 'Crypto Trading', 'Blockchain Fundamental', 'Live Class', 'Live Class', 'Smart Contract And Security',
  'Live Class', 'Live Class', 'Live Class', 'Live Class', 'E Book', 'Live Class', 'Blockchain Technology',
  'Live Class', 'Crypto Trading', 'Crypto Trading', 'Live Class', 'E Book', 'Live Class',
  'Live Class', 'Live Class', 'Crypto Investing', 'E Book', 'Blockchain Technology', 'Blockchain Technology',
  'Live Class', 'Crypto Trading', 'E Book', 'Live Class', 'Smart Contract And Security', 'Live Class',
  'Smart Contract And Security', 'Live Class', 'Smart Contract And Security', 'Live Class', 'Blockchain Technology',
];

// Array link YouTube untuk setiap modul
const youtubeLinks = [
  'https://www.youtube.com/watch?v=xxxxxxxxxxx', 
  'https://www.youtube.com/watch?v=xxxxxxxxxxx', 
  'https://www.youtube.com/watch?v=xxxxxxxxxxx', 
  // Tambahkan link YouTube sesuai indeks modul
];

// Ambil container untuk modul
const modulContainer = document.getElementById('modul-container');

// Fungsi untuk menghasilkan modul
function generateModul() {
  // Clear modul yang ada sebelumnya
  modulContainer.innerHTML = '';

  gambarModul.forEach((gambar, index) => {
    const divModul = document.createElement('div');
    divModul.classList.add('modul');

    const judul = judulModul[index] || `Modul Kripto ${index + 1}`;
    const kategori = kategoriModul[index];  // Menggunakan kategori manual yang ditentukan

    divModul.setAttribute('data-title', judul.toLowerCase());
    divModul.setAttribute('data-kategori', kategori);

    const img = document.createElement('img');
    img.src = gambar;
    img.alt = judul;

    const h3 = document.createElement('h3');
    h3.innerText = judul;

    // Membungkus gambar dan judul dengan tag <a> untuk link YouTube
    const link = document.createElement('a');
    link.href = youtubeLinks[index];  // Link YouTube sesuai indeks
    link.target = "_blank";  // Membuka link di tab baru

    // Menambahkan gambar dan judul ke dalam link
    link.appendChild(img);
    link.appendChild(h3);

    divModul.appendChild(link);

    modulContainer.appendChild(divModul);
  });
}

// Fungsi untuk filter berdasarkan kategori yang dipilih
document.querySelectorAll('#kategori-filter li').forEach(li => {
  li.addEventListener('click', function () {
    document.querySelectorAll('#kategori-filter li').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
    applyFilter();
  });
});

function applyFilter() {
  const kategoriAktif = document.querySelector('#kategori-filter .active')?.getAttribute('data-kategori') || 'all';

  document.querySelectorAll('.modul').forEach(modul => {
    const kategoriModul = modul.getAttribute('data-kategori');
    modul.style.display = (kategoriAktif === 'all' || kategoriModul === kategoriAktif) ? 'block' : 'none';
  });
}

// Inisialisasi tampilan modul
generateModul();
