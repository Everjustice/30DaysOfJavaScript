// Day 7: Functions

// basit bir fonksiyon tanımlama
function selamVer() {
  console.log("Merhaba dünya");
}

selamVer();

// parametreli fonksiyon
function topla(a, b) {
  return a + b;
}

let sonuc = topla(5, 3);
console.log("Toplam:", sonuc); // 8

// default parametreli fonksiyon
function mesajYaz(ad = "Ziyaretçi") {
  console.log("Hoş geldin " + ad);
}

mesajYaz("Emirhan");
mesajYaz(); // parametre vermezsem Ziyaretçi

// arrow function örneği
const carp = (x, y) => {
  return x * y;
};

console.log(carp(4, 6)); // 24

// tek satırlık arrow
const karesi = n => n * n;
console.log(karesi(7)); // 49

// 1. Verilen bir dizideki sayıların ortalamasını hesaplayan fonksiyon
function ortalamaHesapla(arr) {
  let toplam = 0;
  for (let sayi of arr) {
    toplam += sayi;
  }
  return toplam / arr.length;
}

let sayilar = [10, 20, 30, 40];
console.log("Ortalama:", ortalamaHesapla(sayilar));

// 2. Stringin tersini döndüren fonksiyon
function tersCevir(str) {
  return str.split("").reverse().join("");
}

console.log(tersCevir("merhaba")); // abahrem

// 3. Girilen yılın artık yıl olup olmadığını bulan fonksiyon
function artikYilMi(yil) {
  if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(artikYilMi(2024)); // true
console.log(artikYilMi(2100)); // false
