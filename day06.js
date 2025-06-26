// Day 6: Loops

// for döngüsünü öğrendim, i değişkeniyle çalışıyor genelde
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

// while döngüsü, koşul sağlandığı sürece devam ediyor
let j = 0;
while (j < 3) {
  console.log("j:", j);
  j++;
}

// do...while ile önce işlem yapılıyor sonra kontrol
let k = 0;
do {
  console.log("k:", k);
  k++;
} while (k < 2);

// dizi üzerinde dönme çalıştım
let sayilar = [10, 20, 30, 40];

for (let i = 0; i < sayilar.length; i++) {
  console.log(sayilar[i]);
}

// for...of ile daha kısa yazılıyor
for (let s of sayilar) {
  console.log("for of:", s);
}

// forEach ile de tek tek erişiliyor
sayilar.forEach(function (eleman) {
  console.log("foreach:", eleman);
});

// 1. 1'den 10'a kadar olan sayıların karesini yazdır
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}

// 2. Bir dizideki çift sayıların toplamını bul
let nums = [3, 6, 8, 5, 9];
let toplam = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    toplam += nums[i];
  }
}
console.log("Çift sayıların toplamı:", toplam); // 6 + 8 = 14

// 3. String içindeki her karakteri tek tek yazdır
let kelime = "Merhaba";

for (let harf of kelime) {
  console.log(harf);
}
