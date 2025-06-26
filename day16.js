// Day 16: JSON (JavaScript Object Notation)

// JSON, veri saklama ve aktarma formatıdır.
// string olarak gönderilir, obje gibi kullanmak için parse gerekir

// JS objesi:
let kullanici = {
  isim: "Emirhan",
  yas: 24,
  sehir: "İstanbul",
  diller: ["JavaScript", "Python"]
};

// objeyi JSON string'e çevirme
let jsonVeri = JSON.stringify(kullanici);
console.log(jsonVeri);
// {"isim":"Emirhan","yas":24,"sehir":"İstanbul","diller":["JavaScript","Python"]}

// JSON string'ini objeye çevirme
let donusturulen = JSON.parse(jsonVeri);
console.log(donusturulen.isim); // Emirhan


// === Alıştırmalar ===

// 1. Bir ürün listesini JSON formatına çevir
let urunler = [
  { ad: "Telefon", fiyat: 10000 },
  { ad: "Kulaklık", fiyat: 500 }
];

let urunlerJson = JSON.stringify(urunler);
console.log(urunlerJson);

// 2. JSON string’inden bilgi çıkar
let kitapStr = '{"isim": "Simyacı", "yazar": "Paulo Coelho", "sayfa": 200}';

let kitap = JSON.parse(kitapStr);
console.log(kitap.isim); // Simyacı
console.log(kitap.sayfa); // 200

// 3. Yalnızca belirli alanları stringify et (replacer)
let ogrenci = {
  ad: "Zeynep",
  soyad: "Kara",
  yas: 22,
  okul: "YTÜ"
};

let kucukJson = JSON.stringify(ogrenci, ["ad", "okul"]);
console.log(kucukJson); // {"ad":"Zeynep","okul":"YTÜ"}

// 4. Pretty print (güzel biçimli yazdırmak)
let duzenliJson = JSON.stringify(kullanici, null, 2);
console.log(duzenliJson);
/*
{
  "isim": "Emirhan",
  "yas": 24,
  "sehir": "İstanbul",
  "diller": ["JavaScript", "Python"]
}
*/
