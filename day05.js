// Day 5: Arrays (Diziler)

// Dizi oluşturma
let sayilar = [1, 2, 3, 4, 5];
let meyveler = ["Elma", "Muz", "Kiraz"];

// Dizi elemanlarına erişim
console.log(sayilar[0]); // 1
console.log(meyveler[2]); // Kiraz

// Dizi uzunluğu
console.log(meyveler.length); // 3

// Son elemana erişim
console.log(meyveler[meyveler.length - 1]); // Kiraz

// Diziye eleman ekleme
meyveler.push("Portakal"); // sona ekler
meyveler.unshift("Karpuz"); // başa ekler

// Dizi eleman silme
meyveler.pop(); // sondan siler
meyveler.shift(); // baştan siler

// splice ile ortadan silme
meyveler.splice(1, 1); // 1. index’ten 1 eleman sil

console.log(meyveler); // kalanları göster

// indexOf ile eleman arama
console.log(meyveler.indexOf("Muz")); // varsa indexini verir, yoksa -1

// includes ile kontrol etme
console.log(meyveler.includes("Elma")); // true/false

// join ile stringe çevirme
let joined = meyveler.join(", ");
console.log(joined);

// reverse ile ters çevirme
meyveler.reverse();
console.log(meyveler);

// 1. Dizi içindeki en büyük sayıyı bul
let sayilar2 = [10, 25, 7, 98, 32];
let max = sayilar2[0];

for (let i = 1; i < sayilar2.length; i++) {
  if (sayilar2[i] > max) {
    max = sayilar2[i];
  }
}
console.log("En büyük sayı:", max); // 98

// 2. Sadece çift sayıları yeni bir diziye aktar
let ciftler = [];

for (let i = 0; i < sayilar2.length; i++) {
  if (sayilar2[i] % 2 === 0) {
    ciftler.push(sayilar2[i]);
  }
}
console.log("Çift sayılar:", ciftler); // [10, 98, 32]

// 3. İsimler dizisinden rastgele bir isim seç
let isimler = ["Ahmet", "Zeynep", "Emirhan", "Merve"];
let rastgeleIndex = Math.floor(Math.random() * isimler.length);
console.log("Seçilen isim:", isimler[rastgeleIndex]);
