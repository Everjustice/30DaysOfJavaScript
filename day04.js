// Day 4: Conditionals (Koşullu İfadeler)

// if - else örneği
let yas = 18;

if (yas >= 18) {
  console.log("Ehliyet alabilirsin");
} else {
  console.log("Ehliyet alamazsın");
}

// else if örneği
let not = 75;

if (not >= 90) {
  console.log("Notun: AA");
} else if (not >= 80) {
  console.log("Notun: BA");
} else if (not >= 70) {
  console.log("Notun: BB");
} else {
  console.log("Kaldın");
}

// switch-case örneği
let gun = "Cuma";

switch (gun) {
  case "Pazartesi":
    console.log("Haftanın ilk günü");
    break;
  case "Cuma":
    console.log("Haftanın son iş günü");
    break;
  case "Pazar":
    console.log("Tatil günü");
    break;
  default:
    console.log("Geçerli bir gün değil");
}

// ternary operator örneği
let hava = "güneşli";
let durum = (hava === "güneşli") ? "Dışarı çık!" : "Evde kal!";
console.log(durum);

// === Zor Seviye Alıştırmalar ===

// Kullanıcı giriş kontrolü
let kullaniciAdi = "admin";
let sifre = "1234";

if (kullaniciAdi === "admin" && sifre === "1234") {
  console.log("Giriş başarılı");
} else {
  console.log("Kullanıcı adı veya şifre yanlış");
}

// Sayı pozitif, negatif ya da sıfır mı?
let sayi = -5;

if (sayi > 0) {
  console.log("Pozitif sayı");
} else if (sayi < 0) {
  console.log("Negatif sayı");
} else {
  console.log("Sayı sıfır");
}

// switch-case ile basit hesap makinesi
let islem = "*";
let sayi1 = 6;
let sayi2 = 3;

switch (islem) {
  case "+":
    console.log(sayi1 + sayi2);
    break;
  case "-":
    console.log(sayi1 - sayi2);
    break;
  case "*":
    console.log(sayi1 * sayi2);
    break;
  case "/":
    console.log(sayi1 / sayi2);
    break;
  default:
    console.log("Geçersiz işlem");
}
