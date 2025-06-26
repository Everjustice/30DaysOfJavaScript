// Day 8: Objects

// basit nesne tanımı
let ogrenci = {
  ad: "Emirhan",
  yas: 24,
  universite: "Marmara",
  mezunMu: false
};

console.log(ogrenci.ad); // Emirhan
console.log(ogrenci["yas"]); // 24

// nesneye yeni özellik ekleme
ogrenci.bolum = "Yazılım";
console.log(ogrenci);

// nesne içindeki değeri değiştirme
ogrenci.yas = 25;

// nesne içindeki fonksiyon
let kullanici = {
  ad: "Zeynep",
  selamVer: function () {
    return "Selam, ben " + this.ad;
  }
};

console.log(kullanici.selamVer());


// 1. Kitap nesnesi oluştur, bilgileri yazdır
let kitap = {
  isim: "Kürk Mantolu Madonna",
  yazar: "Sabahattin Ali",
  sayfa: 160
};

console.log(kitap.isim + " - " + kitap.yazar);

// 2. Dizi içinde nesneler (array of objects)
let arabalar = [
  { marka: "Toyota", model: 2020 },
  { marka: "BMW", model: 2018 },
  { marka: "Tesla", model: 2023 }
];

for (let i = 0; i < arabalar.length; i++) {
  console.log(arabalar[i].marka + " - " + arabalar[i].model);
}

// 3. Bir fonksiyonla nesne oluşturma (factory function)
function personelOlustur(ad, yas, pozisyon) {
  return {
    ad: ad,
    yas: yas,
    pozisyon: pozisyon
  };
}

let p1 = personelOlustur("Ahmet", 30, "Frontend");
console.log(p1);
