// Array kategori utama
const kategoriUtama = ['e book', 'live class', 'trading', 'research', 'crypto'];

// Array gambar dan judul
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
];

const judulModul = [
  'Cara Mencari Altcoin 10x', 'Live Class AI SuperCycle', 'The Art of Crypto Trading',
  'Bitcoin Anonymity', 'Bitcoin Transaction in Depth', 'Blockchain Interoperabillity',
  'Blockchain Oracles', 'Blockchain Trilemma', 'Live Class BTC to Alts Switching timing',
  'Consemsus: Proof of ... and Security Premises', 'Cross-Chain Technology', 'Crypto Fundamentals',
  'Crypto Security', 'Crypto Harmonic Trading', 'Crypto Investing',
  'Crypto Investing Alpha', 'Crypto Investing Guides', 'Crypto Investing Strategy',
  'Crypto Investing Tools', 'Crypto Money Psychology', 'Crypto Order Flow',
  'Crypto Research', 'Crypto Self-Custody', 'Crypto Smart Money',
  'Crypto Technical Indicators', 'Crypto Spot Trading', 'Crypto Trading Psychology',
  'Crypto Wyckoff Trading', 'DEX Trading Tutorial', 'Digital Money And Double Spending',
  'Ethereum: Programmable Money', 'Crypto Order Flow', 'E book Crypto Trading Guide',
  'Kamus Pattern Crypto', 'Keys, Wallet, & How They Work', 'Kopi Darat Akademi Crypto',
  'Live class Kuliah Crypto', 'Layer 2: Rollups', 'Margin Call Khusus Member',
  'Crypto Market Outlook 2025', 'Crypto Harmonic Trading', 'Crypto Smart Money',
  'E book Mastering Altcoins', 'Live Class Mastering Altcoin', 'Monero Anonymity',
  'Narratives for 2024 Bull Run', 'Crypto Narrative Research', 'Token Unlock Trading Strategy',
  'Live Class Octobull', 'E book Crypto Investing Principles', '2025 Crypto Regulation',
  'Live class Riding The Crypto Super Mega Cycle', 'Sales Mastery', 'Crypto Investing Principles',
  'E book Crypto Smart Money', 'Smart Contract Development', 'Smart Contract Security',
  'Strategi Jadi Milliarder', 'Live ClassTrading Dapetin 100 Juta Pertama', 'E book Trading Psychology',
  'Live Class 10x Your Portofolio This Bullrun', 'Cara Screening Altcoin dari 0', 'Security Issues',
  '2030 The Great Reset', 'Smart Contract And Security Tokens', 'Gagal memuat modul',
  'Types of Accounts', 'US Election Market Outlook', 'UTXO Model vs Account Model',
  'What is a Smart Contract', 'Crypto Fibonacci Secret', 'Gagal memuat modul',
];

// Ambil container
const modulContainer = document.getElementById('modul-container');
const row1 = document.getElementById('row-1');
const row2 = document.getElementById('row-2');
const row3 = document.getElementById('row-3');

// Generate modul
gambarModul.forEach((gambar, index) => {
  const divModul = document.createElement('div');
  divModul.classList.add('modul');

  const judul = judulModul[index] || `Modul Kripto ${index + 1}`;
  const lowerJudul = judul.toLowerCase();
  const kategori = kategoriUtama.find(k => lowerJudul.includes(k)) || 'other';

  divModul.setAttribute('data-title', lowerJudul);
  divModul.setAttribute('data-kategori', kategori);

  const img = document.createElement('img');
  img.src = gambar;
  img.alt = judul;
  img.style.width = '100%';

  const h3 = document.createElement('h3');
  h3.innerText = judul;

  divModul.appendChild(img);
  divModul.appendChild(h3);

  // Desktop
  modulContainer.appendChild(divModul);

  // Mobile rows
  const cloned = divModul.cloneNode(true);
  if (index % 3 === 0) {
    row1.appendChild(cloned);
  } else if (index % 3 === 1) {
    row2.appendChild(cloned);
  } else {
    row3.appendChild(cloned);
  }
});

// Search & Filter
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', applyFilter);
document.querySelectorAll('#kategori-filter li').forEach(li => {
  li.addEventListener('click', function () {
    document.querySelectorAll('#kategori-filter li').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
    applyFilter();
  });
});

function applyFilter() {
  const keyword = searchInput.value.toLowerCase();
  const kategoriAktif = document.querySelector('#kategori-filter .active')?.getAttribute('data-kategori') || 'all';

  document.querySelectorAll('.modul').forEach(modul => {
    const title = modul.getAttribute('data-title');
    const kategoriModul = modul.getAttribute('data-kategori');

    const cocokSearch = title.includes(keyword);
    const cocokKategori = kategoriAktif === 'all' || kategoriModul === kategoriAktif;

    modul.style.display = (cocokSearch && cocokKategori) ? 'block' : 'none';
  });
}
