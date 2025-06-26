// Day 11: Destructuring, Spread, Rest

// destructuring: dizi veya objeden değer çekip değişkene atama

// dizi örneği
let sayilar = [10, 20, 30];
let [a, b, c] = sayilar;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// obje örneği
let kisi = {
  ad: "Emirhan",
  yas: 24,
  sehir: "İstanbul"
};

let { ad, yas, sehir } = kisi;
console.log(ad); // Emirhan
console.log(yas); // 24

// farklı isimle alma
let { ad: isim } = kisi;
console.log(isim); // Emirhan

// spread (...) => diziyi veya objeyi kopyalamak, birleştirmek için

let dizi1 = [1, 2, 3];
let dizi2 = [4, 5];
let birlesik = [...dizi1, ...dizi2];

console.log(birlesik); // [1, 2, 3, 4, 5]

// obje spread
let kullanici = {
  isim: "Zeynep",
  yas: 30
};

let yeniKullanici = {
  ...kullanici,
  sehir: "Ankara"
};

console.log(yeniKullanici);

// rest (...) => parametreleri toplamak için kullanılır
function topla(...sayilar) {
  let toplam = 0;
  for (let s of sayilar) {
    toplam += s;
  }
  return toplam;
}

console.log(topla(1, 2, 3)); // 6
console.log(topla(4, 5, 6, 7)); // 22

// === Alıştırmalar ===

// 1. Dizi destructuring ile ilk iki elemanı al
let renkler = ["Kırmızı", "Mavi", "Yeşil"];
let [r1, r2] = renkler;
console.log(r1, r2); // Kırmızı Mavi

// 2. Obje destructuring ile isim ve soyisim değişkeni oluştur
let kisi2 = {
  isim: "Ali",
  soyisim: "Yılmaz",
  yas: 35
};

let { isim: i, soyisim: s } = kisi2;
console.log(i, s); // Ali Yılmaz

// 3. Spread ile iki obje birleştir
let a1 = { a: 1, b: 2 };
let a2 = { c: 3, d: 4 };

let sonuc = { ...a1, ...a2 };
console.log(sonuc); // { a: 1, b: 2, c: 3, d: 4 }

// 4. Rest ile sınırsız sayı toplayan fonksiyon
function toplam(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

console.log(toplam(5, 10, 15)); // 30
console.log(toplam(1, 2, 3, 4, 5)); // 15
