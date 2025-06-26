// Day 9: Arrays of Objects & Object Methods

// dizi içinde nesneler
let insanlar = [
  { ad: "Ahmet", yas: 25 },
  { ad: "Ayşe", yas: 30 },
  { ad: "Mehmet", yas: 22 }
];

// tüm isimleri yazdır
for (let i = 0; i < insanlar.length; i++) {
  console.log(insanlar[i].ad);
}

// yaş ortalaması
let toplam = 0;
for (let i = 0; i < insanlar.length; i++) {
  toplam += insanlar[i].yas;
}
let ortalama = toplam / insanlar.length;
console.log("Yaş ortalaması:", ortalama);

// for...of ile yazma
for (let kisi of insanlar) {
  console.log(kisi.ad + " - " + kisi.yas);
}


// 1. Öğrencilerin notlarına göre geçenleri ayır
let ogrenciler = [
  { ad: "Zeynep", not: 90 },
  { ad: "Ali", not: 45 },
  { ad: "Deniz", not: 75 }
];

let gecenler = [];

for (let o of ogrenciler) {
  if (o.not >= 60) {
    gecenler.push(o.ad);
  }
}

console.log("Geçen öğrenciler:", gecenler); // Zeynep, Deniz

// 2. Bir alışveriş sepetindeki ürünlerin toplam fiyatını hesapla
let sepet = [
  { isim: "Kalem", fiyat: 5 },
  { isim: "Defter", fiyat: 12 },
  { isim: "Silgi", fiyat: 3 }
];

let toplamFiyat = 0;
for (let urun of sepet) {
  toplamFiyat += urun.fiyat;
}

console.log("Toplam fiyat:", toplamFiyat); // 20

// 3. Her nesnenin içine bir fonksiyon ekledim
let kitaplar = [
  {
    isim: "1984",
    yazar: "George Orwell",
    bilgi: function () {
      return this.isim + " - " + this.yazar;
    }
  },
  {
    isim: "Simyacı",
    yazar: "Paulo Coelho",
    bilgi: function () {
      return this.isim + " - " + this.yazar;
    }
  }
];

console.log(kitaplar[0].bilgi());
console.log(kitaplar[1].bilgi());
