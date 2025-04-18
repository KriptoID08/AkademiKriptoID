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
  'images/modul (70).jpg', 'images/modul (71).jpg', 'images/ibuk.jpeg',
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
  'UTXO Model vs Account Model', 'What is a Smart Contract', '100+ E-Book Tentang Investasi',
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
  'Smart Contract And Security', 'Live Class', 'Smart Contract And Security', 'Smart Contract And Security', 'E Book','Blockchain Technology',
];

// Array link YouTube untuk setiap modul
const youtubeLinks = [
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkR0YG-DjruO4JCXRqX49smy', 
  '', 
  'https://www.youtube.com/watch?v=xLHo4Bsc6GI',
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQXePTmW6W_diad21w51z3Y', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQe6TAVs9JSZA8MUablgI53', 
  'https://www.youtube.com/watch?v=qGz-Xvd1Ino', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkSc7jlBxPbLCQz15nC7TF3A', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkRMN8cT3ayvHW5QSktpcZY4', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkTfrsBywgQoFOgTsxXVX5uX', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkSvkLu0dbp4IeId43vvNahl', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkTzy3oLzGVsxOZEs83i5FdD', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQn_UfP0iKtPn7noK1wX3RT', 
  'https://www.youtube.com/watch?v=NSDsnoD7L5c', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQbhfROXcOUNWKSg0Xtviik', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkTz1unLivD9WE2vVCi1iPqd', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkSX4m6Ai7I6-G-ZVwJ34Jbk', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkT5CyMokqqvnfbz7cCANEIf', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkTA7R16GuLHJCclg8YDE-F5', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkR5FlKi_LUpeByO_XYUg2HG', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQ0AmpJ6ZQAONsFC9P4ICPo', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQSQv_b0lmx-MpAehS_i943', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkS4_pIcxNHO-xTHYJroSVmq', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQqOhQqJzgNOfABfqDDkSnu', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkTq1Y05AAKuJHjay2Ox5-G5', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkSLvSG3eOhFZSbg5NCJjHy4', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQ9uaFae78dyUQIQCqBDuL0', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQ2ZvwjsNJqzHxPMzOHsqeY', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkSjFvK-EsAxVEqIM0E7cEwx', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkTkQfZFKlN7LTuErnCDxGSk', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkSW_Ln6qn8YlhFO1YpNxlgA', 
  'https://www.youtube.com/watch?v=Sz9BJzwP_98', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQJOkiNWJu8NtD40fUegcZe', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkSq5ArXxxCBo02EWes4Rawp', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkTyoODXGPPClW-b_jQkKE9X', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkT56nVEJiQz7tRyoC6kE5Oq', 
  'https://www.youtube.com/watch?v=LWd2d4O0YQY', 
  'https://drive.google.com/file/d/1acE6k2fKifSqi6hk_SCjVuktDCjep6aP/view',
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQ3zJrpA2l_POSXmq4dZrTv', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkRI2Np0SHo8E4Pr2EuOBCHR', 
  'https://www.youtube.com/watch?v=F-Wu24Ppx8k', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkS4tAzW6rIx5yW8Pi4NZua-', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkT5XG1DvuE7gF4wO3rDEqWl', 
  'https://www.youtube.com/watch?v=ZDnIJunBB-A', 
  'https://www.youtube.com/watch?v=CSEGkBTAFvI', 
  'https://www.youtube.com/watch?v=IVpagLD5fXI', 
  'https://www.youtube.com/watch?v=eqwtVcW9rI4', 
  'https://drive.google.com/file/u/1/d/1BPYTgwq6QxD9Ojo-PHPIBmlHSmjT-Eph/view?usp=drivesdk', 
  'https://www.youtube.com/watch?v=9Yfdc8ALR5A', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQIJ4LzQgSxQEpR6xNMPUt5', 
  'https://www.youtube.com/watch?v=D68XtnGuwVA', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkRyIifhLD_aSoI8i667P-lt', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkSLNB0rb543lwOgfpr33o-l', 
  'https://www.youtube.com/watch?v=oaK71Ar3fjE', 
  'https://drive.google.com/file/d/1acnJl-Lu-HR6jTZp-h3VsMkuTzxLCg-Y/view', 
  'https://www.youtube.com/watch?si=8YnocBpuPy1M3DnE&v=WzXHL9cfSko&feature=youtu.be', 
  'https://www.youtube.com/watch?si=juIyko6h7p7Uutvl&v=aObCLswItww&feature=youtu.be', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkR_axjnn8ocScFYtTLDQp08', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkRYwMEgIbFQgRvUAxT29H2C', 
  'https://drive.google.com/file/d/1cEwqBoLQzkxA_WAa0lgLW0STVuKOdBr0/view?usp=drivesdk', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQoSi4_cEe8sWlBdGM5BOJx', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQ9BATsPJRWyNRu5acx_8hl', 
  'https://www.youtube.com/watch?si=VQflay_1E61CIZiH&v=zFz6tVbQaD0&feature=youtu.be', 
  'https://www.youtube.com/watch?v=oYYfuxkXc8E&list=PL1hlgGm52pkSs8IIOw_RbcvStT95THLmv&index=4', 
  'https://drive.google.com/file/d/1ztF-QGPQdWPFw1jXVrgp0c8u3GN4v0hG/view?usp=sharing', 
  'https://www.youtube.com/watch?v=Zpp4ja9DOFo', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQWYCkR7wKpE1Dd48V2DHff', 
  'https://youtu.be/dQw4w9WgXcQ', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQ2Wn9wTM-2KDfnIisgNfIo', 
  'https://www.youtube.com/watch?v=lR9sISGi-Mk', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkS-sRyPe6KWPYsuzzdRI-wf', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQX_hJaqiidqKyQ89GbbuCb', 
  'https://drive.google.com/drive/folders/1hcVU_iOEG_-v5SwHAJulLTPYXdpRE3pt', 
  'https://www.youtube.com/playlist?list=PL1hlgGm52pkQIJ4LzQgSxQEpR6xNMPUt5',  
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

// Fungsi untuk pencarian
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', applySearchFilter);

function applySearchFilter() {
  const keyword = searchInput.value.toLowerCase();

  // Menyaring modul berdasarkan pencarian
  document.querySelectorAll('.modul').forEach(modul => {
    const title = modul.querySelector('h3').innerText.toLowerCase();
    if (title.includes(keyword)) {
      modul.style.display = 'block'; // Menampilkan modul yang cocok dengan pencarian
    } else {
      modul.style.display = 'none'; // Menyembunyikan modul yang tidak cocok
    }
  });
}

function applyFilter() {
  const kategoriAktif = document.querySelector('#kategori-filter .active')?.getAttribute('data-kategori') || 'all';

  document.querySelectorAll('.modul').forEach(modul => {
    const kategoriModul = modul.getAttribute('data-kategori');
    modul.style.display = (kategoriAktif === 'all' || kategoriModul === kategoriAktif) ? 'block' : 'none';
  });
}

// Inisialisasi tampilan modul
generateModul();
