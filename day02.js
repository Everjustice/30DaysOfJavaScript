//JavaScript'te Temel Veri Türleri
//Bu gün JavaScript'te kullanılan temel veri türlerini öğrendim. Değişkenlere nasıl değer atandığını, typeof operatörüyle türlerini nasıl kontrol ettiğimi ve primitive ile non-primitive türler arasındaki farkları pratiğe döktüm.

//Primitive Veri Türleri:
//String, Number, Boolean, Undefined, Null, Symbol gibi türler doğrudan değer içerir.

//Bellekte sabit alan kaplar, birbirinden bağımsız çalışır.

let isim = "Emirhan";
let yas = 24;
let sehir = "İstanbul";
let gectiMi = true;
let bilinmeyen;
let bosDeger = null;

console.log(typeof isim);        // string
console.log(typeof yas);         // number
console.log(typeof gectiMi);     // boolean
console.log(typeof bilinmeyen);  // undefined
console.log(typeof bosDeger);    // object (JS bug’ı)
Non-Primitive Veri Türleri:
Object, Array, Function gibi türler referansla çalışır.

//Aynı içeriğe sahip olsalar bile bellekte farklı yerlerde tutulurlar.

Örnekler:

let meyveler = ["Elma", "Muz", "Kiraz"];
let ogrenci = {
  ad: "Zeynep",
  yas: 22,
  bolum: "Yazılım Mühendisliği"
};

function selamla() {
  return "Merhaba JavaScript!";
}

console.log(typeof meyveler);   // object
console.log(typeof ogrenci);    // object
console.log(typeof selamla);    // function

// 2 array’in bellekte karşılaştırılması
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 === arr2); // false - çünkü referans farklı

// iki string karşılaştırması
let a = "JS";
let b = "JS";

console.log(a === b); // true - çünkü primitive

// object örneği
let kullanici = {
  ad: "Emirhan",
  hobiler: ["Kodlama", "Kitap", "Yüzme"]
};

console.log(kullanici.hobiler[1]); // Kitap



//Öğrendiklerim:
let ve const ile hem ilkel hem de referans türlerini kontrol ettim.

Diziler ve nesnelerin farklı veri yapıları olduğunu ve nasıl erişildiğini kavradım.

Referans tipi olan objelerde === operatörü ile karşılaştırmanın içerik değil adres olduğunu fark ettim.

 Ödevler (Alıştırmalar):
1. Aşağıdaki değişkenlerin türünü typeof ile kontrol et:

let okul = "Marmara Üniversitesi";
let notOrtalamasi = 3.45;
let mezunMu = false;
let bitisYili = undefined;
let hiclik = null;
let diller = ["Python", "C", "JavaScript"];

2. Kendine ait bir nesne tanımla ve içerisinden 2 özelliği yazdır:

let ben = {
  ad: "Emirhan",
  yas: 24,
  sevdiklerim: ["Kodlama", "Kahve", "Tekno"]
};

console.log(ben.ad);       // Emirhan
console.log(ben.sevdiklerim[1]); // Kahve
3. Basit bir fonksiyon oluştur ve çağır:

function selamla(isim) {
  return "Merhaba, " + isim + "!";
}

console.log(selamla("Emirhan")); // Merhaba, Emirhan!
4. Bir dizi oluştur, uzunluğunu yazdır ve son elemanı eriş:

let kitaplar = ["1984", "Sefiller", "Kürk Mantolu Madonna"];
console.log(kitaplar.length);          // 3
console.log(kitaplar[kitaplar.length - 1]);