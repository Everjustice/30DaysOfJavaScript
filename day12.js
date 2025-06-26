// Day 12: Regular Expressions (RegEx)

// RegEx, string içinde belirli desenleri aramak için kullanılır.
// genellikle .test(), .match(), .replace() gibi string metotlarıyla birlikte kullanılır

// basit bir desen tanımı: sadece sayı mı kontrolü
let sadeceSayiMi = /^\d+$/;
console.log(sadeceSayiMi.test("123"));     // true
console.log(sadeceSayiMi.test("abc123"));  // false

// e-posta formatı kontrolü
let emailRegex = /^[\w.-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
console.log(emailRegex.test("test@gmail.com")); // true
console.log(emailRegex.test("hatalıemail"));    // false

// .match() ile eşleşmeleri alma
let cumle = "Bugün hava çok güzel, gerçekten çok güzel!";
let eslesenler = cumle.match(/güzel/g); // 'güzel' geçen tüm yerler
console.log(eslesenler); // [ 'güzel', 'güzel' ]

// .replace() ile değiştirme
let degisti = cumle.replace(/güzel/g, "berbat");
console.log(degisti); // Bugün hava çok berbat, gerçekten çok berbat!

// büyük-küçük harf duyarsız arama (/i)
let ornekMetin = "Merhaba Dünya";
console.log(/merhaba/i.test(ornekMetin)); // true

// RegEx ile baş harfi büyük kelimeleri bulma
let metin2 = "Javascript Regular Expressions Öğreniyorum";
let buyukBaslayanlar = metin2.match(/\b[A-Z][a-z]+/g);
console.log(buyukBaslayanlar); // ["Javascript", "Regular", "Expressions", "Öğreniyorum"]


// === Alıştırmalar ===

// 1. Kullanıcı adı validasyonu (sadece harf ve sayı, 3-12 karakter)
let usernameRegex = /^[a-zA-Z0-9]{3,12}$/;
console.log(usernameRegex.test("everjustice")); // true
console.log(usernameRegex.test("ev@123"));      // false

// 2. Şifre en az 1 harf, 1 sayı içermeli ve 6+ karakter olmalı
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
console.log(passwordRegex.test("abc123")); // true
console.log(passwordRegex.test("123456")); // false

// 3. Telefon numarası Türk formatı: 05xx xxx xx xx
let telefonRegex = /^05\d{2} \d{3} \d{2} \d{2}$/;
console.log(telefonRegex.test("0535 123 45 67")); // true
console.log(telefonRegex.test("5351234567"));     // false

// 4. .replace() ile linkleri tıklanabilir hale getirme
let text = "Daha fazla bilgi için https://example.com adresine bak.";
let clickable = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1">$1</a>');
console.log(clickable);
