// Day 27: Event Bubbling & Delegation

//  Event Bubbling: bir olay en içteki elementte başlar ve dışa doğru yayılır

// Örnek HTML:
// <div id="dis">
//   <button id="ic">Tıkla</button>
// </div>

document.getElementById("ic").addEventListener("click", function () {
    console.log("Buton tıklandı");
  });
  
  document.getElementById("dis").addEventListener("click", function () {
    console.log("Div'e ulaştı (bubbling)");
  });
  
  //  Event Delegation: birden fazla öğeye tek seferde event eklemek için kullanılır
  // Dinleyiciyi üst öğeye ekleriz, hedefi kontrol ederiz
  
  // Örnek HTML:
  // <ul id="liste">
  //   <li>Madde 1</li>
  //   <li>Madde 2</li>
  //   <li>Madde 3</li>
  // </ul>
  
  document.getElementById("liste").addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.style.color = "blue";
      console.log("Tıklanan madde:", e.target.innerText);
    }
  });
  
  // === Alıştırmalar ===

// 1. Bir form üzerinde hem input hem form’a event ekle
let form = document.getElementById("loginForm");
let input = document.getElementById("email");

input.addEventListener("click", () => {
  console.log("Input tıklandı");
});

form.addEventListener("click", () => {
  console.log("Form'un kendisi tıklandı");
});

// 2. Listeye sonradan eklenen öğelere tıklanabilirlik ekle
let liste = document.getElementById("delegationList");
let ekleBtn = document.getElementById("ekleBtn");

ekleBtn.addEventListener("click", () => {
  let yeni = document.createElement("li");
  yeni.innerText = "Yeni madde";
  liste.appendChild(yeni);
});

liste.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.backgroundColor = "lightgreen";
  }
});
