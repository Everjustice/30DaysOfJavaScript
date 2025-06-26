// Day 19: Closures (Kapanışlar)

// Closure, bir fonksiyonun başka bir fonksiyon içinde tanımlanması ve
// dış fonksiyonun değişkenlerine erişebilmesidir.

// yani: içteki fonksiyon, dıştaki fonksiyonun ortamına "kapanır"

// örnek:
function sayacOlustur() {
    let sayi = 0;
  
    return function () {
      sayi++;
      console.log("Sayaç:", sayi);
    };
  }
  
  let sayac1 = sayacOlustur();
  sayac1(); // Sayaç: 1
  sayac1(); // Sayaç: 2
  
  let sayac2 = sayacOlustur();
  sayac2(); // Sayaç: 1 (yeni sayac)
  
  // dış fonksiyon bitse de iç fonksiyon sayi değişkenini hatırlar
  

  // === Alıştırmalar ===

// 1. Kullanıcı oluşturucu - closure ile kullanıcı adı sakla
function kullaniciOlustur(ad) {
    return function () {
      console.log("Merhaba", ad);
    };
  }
  
  let selamlaAli = kullaniciOlustur("Ali");
  selamlaAli(); // Merhaba Ali
  
  // 2. Her çağrıldığında 5 artıran bir sayı fonksiyonu
  function artis5() {
    let n = 0;
  
    return function () {
      n += 5;
      return n;
    };
  }
  
  let a = artis5();
  console.log(a()); // 5
  console.log(a()); // 10
  console.log(a()); // 15
  
  // 3. Gizli şifre saklama
  function sifreSakla(sifre) {
    return {
      goster: function () {
        return "****";
      },
      kontrolEt: function (giris) {
        return giris === sifre;
      }
    };
  }
  
  let sistem = sifreSakla("1234");
  console.log(sistem.goster()); // ****
  console.log(sistem.kontrolEt("0000")); // false
  console.log(sistem.kontrolEt("1234")); // true
  