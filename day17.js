// Day 17: Web Storage (localStorage & sessionStorage)

// Web Storage, tarayıcı içinde veri saklamaya yarar.
// 2 tür vardır:
// - localStorage → veri tarayıcı kapanınca da kalır
// - sessionStorage → veri sadece sekme açıkken kalır

// Her ikisi de key-value (anahtar-değer) şeklinde çalışır
// Sadece string veri saklar. Objeler/diziler için JSON.stringify ve JSON.parse kullanılır.

// === localStorage temel işlemler ===

// veri ekleme
localStorage.setItem("kullanici", "Emirhan");

// veri alma
let isim = localStorage.getItem("kullanici");
console.log(isim); // Emirhan

// veri silme
localStorage.removeItem("kullanici");

// tümünü temizle
localStorage.clear();

// === JSON veri saklama ===
let sepet = [
  { urun: "Telefon", fiyat: 10000 },
  { urun: "Klavye", fiyat: 500 }
];

localStorage.setItem("sepet", JSON.stringify(sepet));

let gelenSepet = JSON.parse(localStorage.getItem("sepet"));
console.log(gelenSepet[0].urun); // Telefon

// === sessionStorage örnek ===
sessionStorage.setItem("oturumKodu", "XYZ123");

let kod = sessionStorage.getItem("oturumKodu");
console.log(kod); // XYZ123

sessionStorage.removeItem("oturumKodu");


// === Alıştırmalar ===

// 1. Kullanıcının ziyaret sayısını localStorage ile takip et
let ziyaretSayisi = localStorage.getItem("ziyaret") || 0;
ziyaretSayisi++;
localStorage.setItem("ziyaret", ziyaretSayisi);
console.log("Ziyaret sayısı:", ziyaretSayisi);

// 2. Bir kullanıcı nesnesi oluştur ve localStorage’a kaydet
let kullaniciObj = {
  ad: "Ayşe",
  mail: "ayse@example.com",
  girisYaptiMi: true
};

localStorage.setItem("kullaniciBilgi", JSON.stringify(kullaniciObj));

// geri alıp göster
let alinan = JSON.parse(localStorage.getItem("kullaniciBilgi"));
console.log(alinan.ad); // Ayşe

// 3. Session’da geçici bir ayar sakla
sessionStorage.setItem("tema", "koyu");

if (sessionStorage.getItem("tema") === "koyu") {
  console.log("Koyu tema aktif");
}
