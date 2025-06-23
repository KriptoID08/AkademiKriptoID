// Array kategori utama
const kategoriUtama = ['Crypto Investing','D App', 'Live Class', 'Crypto Trading', 'Blockchain Fundamental', 'Blockchain Technology', 'Smart Contract And Security', 'Web3 Safety' , 'DePIN' , 'Bitcoin' , 'E Book'];

const modulList = [
  {
    judul: 'Crypto Fibonacci Secret',
    kategori: 'Crypto Trading',
    gambar: 'images/modul (1).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkR0YG-DjruO4JCXRqX49smy']
  },
  {
    judul: 'Cara Mencari Altcoin Yang Minimal Akan Naik 10x',
    kategori: 'Live Class',
    gambar: 'images/modul (2).jpg',
    links: ['https://www.youtube.com/watch?v=zFz6tVbQaD0&list=PL1hlgGm52pkQOw8z8vneRSlc-mBRW73aq&index=8']
  },
  {
    judul: '10x Your Portofolio This Bullrun',
    kategori: 'Live Class',
    gambar: 'images/modul (3).jpg',
    links: ['https://www.youtube.com/watch?v=xLHo4Bsc6GI']
  },
  {
    judul: 'Cara Screening Altcoin dari 0',
    kategori: 'Crypto Trading',
    gambar: 'images/modul (4).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQXePTmW6W_diad21w51z3Y']
  },
  {
    judul: 'Security Issues',
    kategori: 'Smart Contract And Security',
    gambar: 'images/modul (5).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQe6TAVs9JSZA8MUablgI53']
  },
  {
    judul: 'Menggandakan Portfolio di AI Supercycle',
    kategori: 'Live Class',
    gambar: 'images/modul (6).jpg',
    links: ['https://www.youtube.com/watch?v=qGz-Xvd1Ino']
  },
  {
    judul: 'The Art Of Crypto Trading',
    kategori: 'Live Class',
    gambar: 'images/modul (7).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkSc7jlBxPbLCQz15nC7TF3A']
  },
  {
    judul: 'Bitcoin Anonymity',
    kategori: 'Bitcoin',
    gambar: 'images/modul (8).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkRMN8cT3ayvHW5QSktpcZY4']
  },
  {
    judul: 'Bitcoin Transaction In Depth',
    kategori: 'Blockchain Technology',
    gambar: 'images/modul (9).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkTfrsBywgQoFOgTsxXVX5uX']
  },
  {
    judul: 'Blockchain Interoperability',
    kategori: 'Blockchain Technology',
    gambar: 'images/modul (10).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkSvkLu0dbp4IeId43vvNahl']
  },
  {
    judul: 'Blockchain Oracles',
    kategori: 'D App',
    gambar: 'images/modul (11).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkTzy3oLzGVsxOZEs83i5FdD']
  },
  {
    judul: 'Blockchain Trilemma',
    kategori: 'Blockchain Fundamental',
    gambar: 'images/modul (12).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQn_UfP0iKtPn7noK1wX3RT']
  },
  {
    judul: 'BTC to Alts Switching Timing',
    kategori: 'Live Class',
    gambar: 'images/modul (13).jpg',
    links: ['https://www.youtube.com/watch?v=NSDsnoD7L5c']
  },
  {
    judul: 'Consensus: Proof of ... And Security Premises',
    kategori: 'Blockchain Fundamental',
    gambar: 'images/modul (14).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQbhfROXcOUNWKSg0Xtviik']
  },
  {
    judul: 'Cross-Chain Technology',
    kategori: 'D App',
    gambar: 'images/modul (15).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkTz1unLivD9WE2vVCi1iPqd']
  },
  {
    judul: 'Cryptocurrency Fundamentals',
    kategori: 'Blockchain Technology',
    gambar: 'images/modul (16).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkSX4m6Ai7I6-G-ZVwJ34Jbk']
  },
  {
    judul: 'Cryptocurrency Security',
    kategori: 'Blockchain Technology',
    gambar: 'images/modul (17).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkT5CyMokqqvnfbz7cCANEIf']
  },
  {
    judul: 'Crypto Harmonic Trading',
    kategori: 'Crypto Trading',
    gambar: 'images/modul (18).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkTA7R16GuLHJCclg8YDE-F5']
  },
  {
    judul: 'Crypto Investing',
    kategori: 'Crypto Investing',
    gambar: 'images/modul (19).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkR5FlKi_LUpeByO_XYUg2HG']
  },
  {
    judul: 'Crypto Investing Alpha',
    kategori: 'Crypto Investing',
    gambar: 'images/modul (20).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQ0AmpJ6ZQAONsFC9P4ICPo']
  },
  {
    judul: 'Crypto Investing Guides',
    kategori: 'Crypto Investing',
    gambar: 'images/modul (21).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQSQv_b0lmx-MpAehS_i943']
  },
  {
    judul: 'Crypto Investing Strategy',
    kategori: 'Crypto Investing',
    gambar: 'images/modul (22).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkS4_pIcxNHO-xTHYJroSVmq']
  },
  {
    judul: 'Crypto Investing Tools',
    kategori: 'Crypto Investing',
    gambar: 'images/modul (23).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQqOhQqJzgNOfABfqDDkSnu']
  },
  {
    judul: 'Crypto Money Psychology',
    kategori: 'Crypto Trading',
    gambar: 'images/modul (24).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkTq1Y05AAKuJHjay2Ox5-G5']
  },
  {
    judul: 'Crypto Order Flow',
    kategori: 'Crypto Trading',
    gambar: 'images/modul (25).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkSLvSG3eOhFZSbg5NCJjHy4']
  },
  {
    judul: 'Crypto Research',
    kategori: 'Blockchain Technology',
    gambar: 'images/modul (26).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQ9uaFae78dyUQIQCqBDuL0']
  },
  {
    judul: 'Crypto Self-Custody',
    kategori: 'Crypto Investing',
    gambar: 'images/modul (27).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQ2ZvwjsNJqzHxPMzOHsqeY']
  },
  {
    judul: 'Crypto Smart Money',
    kategori: 'Crypto Trading',
    gambar: 'images/modul (28).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkSjFvK-EsAxVEqIM0E7cEwx']
  },
  {
    judul: 'Crypto Technical Indicators',
    kategori: 'Crypto Trading',
    gambar: 'images/modul (29).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkTkQfZFKlN7LTuErnCDxGSk']
  },
  {
    judul: 'Crypto Spot Trading',
    kategori: 'Crypto Trading',
    gambar: 'images/modul (30).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkSW_Ln6qn8YlhFO1YpNxlgA']
  },
  {
    judul: 'Crypto Trading Psychology',
    kategori: 'Live Class',
    gambar: 'images/modul (31).jpg',
    links: ['https://www.youtube.com/watch?v=Sz9BJzwP_98']
  },
  {
    judul: 'Crypto Wyckoff Trading',
    kategori: 'Crypto Trading',
    gambar: 'images/modul (32).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQJOkiNWJu8NtD40fUegcZe']
  },
  {
    judul: 'DEX Trading Tutorial',
    kategori: 'Crypto Trading',
    gambar: 'images/modul (33).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkSq5ArXxxCBo02EWes4Rawp']
  },
  {
    judul: 'Digital Money and Double Spending',
    kategori: 'Blockchain Fundamental',
    gambar: 'images/modul (34).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkTyoODXGPPClW-b_jQkKE9X']
  },
  {
    judul: 'Ethereum: Programmable Money',
    kategori: 'Blockchain Technology',
    gambar: 'images/modul (35).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkT56nVEJiQz7tRyoC6kE5Oq']
  },
  {
    judul: 'Crypto Order Flow',
    kategori: 'Live Class',
    gambar: 'images/modul (36).jpg',
    links: ['https://www.youtube.com/watch?v=LWd2d4O0YQY']
  },
  {
    judul: 'Crypto Trading Guide',
    kategori: 'E Book',
    gambar: 'images/modul (37).jpg',
    links: ['https://drive.google.com/file/d/1acE6k2fKifSqi6hk_SCjVuktDCjep6aP/view']
  },
  {
    judul: 'Kamus Pattern Crypto',
    kategori: 'Crypto Trading',
    gambar: 'images/modul (38).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQ3zJrpA2l_POSXmq4dZrTv']
  },
  {
    judul: 'Keys, Wallets, & How They Work',
    kategori: 'Blockchain Fundamental',
    gambar: 'images/modul (39).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkRI2Np0SHo8E4Pr2EuOBCHR']
  },
  {
    judul: 'Kopi Darat Akademi Crypto',
    kategori: 'Live Class',
    gambar: 'images/modul (40).jpg',
    links: ['https://www.youtube.com/watch?v=F-Wu24Ppx8k']
  },
  {
    judul: 'Kuliah Crypto',
    kategori: 'Live Class',
    gambar: 'images/modul (41).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkS4tAzW6rIx5yW8Pi4NZua-']
  },
  {
    judul: 'Layer 2: Rollups',
    kategori: 'Smart Contract And Security',
    gambar: 'images/modul (42).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkT5XG1DvuE7gF4wO3rDEqWl']
  },
  {
    judul: 'Margin Call Khusus Member',
    kategori: 'Live Class',
    gambar: 'images/modul (43).jpg',
    links: ['https://www.youtube.com/watch?v=ZDnIJunBB-A']
  },
  {
    judul: 'Crypto Market Outlook 2025',
    kategori: 'Live Class',
    gambar: 'images/modul (44).jpg',
    links: ['https://www.youtube.com/watch?v=CSEGkBTAFvI']
  },
  {
    judul: 'Crypto Harmonic Trading',
    kategori: 'Live Class',
    gambar: 'images/modul (45).jpg',
    links: ['https://www.youtube.com/watch?v=IVpagLD5fXI']
  },
  {
    judul: 'Cryoto Smart Money',
    kategori: 'Live Class',
    gambar: 'images/modul (46).jpg',
    links: ['https://www.youtube.com/watch?v=eqwtVcW9rI4']
  },
  {
    judul: 'Mastering Altcoins',
    kategori: 'E Book',
    gambar: 'images/modul (47).jpg',
    links: ['https://drive.google.com/file/u/1/d/1BPYTgwq6QxD9Ojo-PHPIBmlHSmjT-Eph/view?usp=drivesdk']
  },
  {
    judul: 'Mastering Altcoin',
    kategori: 'Live Class',
    gambar: 'images/modul (48).jpg',
    links: ['https://www.youtube.com/watch?v=9Yfdc8ALR5A']
  },
  {
    judul: 'Monero: Anonymity',
    kategori: 'Blockchain Technology',
    gambar: 'images/modul (49).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQIJ4LzQgSxQEpR6xNMPUt5']
  },
  {
    judul: 'Narratives for 2024 Bull Run',
    kategori: 'Live Class',
    gambar: 'images/modul (50).jpg',
    links: ['https://www.youtube.com/watch?v=D68XtnGuwVA']
  },
  {
    judul: 'Narrative Research',
    kategori: 'Crypto Trading',
    gambar: 'images/modul (51).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkRyIifhLD_aSoI8i667P-lt']
  },
  {
    judul: 'Token Unlock Trading Strategy',
    kategori: 'Crypto Trading',
    gambar: 'images/modul (52).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkSLNB0rb543lwOgfpr33o-l']
  },
  {
    judul: 'Octobull',
    kategori: 'Live Class',
    gambar: 'images/modul (53).jpg',
    links: ['https://www.youtube.com/watch?v=oaK71Ar3fjE']
  },
  {
    judul: 'Crypto Investing Principles',
    kategori: 'E Book',
    gambar: 'images/modul (54).jpg',
    links: ['https://drive.google.com/file/d/1acnJl-Lu-HR6jTZp-h3VsMkuTzxLCg-Y/view']
  },
  {
    judul: '2025 Crypto Regulation',
    kategori: 'Live Class',
    gambar: 'images/modul (55).jpg',
    links: ['https://www.youtube.com/watch?si=8YnocBpuPy1M3DnE&v=WzXHL9cfSko&feature=youtu.be']
  },
  {
    judul: 'Riding The Crypto Super Mega Cycle',
    kategori: 'Live Class',
    gambar: 'images/modul (56).jpg',
    links: ['https://www.youtube.com/watch?si=juIyko6h7p7U']
  },
  {
    judul: 'Sales Mastery',
    kategori: 'Crypto Investing',
    gambar: 'images/modul (57).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkR_axjnn8ocScFYtTLDQp08']
  },
  {
    judul: 'Crypto Investing Principles',
    kategori: 'E Book',
    gambar: 'images/modul (58).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkRYwMEgIbFQgRvUAxT29H2C']
  },
  {
    judul: 'Crypto Smart Money',
    kategori: 'Live Class',
    gambar: 'images/modul (59).jpg',
    links: ['https://drive.google.com/file/d/1cEwqBoLQzkxA_WAa0lgLW0STVuKOdBr0/view?usp=drivesdk']
  },
  {
    judul: 'Smart Contract Development',
    kategori: 'Live Class',
    gambar: 'images/modul (60).jpg',
    links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQoSi4_cEe8sWlBdGM5BOJx']
  },
  {
  judul: 'Smart Contract Security',
  kategori: 'Live Class',
  gambar: 'images/modul (61).jpg',
  links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQ9BATsPJRWyNRu5acx_8hl']
},
{
  judul: 'Strategi Jadi Milliarder Dari Crypto',
  kategori: 'Smart Contract And Security',
  gambar: 'images/modul (62).jpg',
  links: ['https://www.youtube.com/watch?si=VQflay_1E61CIZiH&v=zFz6tVbQaD0&feature=youtu.be']
},
{
  judul: 'Strategi Trading Crypto Untk Dapetin 100 Juta Pertama dari 0',
  kategori: 'Live Class',
  gambar: 'images/modul (63).jpg',
  links: ['https://www.youtube.com/watch?v=oYYfuxkXc8E&list=PL1hlgGm52pkSs8IIOw_RbcvStT95THLmv&index=4']
},
{
  judul: 'Crypto Trading Psychology',
  kategori: 'Smart Contract And Security',
  gambar: 'images/modul (64).jpg',
  links: ['https://drive.google.com/file/d/1ztF-QGPQdWPFw1jXVrgp0c8u3GN4v0hG/view?usp=sharing']
},
{
  judul: '2030 The Great Reset',
  kategori: 'Smart Contract And Security',
  gambar: 'images/modul (65).jpg',
  links: ['https://www.youtube.com/watch?v=Zpp4ja9DOFo']
},
{
  judul: 'Tokens',
  kategori: 'E Book',
  gambar: 'images/modul (66).jpg',
  links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQWYCkR7wKpE1Dd48V2DHff']
},
{
  judul: 'Akademi Crypto Grand Launching',
  kategori: 'Live Class',
  gambar: 'images/grandlaunch.png',
  links: ['https://www.youtube.com/watch?v=Vk2umj18kCw&list=PL1hlgGm52pkQOw8z8vneRSlc-mBRW73aq&index=1']
},
{
  judul: 'Types of Accounts',
  kategori: 'Smart Contract And Security',
  gambar: 'images/modul (68).jpg',
  links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQ2Wn9wTM-2KDfnIisgNfIo']
},
{
  judul: 'US Election Market Outlook',
  kategori: 'Live Class',
  gambar: 'images/modul (69).jpg',
  links: ['https://www.youtube.com/watch?v=lR9sISGi-Mk']
},
{
  judul: 'UTXO Model vs Account Model',
  kategori: 'Smart Contract And Security',
  gambar: 'images/modul (70).jpg',
  links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkS-sRyPe6KWPYsuzzdRI-wf']
},
{
  judul: 'What is a Smart Contract',
  kategori: 'Smart Contract And Security',
  gambar: 'images/modul (71).jpg',
  links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQX_hJaqiidqKyQ89GbbuCb']
},
{
  judul: '100+ E-Book Tentang Investasi',
  kategori: 'E Book',
  gambar: 'images/ibuk.jpeg',
  links: ['https://drive.google.com/drive/folders/1hcVU_iOEG_-v5SwHAJulLTPYXdpRE3pt']
},
{
  judul: 'Monero Anomynity',
  kategori: 'Blockchain Technology',
  gambar: 'images/kriptoid.jpeg',
  links: ['https://www.youtube.com/playlist?list=PL1hlgGm52pkQIJ4LzQgSxQEpR6xNMPUt5']
},
{
  judul: 'Crypto Entry Mastery',
  kategori: 'Crypto Trading',
  gambar: 'images/entry.jpg',
  links: ['https://drive.google.com/drive/folders/1MnhnpJ5W4TYV98zSranF8Hb5JDv-HTad']
},
{
  judul: 'Blockchain And AI',
  kategori: 'Blockchain Technology',
  gambar: 'images/blockchain.jpg',
  links: ['https://drive.google.com/drive/folders/1aEK8eJDlMh3IuH4ryhQ8MYqXpMvyB67A']
},
{
  judul: 'Crypto Exit Strategy',
  kategori: 'Crypto Trading',
  gambar: 'images/crypto-exit.jpeg',
  links: ['https://drive.google.com/drive/folders/19nYjtrdsj6RWuFxI7XZtdAAndViQ7Z3c']
},
{
  judul: 'Crypto Portofolio Management',
  kategori: 'Crypto Investing',
  gambar: 'images/management.jpg',
  links: ['https://drive.google.com/drive/folders/1bm0CAA17swuamSzM_gn-clEGnpDyKmk-']
},
{
  judul: 'Central Bank Digital Currency',
  kategori: 'DePIN',
  gambar: 'images/cbdc.jpg',
  links: ['https://drive.google.com/file/d/1yfZNuAZUXSr6T5Yq-Hpqwc6jQnvueurQ/edit']
},
{
  judul: 'Big Crypto Thesis',
  kategori: 'Live Class',
  gambar: 'images/bigcrypto.png',
  links: ['https://www.youtube.com/watch?v=nAvj4rgkhFU&list=PL1hlgGm52pkQOw8z8vneRSlc-mBRW73aq&index=2']
},
{
  judul: 'DeFi: Lending & Borrowing',
  kategori: 'D App',
  gambar: 'images/defi-landing.jpg',
  links: [
    { url: 'https://drive.google.com/file/d/1Aa9J_bpByn-isWkv8uvZOIH7cgvEvmfH', label: 'DeFi Lending' },
    { url: 'https://drive.google.com/file/d/1PtJSyYham4Nc48bMBuepUwyLni5Nepsu', label: 'Flash Loan' }
  ]
},
{
  judul: 'Identifying Scam Tricks & Security Tips',
  kategori: 'Web3 Safety',
  gambar: 'images/identifying-Scam-Tricks-&-Security-Tips.jpg',
  links: [
    { url: 'https://drive.google.com/file/d/1yruQgIoFtjkd7dgqE-z1DwbYnnIpdPrz', label: 'Pentingnya Web3 Safety' },
    { url: 'https://drive.google.com/file/d/1Tv_zC8D8VqG5HzgUxZO7GxO8bZdvaHZR', label: 'Secure Private Key and Seed Phrase' },
    { url: 'https://drive.google.com/file/d/1szWQy7GC18WhwTF7VHTvGUn1pRcEX1yS', label: 'Job Interview Scam' },
    { url: 'https://drive.google.com/file/d/1l4VgKUCDxhUjPy3aXYFgZqT5KWmW733l', label: 'Developer Job Scam' },
    { url: 'https://drive.google.com/file/d/1Bjgx0NelYpwRUxcjxRWPojPWujSQMslp', label: 'Fake Website scam' },
    { url: 'https://drive.google.com/file/d/1oboPu1MuLDgB8hw3pyYHqCod2x9McBAH', label: 'Malicious Files Dari Sumber Tak Dikenal' },
    { url: 'https://drive.google.com/file/d/1pEjUnFTe8f7xfZc2HHD_ZR-wK9VKInLG', label: 'P2P Scam Risk' },
    { url: 'https://drive.google.com/file/d/1F5730m-ytq1H83he2NFaOrHqJwoi_c8N', label: 'Social Engineering' }
  ]
},
{
  judul: 'Stablecoins',
  kategori: 'D App',
  gambar: 'images/stablecoins.jpg',
  links: ['https://drive.google.com/file/d/1_dQuIcnGJuEAFwZPqXQWxnZpYKn6uyLB']
},
{
  judul: 'DeFi: DEX',
  kategori: 'D App',
  gambar: 'images/defi-dex.jpg',
  links: ['https://drive.google.com/file/d/1Zioo6D3RmEZ1aE_Qar19zv4SpegmbEJw/view?usp=drive_link']
},
{
  judul: 'Technical Research',
  kategori: 'Crypto Trading',
  gambar: 'images/tecr.jpg',
  links: [
    { url: 'https://drive.google.com/file/d/116nRowogvCEVvix55chOHLtMeExdMG2M/view?usp=drive_link', label: 'Cara Melakukan Analisis Trend' },
    { url: 'https://drive.google.com/file/d/10j4T4v9afmQfWDC6vxfzraRhlGeJ5Ebl/view?usp=drive_link', label: 'Cara Melakukan Analisis Area' },
    { url: 'https://drive.google.com/file/d/11VjMj8rKb6EpDmgvieABTYTHpb0kyI7M/view?usp=drive_link', label: 'Cara Melakukan Analisis Pola' },
    { url: 'https://drive.google.com/file/d/11w3MkJfTfSWdGzi-WlaTNGHtFgdELbgs/view?usp=drive_link', label: 'Cara Melakukan Analisis Pemicu' },
    { url: 'https://drive.google.com/file/d/12KyxpNcEloF5_-K00RuWgAKM56SNxcL2/view?usp=drive_link', label: 'Cara Melakukan Entry Analysis' },
  ]
},
{
  judul: 'Fundamental Research',
  kategori: 'Crypto Trading',
  gambar: 'images/fundr.jpg',
  links: [
    { url: 'https://drive.google.com/file/d/1-Tf1aqm5d-LX_wRlDS39ZK6KTSviImPE/view?usp=drive_link', label: 'Intro to Fundamental Research' },
    { url: 'https://drive.google.com/file/d/1-Z6UEot6N3BIcsdUWi9RLUBnP65f9T4W/view?usp=drive_link', label: 'Faktor yang Berperan Dalam Fundamental Research' },
    { url: 'https://drive.google.com/file/d/1-gxmmFb5LRSEoyIjiTSqKlAebhYJ_X0y/view?usp=drive_link', label: 'Mendalami Tokonemics Project' },
  ]
},
{
  judul: 'Mind Management',
  kategori: 'Crypto Trading',
  gambar: 'images/minm.jpg',
  links: ['https://drive.google.com/file/d/19Cbv33SpHqRHURL60fp83t2Lqeg7Yzua/view?usp=drivesdk']
},
{
  judul: 'Ethereum Name Service',
  kategori: 'D App',
  gambar: 'images/eth-name.jpg',
  links: ['https://drive.google.com/file/d/1CiVfhEWJe84t5g84QeiVM5fZeq2nR36V']
},
{
  judul: 'Fan Token',
  kategori: 'D App',
  gambar: 'images/fan-token.jpg',
  links: ['https://drive.google.com/file/d/1fQmbZHPGjgWY4WLjMnLQs2uiVf1hsOsv']
},
{
  judul: 'Real World Assets',
  kategori: 'D App',
  gambar: 'images/real-world-assets.jpg',
  links: ['https://drive.google.com/file/d/1abf7idGOX2w-UtvOkAX3DvIp2x-KrdP-']
},
{
  judul: 'Money Management',
  kategori: 'Crypto Trading',
  gambar: 'images/monm.jpg',
  links: ['https://drive.google.com/file/d/1jbxeeXu7lB-3LcAYsFohbTP-cuoY0JsH/view?usp=drivesdk']
},
{
  judul: 'Decentralized Physical Infrastructure Network',
  kategori: 'DePIN',
  gambar: 'images/dpin.jpg',
  links: ['https://drive.google.com/file/d/1bd1W-032sUOPfvM07IK0abBqUgYMkBtc']
},




];

const modulContainer = document.getElementById('modul-container');

function generateModul(filteredKeyword = '') {
  modulContainer.innerHTML = '';

  kategoriUtama.forEach(kategori => {
    const row = document.createElement('div');
    row.classList.add('kategori-row');

    const modulDalamKategori = modulList.filter(modul =>
      modul.kategori === kategori &&
      modul.judul.toLowerCase().includes(filteredKeyword)
    );

    if (modulDalamKategori.length > 0) {
      modulDalamKategori.forEach(modulData => {
        const modul = document.createElement('div');
        modul.classList.add('modul');

        const img = document.createElement('img');
        img.src = modulData.gambar;
        img.alt = modulData.judul;

        const h3 = document.createElement('h3');
        h3.innerText = modulData.judul;

        modul.appendChild(img);
        modul.appendChild(h3);

        const links = modulData.links;

        if (links.length === 1) {
          const linkObj = links[0];
          const url = typeof linkObj === 'string' ? linkObj : linkObj.url;
          const label = typeof linkObj === 'string' ? '▶️ Tonton' : `▶️ ${linkObj.label}`;

          const btn = document.createElement('a');
          btn.href = url;
          btn.classList.add('modul-button');
          btn.innerText = label;
          btn.onclick = () => {
            window.open(url);
            return false;
          };
          modul.appendChild(btn);
        } else {
          const select = document.createElement('select');
          select.classList.add('modul-select');

          const defaultOption = document.createElement('option');
          defaultOption.innerText = '▶️ Pilih Video';
          defaultOption.disabled = true;
          defaultOption.selected = true;
          select.appendChild(defaultOption);

          links.forEach((linkObj, index) => {
            const option = document.createElement('option');
            option.value = typeof linkObj === 'string' ? linkObj : linkObj.url;
            option.innerText = typeof linkObj === 'string'
              ? `Tonton ${index + 1}`
              : linkObj.label || `Tonton ${index + 1}`;
            select.appendChild(option);
          });

          // untuk iOS agar tidak diblokir
          select.addEventListener('change', function () {
            const url = this.value;
            if (url) {
              window.open(url);
              this.selectedIndex = 0;
            }
          });

          modul.appendChild(select);
        }

        row.appendChild(modul);
      });

      const section = document.createElement('div');
      section.classList.add('kategori-section');

      const title = document.createElement('h2');
      title.innerText = kategori;
      title.classList.add('kategori-title');

      section.appendChild(title);
      section.appendChild(row);
      modulContainer.appendChild(section);
    }
  });
}

// ========== EVENT SEARCH ==========
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.trim().toLowerCase();
  generateModul(keyword);
});

// ========== INISIALISASI ==========
generateModul();
