// Day 22: Fetch API

// Fetch, dış kaynaklardan veri almak için kullanılır (örn. API)
// fetch() her zaman Promise döner

// JSONPlaceholder'dan örnek veri çekme
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((veri) => {
    console.log("Kullanıcılar:", veri);
  })
  .catch((err) => {
    console.error("Hata:", err);
  });

// async/await ile fetch
async function kullanicilariAl() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    console.log("Kullanıcılar:", data);
  } catch (hata) {
    console.error("Hata oluştu:", hata);
  }
}

kullanicilariAl();

// === Alıştırmalar ===

// 1. Görev listesi API'den veri çek
async function gorevleriAl() {
    let cevap = await fetch("https://jsonplaceholder.typicode.com/todos");
    let gorevler = await cevap.json();
    console.log("İlk görev:", gorevler[0]);
  }
  gorevleriAl();
  
  // 2. Kendi verini göndermek (POST)
  async function veriGonder() {
    let yeniPost = {
      title: "Yeni başlık",
      body: "Açıklama buraya",
      userId: 1
    };
  
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(yeniPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  
    let data = await res.json();
    console.log("Sunucu yanıtı:", data);
  }
  veriGonder();
  