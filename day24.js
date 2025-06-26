// Day 24: DOM Manipülasyonu

// class eklemek/çıkarmak
let kutu = document.querySelector(".kutu");
kutu.classList.add("aktif");
kutu.classList.remove("aktif");

// input'tan değer alma
let input = document.getElementById("ad");
let deger = input.value;
console.log("Girilen ad:", deger);

// eventListener ile tıklama olayı
let btn = document.getElementById("gonderBtn");
btn.addEventListener("click", function () {
  let isim = input.value;
  alert("Hoş geldin " + isim);
});

// HTML içeriği değiştirme
let icerik = document.getElementById("info");
icerik.innerHTML = "<strong>Yeni içerik</strong>";

// === Alıştırmalar ===

// 1. butona basınca arka plan rengini değiştir
let renkBtn = document.getElementById("renkBtn");
renkBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});

// 2. kullanıcı adını al ve span içine yaz
let adInput = document.getElementById("kullaniciAd");
let yazSpan = document.getElementById("yazAlan");

adInput.addEventListener("input", function () {
  yazSpan.innerText = adInput.value;
});
