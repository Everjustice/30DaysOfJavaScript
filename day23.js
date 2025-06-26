// Day 23: DOM Giriş

// DOM = Document Object Model
// HTML sayfasını JS ile kontrol edebilmek için kullanılır

// Bir elementi seçmek
let baslik = document.getElementById("anaBaslik");
console.log(baslik.innerText);

// querySelector ve querySelectorAll
let buton = document.querySelector("button");
let paragraflar = document.querySelectorAll("p");

console.log("Toplam paragraf:", paragraflar.length);

// içeriği değiştirme
buton.innerText = "Tıkla beni!";

// stil değiştirme
buton.style.backgroundColor = "green";

// element oluşturma
let yeniDiv = document.createElement("div");
yeniDiv.innerText = "Bu yeni bir div";
document.body.appendChild(yeniDiv);

// === Alıştırmalar ===

// 1. Sayfadaki tüm <li> öğelerini yazdır
let lis = document.querySelectorAll("li");
lis.forEach((li) => console.log(li.innerText));

// 2. id'si "mesaj" olan öğeye "Hoş geldin" yaz
document.getElementById("mesaj").innerText = "Hoş geldin";

// 3. yeni bir <p> oluştur ve ekle
let p = document.createElement("p");
p.innerText = "Yeni paragraf eklendi.";
document.body.appendChild(p);
