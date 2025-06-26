// Day 29: Genel Tekrar / 30 Günlük JavaScript Yolculuğu Özeti

// === Değişkenler & Veri Türleri ===

let isim = "Emirhan";         // string
let yas = 24;                 // number
let aktif = true;             // boolean
let notDeger = null;          // null
let bilinmeyen;               // undefined

let diller = ["JavaScript", "Python", "C"]; // array
let kisi = { ad: "Ayşe", yas: 22 };         // object

console.log(typeof isim); // string

// === Koşullar ===

if (yas >= 18) {
  console.log("Reşit");
} else {
  console.log("Reşit değil");
}

let durum = aktif ? "Açık" : "Kapalı";
console.log("Durum:", durum);

// === Döngüler ===

for (let i = 0; i < 3; i++) {
  console.log("for döngüsü:", i);
}

let sayilar = [10, 20, 30];
sayilar.forEach((sayi) => console.log("forEach:", sayi));

for (let s of sayilar) {
  console.log("for-of:", s);
}
// === Fonksiyonlar ===

// klasik tanım
function topla(a, b) {
    return a + b;
  }
  
  // arrow function
  const carp = (a, b) => a * b;
  
  // default parametre
  function selamla(ad = "Ziyaretçi") {
    return `Merhaba ${ad}`;
  }
  
  console.log(selamla("Zeynep"));
  
  // === Scope (Kapsam) ===
  
  let globalDeger = 100;
  
  function testScope() {
    let localDeger = 200;
    console.log("Global:", globalDeger);
    console.log("Local:", localDeger);
  }
  testScope();
  // console.log(localDeger); // hata verir
  
  // === Array ve String Metodları ===
  
  let kelime = "JavaScript";
  console.log(kelime.length);
  console.log(kelime.toUpperCase());
  
  let meyveler = ["elma", "muz"];
  meyveler.push("portakal");
  meyveler.splice(1, 1); // muz çıkar
  console.log(meyveler);
  // === Obje ve Destructuring ===

let kitap = {
    baslik: "Simyacı",
    yazar: "Paulo Coelho",
    sayfa: 160
  };
  
  let { baslik, yazar } = kitap;
  console.log(baslik); // Simyacı
  
  // === JSON ===
  
  let ogrenci = { ad: "Mert", sinif: "10A" };
  let jsonData = JSON.stringify(ogrenci);
  console.log(jsonData); // string olur
  
  let geri = JSON.parse(jsonData);
  console.log(geri.ad); // Mert
  // === Promises & Async/Await ===

function veriGetir() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Veri tamam"), 1000);
    });
  }
  
  veriGetir().then((sonuc) => console.log(sonuc));
  
  async function baslat() {
    let cevap = await veriGetir();
    console.log("Await sonucu:", cevap);
  }
  baslat();
  // === Fetch API ===

async function kullaniciAl() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      let data = await res.json();
      console.log("Kullanıcı adı:", data.name);
    } catch (err) {
      console.log("Hata:", err);
    }
  }
  kullaniciAl();
  // === DOM Etkileşimleri ===

let baslik = document.getElementById("anaBaslik");
baslik.innerText = "JavaScript 30 Gün!";

let yeniP = document.createElement("p");
yeniP.innerText = "Bu paragraf JS ile eklendi.";
document.body.appendChild(yeniP);
// === Event Handling ===

let btn = document.getElementById("gonder");
btn.addEventListener("click", function () {
  alert("Butona tıklandı!");
});

document.addEventListener("keydown", function (e) {
  console.log("Basılan tuş:", e.key);
});
// === Mini Proje Hatırlatması ===

// - Sayaç (Artır, Azalt, Sıfırla)
// - ToDo List
// - Canlı Harf/Kelime Sayacı
// - Fetch ile veri çekme uygulamaları
