// Day 20: Callbacks (Geri çağırma fonksiyonları)

// callback, başka bir fonksiyona argüman olarak verilen fonksiyondur
// özellikle zamanlamalı veya asenkron işlemlerde çok kullanılır

function islemYap(sayi, callback) {
    let sonuc = sayi * 2;
    callback(sonuc);
  }
  
  function yazdir(data) {
    console.log("İşlem sonucu:", data);
  }
  
  islemYap(10, yazdir); // İşlem sonucu: 20
  
  // anonim callback
  islemYap(7, function (veri) {
    console.log("Anonim callback:", veri);
  });
  
  // Zamanlama örneği
  setTimeout(function () {
    console.log("3 saniye sonra çalıştı");
  }, 3000);
  
  // === Alıştırmalar ===

// 1. Kullanıcının yaşını hesaplayan callback
function yasHesapla(dogumYili, callback) {
    let yas = new Date().getFullYear() - dogumYili;
    callback(yas);
  }
  
  yasHesapla(1999, function (y) {
    console.log("Yaşınız:", y);
  });
  
  // 2. Dizi içindeki sayıları işleyen callback fonksiyonu
  function diziIsle(dizi, callback) {
    for (let eleman of dizi) {
      callback(eleman);
    }
  }
  
  diziIsle([1, 2, 3], function (x) {
    console.log("Sayı:", x);
  });
  