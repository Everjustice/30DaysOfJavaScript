// Day 15: Classes (Sınıflar)

// class tanımlama
class Araba {
  constructor(marka, model, yil) {
    this.marka = marka;
    this.model = model;
    this.yil = yil;
  }

  bilgi() {
    return `${this.marka} ${this.model} (${this.yil})`;
  }
}

let araba1 = new Araba("Toyota", "Corolla", 2020);
console.log(araba1.bilgi()); // Toyota Corolla (2020)

// sınıf içinde başka metotlar tanımlanabilir
class Kullanici {
  constructor(isim, email) {
    this.isim = isim;
    this.email = email;
  }

  selamla() {
    console.log(`Merhaba, ben ${this.isim}`);
  }

  emailGoster() {
    return this.email;
  }
}

let user1 = new Kullanici("Emirhan", "emirhan@example.com");
user1.selamla(); // Merhaba, ben Emirhan
console.log(user1.emailGoster()); // emirhan@example.com

// === Alıştırmalar ===

// 1. Ürün sınıfı oluştur, indirimli fiyat hesaplayan metod ekle
class Urun {
  constructor(ad, fiyat) {
    this.ad = ad;
    this.fiyat = fiyat;
  }

  indirimliFiyat(orani) {
    return this.fiyat - (this.fiyat * orani) / 100;
  }
}

let urun1 = new Urun("Laptop", 15000);
console.log(urun1.indirimliFiyat(10)); // 13500

// 2. Hayvan sınıfı ve türü gösteren metod
class Hayvan {
  constructor(tur, isim) {
    this.tur = tur;
    this.isim = isim;
  }

  tanit() {
    return `${this.isim} bir ${this.tur}`;
  }
}

let h = new Hayvan("Kedi", "Pamuk");
console.log(h.tanit()); // Pamuk bir Kedi

// 3. Miras (inheritance) örneği
class Kisi {
  constructor(ad) {
    this.ad = ad;
  }

  selamVer() {
    console.log(`Selam, ben ${this.ad}`);
  }
}

class Ogrenci extends Kisi {
  constructor(ad, okul) {
    super(ad);
    this.okul = okul;
  }

  okulBilgi() {
    return `${this.ad} ${this.okul} öğrencisi`;
  }
}

let o = new Ogrenci("Zeynep", "Marmara");
o.selamVer(); // Selam, ben Zeynep
console.log(o.okulBilgi()); // Zeynep Marmara öğrencisi
