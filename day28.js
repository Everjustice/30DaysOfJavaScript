// Day 28: Mini Proje 2 – Canlı Kelime ve Harf Sayacı

// Bu proje textarea içine yazılan metindeki kelime ve harf sayısını canlı olarak gösterir.

const textarea = document.getElementById("girdi");
const kelimeEl = document.getElementById("kelimeSayisi");
const harfEl = document.getElementById("harfSayisi");

textarea.addEventListener("input", function () {
  let metin = textarea.value;

  // Kelimeleri boşlukla ayır, boş olanları filtrele
  let kelimeler = metin.trim().split(/\s+/).filter(Boolean);
  let harfler = metin.replace(/\s/g, "");

  kelimeEl.innerText = kelimeler.length;
  harfEl.innerText = harfler.length;
});
/*
<textarea id="girdi" rows="6" cols="40" placeholder="Bir şeyler yaz..."></textarea>
<p>Kelime Sayısı: <span id="kelimeSayisi">0</span></p>
<p>Harf Sayısı: <span id="harfSayisi">0</span></p>
*/

// === Alıştırmalar (Ek proje parçaları) ===

// 1. Sıfırla butonu
const sifirlaBtn = document.getElementById("sifirla");
sifirlaBtn.addEventListener("click", function () {
  textarea.value = "";
  kelimeEl.innerText = 0;
  harfEl.innerText = 0;
});

// 2. Belirli kelime sınırına ulaşınca uyarı
textarea.addEventListener("input", function () {
  if (kelimeEl.innerText >= 100) {
    alert("100 kelimeyi geçtin!");
  }
});
