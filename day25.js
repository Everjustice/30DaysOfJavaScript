// Day 25: Mini Proje – Sayaç

let sayi = 0;
const sayiEl = document.getElementById("sayi");
const artirBtn = document.getElementById("artir");
const azaltBtn = document.getElementById("azalt");
const sifirlaBtn = document.getElementById("sifirla");

artirBtn.addEventListener("click", function () {
  sayi++;
  sayiEl.innerText = sayi;
});

azaltBtn.addEventListener("click", function () {
  sayi--;
  sayiEl.innerText = sayi;
});

sifirlaBtn.addEventListener("click", function () {
  sayi = 0;
  sayiEl.innerText = sayi;
});
// === Mini Proje 2 – Basit ToDo List ===

let input = document.getElementById("gorev");
let ekleBtn = document.getElementById("ekleBtn");
let liste = document.getElementById("liste");

ekleBtn.addEventListener("click", function () {
  if (input.value !== "") {
    let li = document.createElement("li");
    li.innerText = input.value;
    liste.appendChild(li);
    input.value = "";
  }
});
