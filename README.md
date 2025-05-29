# 💍 Saadeti Dareyn Geri Sayımı

1 Ağustos 2025 tarihindeki nikahımıza özel hazırlanmış romantik geri sayım uygulaması.

## ✨ Özellikler

- ⏰ Gerçek zamanlı romantik geri sayım (gün, saat, dakika, saniye)
- 📿 İslami ve romantik sözler (her açılışta farklı)
- 🎵 Otomatik arka plan müziği (La La Land temalı)
- 💖 Sade ve şık romantik tasarım
- 📱 Mobil uyumlu responsive tasarım
- 🎉 Nikah günü geldiğinde özel kutlama
- 🤲 İslami terimler ve ifadeler (saadeti dareyn, helal daire, vb.)

## 🎵 Müzik Kurulumu

`music.mp3` dosyasını ana klasöre koymanız yeterli. Sayfa açıldığında otomatik çalmaya başlayacak.

## Kurulum

1. Bu klasörü web sunucusunda host edin
2. `music.mp3` dosyasını ana klasöre ekleyin
3. `index.html` dosyasını açın

## GitHub Pages ile Yayınlama

1. Bu klasörü GitHub'da bir repo oluşturup yükleyin
2. Repository ayarlarından Pages sekmesine gidin
3. Source olarak "Deploy from a branch" seçin
4. Branch olarak "main" seçin
5. Siteniz `https://username.github.io/repository-name` adresinde yayınlanacak

## Özelleştirme

### Tarih Değiştirme
`script.js` dosyasındaki bu satırı düzenleyin:
```javascript
const weddingDate = new Date('2025-08-01T14:30:00').getTime();
```

### Sözleri Değiştirme
`script.js` dosyasındaki `romanticQuotes` dizisini düzenleyebilirsiniz.

## Teknolojiler

- HTML5
- CSS3 (Flexbox, Animations, Gradients)
- Vanilla JavaScript
- Audio API
- Responsive Design

---

🤲 Rabbim saadeti dareyn nasip etsin! 💕