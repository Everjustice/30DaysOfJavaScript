// Day 26: DOM Events – Olaylar

// Tıklama olayı
document.getElementById("tikla").addEventListener("click", function () {
    alert("Butona tıkladın!");
  });
  
  // Klavye olayı
  document.addEventListener("keydown", function (e) {
    console.log("Tuş basıldı:", e.key);
  });
  
  // Mouse üzerine gelme
  let kutu = document.querySelector(".hoverBox");
  kutu.addEventListener("mouseover", function () {
    kutu.style.backgroundColor = "yellow";
  });
  kutu.addEventListener("mouseout", function () {
    kutu.style.backgroundColor = "white";
  });
  
  // === Alıştırmalar ===

// 1. input'a her harf yazıldığında ekrana yaz
let isimInput = document.getElementById("isim");
isimInput.addEventListener("input", function () {
  console.log("Yazılan:", isimInput.value);
});

// 2. Sayfa yüklendiğinde konsola mesaj yaz
window.addEventListener("load", function () {
  console.log("Sayfa yüklendi");
});
