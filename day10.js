// Day 10: Higher Order Functions

// Notlar:
// forEach, map, filter, reduce gibi fonksiyonlar yüksek dereceli fonksiyonlardır.
// Bunlar, bir fonksiyonu parametre olarak alır ve genelde diziler üzerinde işlem yapar.

// forEach => her elemanı tek tek gezer, ama yeni bir dizi döndürmez
// map => her elemanı değiştirir, yeni dizi döner
// filter => şarta göre elemanları süzer, yeni dizi döner
// reduce => diziyi tek bir değere indirger (toplam, çarpım vs.)

// örnek dizi
let sayilar = [1, 2, 3, 4, 5];

// forEach
sayilar.forEach(function (sayi) {
  console.log("Sayı:", sayi);
});

// map
let kareler = sayilar.map(function (sayi) {
  return sayi * sayi;
});
console.log("Kareler:", kareler); // [1, 4, 9, 16, 25]

// filter
let ciftler = sayilar.filter(function (sayi) {
  return sayi % 2 === 0;
});
console.log("Çift sayılar:", ciftler); // [2, 4]

// reduce
let toplam = sayilar.reduce(function (acc, sayi) {
  return acc + sayi;
}, 0);
console.log("Toplam:", toplam); // 15
// araştırma kısmı gibi notlar

js
Kopyala
Düzenle
// map ile hem string hem sayı içeren dizilerde dönüşüm yapılabiliyor
let isimler = ["Ahmet", "Zeynep", "Ali"];

let buyukHarf = isimler.map(function (isim) {
  return isim.toUpperCase();
});
console.log(buyukHarf); // ["AHMET", "ZEYNEP", "ALI"]

// filter ile sadece belirli kriterdeki objeleri çekebiliyoruz
let kisiler = [
  { ad: "Mehmet", yas: 25 },
  { ad: "Ayşe", yas: 17 },
  { ad: "Can", yas: 30 }
];

let yetiskinler = kisiler.filter(function (kisi) {
  return kisi.yas >= 18;
});
console.log("Yetişkinler:", yetiskinler);

// reduce ile hem toplam, hem çarpım gibi şeyler yapılabiliyor
let carpim = sayilar.reduce(function (acc, sayi) {
  return acc * sayi;
}, 1);
console.log("Çarpım:", carpim); // 120

// bu fonksiyonlar arrow function ile de yazılabiliyor
let kareler2 = sayilar.map(x => x * x);
console.log("Arrow kareler:", kareler2);

//alıştırmalar

// 1. Sadece 3 harften uzun isimleri döndür
let isimler2 = ["Ali", "Emirhan", "Ada", "Kerem"];

let uzunlar = isimler2.filter(function (isim) {
  return isim.length > 3;
});
console.log("Uzun isimler:", uzunlar); // ["Emirhan", "Kerem"]

// 2. Ürün fiyatlarını KDV dahil olarak dön
let urunler = [
  { isim: "Kalem", fiyat: 10 },
  { isim: "Defter", fiyat: 20 }
];

let kdvli = urunler.map(function (urun) {
  return {
    isim: urun.isim,
    fiyat: urun.fiyat * 1.2
  };
});
console.log(kdvli);

// 3. Yaşların ortalamasını reduce ile bul
let yaslar = [22, 30, 28, 25];
let toplamYas = yaslar.reduce((a, b) => a + b, 0);
let ort = toplamYas / yaslar.length;
console.log("Yaş ortalaması:", ort);