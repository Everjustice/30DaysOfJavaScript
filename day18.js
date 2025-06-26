// Day 18: Promises (Sözler)

// Promise, JavaScript'te gelecekte tamamlanacak (veya başarısız olacak) işlemleri temsil eder.
// Örneğin: sunucudan veri alma, dosya yükleme gibi zaman alan işler

// Promise 3 duruma sahiptir:
// - pending (beklemede)
// - fulfilled (başarılı)
// - rejected (hata oldu)

// Basit promise tanımı
let soz = new Promise((resolve, reject) => {
    let basariliMi = true;
  
    if (basariliMi) {
      resolve("İşlem başarılı!");
    } else {
      reject("Bir hata oluştu.");
    }
  });
  
  soz
    .then((sonuc) => {
      console.log("OLUMLU:", sonuc);
    })
    .catch((hata) => {
      console.error("HATA:", hata);
    });
  


    // === Alıştırmalar ===

// 1. Belirli bir süre sonra mesaj döndüren promise
function bekle(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Bekleme tamamlandı (${ms} ms)`);
      }, ms);
    });
  }
  
  bekle(2000).then((mesaj) => {
    console.log(mesaj); // Bekleme tamamlandı (2000 ms)
  });
  
  // 2. Kullanıcı girişi gibi basit bir kontrol
  function girisYap(kullaniciAdi, sifre) {
    return new Promise((resolve, reject) => {
      if (kullaniciAdi === "admin" && sifre === "1234") {
        resolve("Giriş başarılı");
      } else {
        reject("Kullanıcı adı veya şifre hatalı");
      }
    });
  }
  
  girisYap("admin", "1234")
    .then((msg) => console.log(msg))     // Giriş başarılı
    .catch((err) => console.log(err));
  
  // 3. Promise.all kullanımı (tüm sözler tamamlandığında çalışır)
  let p1 = Promise.resolve("A");
  let p2 = Promise.resolve("B");
  let p3 = Promise.resolve("C");
  
  Promise.all([p1, p2, p3]).then((sonuclar) => {
    console.log("Tüm sonuçlar:", sonuclar); // ["A", "B", "C"]
  });
  