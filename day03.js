// Day 3: Operators

// Aritmetik Operatörler
let a = 10;
let b = 4;

console.log(a + b);  // Toplama: 14
console.log(a - b);  // Çıkarma: 6
console.log(a * b);  // Çarpma: 40
console.log(a / b);  // Bölme: 2.5
console.log(a % b);  // Mod (kalan): 2
console.log(a ** b); // Üs alma: 10^4 = 10000

// Karşılaştırma Operatörleri
console.log(5 == "5");   // Değer karşılaştırması: true
console.log(5 === "5");  // Hem değer hem tip karşılaştırması: false
console.log(10 != 8);    // Eşit değil mi?: true
console.log(10 > 5);     // Büyük mü?: true
console.log(3 <= 2);     // Küçük veya eşit mi?: false

// Mantıksal Operatörler
let yas = 20;
let ehliyetVarMi = true;

console.log(yas > 18 && ehliyetVarMi);  // ve (&&) operatörü: true
console.log(yas < 18 || ehliyetVarMi);  // veya (||) operatörü: true
console.log(!ehliyetVarMi);             // değil (!) operatörü: false

// Orta Seviye Alıştırma
let x = 7;
x += 3;  // x artık 10
x *= 2;  // x artık 20
x -= 4;  // x artık 16
console.log(x); // Sonuç: 16

// Zor Seviye Alıştırma - Not sistemine göre harf notu
let not = 85;
let sonuc = (not >= 90) ? "AA" :
             (not >= 80) ? "BA" :
             (not >= 70) ? "BB" :
             "Kaldı";
console.log(sonuc); // Çıktı: BA

// Zor Seviye Alıştırma - Şifre kontrolü
let sifre = "12345678";
let gucluMu = sifre.length >= 8 && sifre.includes("1");
console.log("Şifre güçlü mü:", gucluMu); // true