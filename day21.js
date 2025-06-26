// Day 21: Async & Await

// async bir fonksiyon her zaman Promise döner
// await ile promise'in sonucunu bekleriz

function veriGetir() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Veri geldi!");
      }, 2000);
    });
  }
  
  // async/await kullanımı
  async function baslat() {
    console.log("Veri bekleniyor...");
    let sonuc = await veriGetir();
    console.log("Sonuç:", sonuc);
  }
  
  baslat();

  // === Alıştırmalar ===

// 1. Rastgele sayı döndüren async fonksiyon
function rastgeleSayi() {
    return new Promise((resolve) => {
      let sayi = Math.floor(Math.random() * 100);
      setTimeout(() => {
        resolve(sayi);
      }, 1000);
    });
  }
  
  async function yazdir() {
    let s1 = await rastgeleSayi();
    let s2 = await rastgeleSayi();
    console.log("Gelen sayılar:", s1, s2);
  }
  yazdir();
  
  // 2. try-catch ile hata yakalama
  async function hataOrnegi() {
    try {
      let data = await Promise.reject("Bir hata oluştu");
      console.log(data);
    } catch (err) {
      console.error("Hata yakalandı:", err);
    }
  }
  hataOrnegi();
  