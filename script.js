// Nikah tarihi ve saati (1 Ağustos 2025, 14:30)
const weddingDate = new Date('2025-08-01T14:30:00').getTime();

// Romantik sözler dizisi - sayfa her açıldığında birini gösterecek
const romanticQuotes = [
    "Birbirini sevenler için nikâhtan daha güzel bir şey görülmemiştir.",
    "Allah katında helallerin en sevileni nikâhtır.",
    "Allah, eşlerinizle aranızda sevgi ve merhamet var etmiştir.",
    "Kadın ve erkek, bir bütünü tamamlayan iki yarımdır.",
    "Sevmek, bütün kusurları görmezden gelmek değil, onları güzellikle kabullenmektir.",
    "Güzel bir evlilik iki şeye bağlıdır: Birincisi doğru insanı bulmaya, ikincisi doğru insan olmaya.",
    "Sizin için kendinizden eşler yaratıp aranızda sevgi ve merhamet var etmesi, Allah'ın varlığının delillerindendir.",
    "Eşleriniz sizin için birer elbise, siz de onlar için birer elbisesiniz.",
    "Kim evlenirse imanının yarısını tamamlamış olur.",
    "Sizin en hayırlınız, ailesine karşı en hayırlı olanınızdır.",
    "Sevgi, kusurları görmemek değil, kusurların ötesinde sevebilmektir.",
    "Evlilik iki bedenin değil, iki ruhun vuslatıdır.",
    "Dostluk ve sevgi, kalpten kalbe giden en kısa yoldur.",
    "Evlilik, iki ruhun birbirini tamamladığı bir ahittir.",
    "Sabır ve şükür, bir evliliği cennete çevirir.",
    "Aile, dua ile kurulur, sevgi ile büyür, sabır ile korunur.",
    "Eşler, birbirinin aynasıdır. O aynada neyi görmek istiyorsan, onu yansıt.",
    "Aşk, iki insanın birbirine bütün kusurlarına rağmen 'iyi ki varsın' diyebilmesidir.",
    "Sadakat, sevginin en güzel meyvesidir.",
    "Gerçek sevgi, karşılık beklemeden vermektir.",
    "Aşk, birbirine bakmak değil; birlikte aynı yöne bakmaktır.",
    "Huzurlu bir aile, erken kavuşulan cennettir.",
    "Evlilik, sevgiyle yapılan en güzel ibadettir.",
    "Bir insanı sevmek, onunla yaşlanmaya razı olmaktır.",
    "Sevgi, birbirini olduğu gibi kabul etmektir.",
    "Evlilik, ruhun iç huzur bulduğu bir limandır.",
    "Bir yuvayı ayakta tutan, sadakat ve sevgidir.",
    "Güven olmadan sevgi yaşanmaz; sevgi olmadan aile olmaz.",
    "Birlikte dua eden çiftler, birlikte kalır.",
    "Hayırlı bir eş, dünyada bulunan en değerli hazinedir."
];

// Müzik kontrolü
let backgroundMusic;

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    // Zaman hesaplamaları
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // DOM elementlerini güncelle
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // Eğer tarih geçtiyse
    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        
        const messageEl = document.getElementById('message');
        messageEl.innerHTML = '<p>🎉 Elhamdülillah! Rabbim saadeti dareyn nasip etsin! 🎉</p>';
        messageEl.classList.add('show');
        
        // Kutlama animasyonu ekle
        document.querySelector('.container').classList.add('celebration');
        
        // Kutlama konfetisi
        createSimpleConfetti();
    }
}

function createSimpleConfetti() {
    const colors = ['#c44569', '#e91e63', '#f8d7da', '#ffeef4'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '8px';
            confetti.style.height = '8px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            confetti.style.animation = 'fall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.remove();
                }
            }, 3000);
        }, i * 100);
    }
}

// Özel romantik mesajlar farklı zaman aralıkları için
function getSpecialMessage(days) {
    if (days <= 0) {
        return '🎉 Rabbim saadeti dareyn nasip etsin! 🎉';
    } else if (days <= 7) {
        return '💕 Bu hafta hayırlı bir yuvamız olacak inşallah...';
    } else if (days <= 30) {
        return "💖 Bu ay Allah'ın izniyle helal dairede birleşeceğiz...";
    } else if (days <= 100) {
        return '💝 100 günden az kaldı mübarek günümüze...';
    } else {
        return "💗 Allah'ın izniyle kurulacak yuvaları bekliyorum...";
    }
}

// Müzik başlatma
function initializeMusic() {
    backgroundMusic = document.getElementById('backgroundMusic');
    
    // Kullanıcı etkileşimi sonrası müziği başlat
    document.addEventListener('click', function startMusic() {
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(e => {
                console.log('Müzik çalanamadı:', e);
            });
        }
        document.removeEventListener('click', startMusic);
    }, { once: true });
}

// Rastgele romantik söz seç ve göster
function setRandomQuote() {
    const randomIndex = Math.floor(Math.random() * romanticQuotes.length);
    const quoteElement = document.querySelector('.love-quote p');
    if (quoteElement) {
        quoteElement.textContent = '"' + romanticQuotes[randomIndex] + '"';
    }
}

// Mesajı güncelle
function updateSpecialMessage() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    const messageEl = document.getElementById('message');
    const specialMessage = getSpecialMessage(days);
    
    if (distance > 0 && messageEl) {
        messageEl.innerHTML = `<p>${specialMessage}</p>`;
        messageEl.classList.add('show');
    }
}

// CSS animasyonu için stil ekle
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Sayfa yüklendiğinde başlat
window.addEventListener('load', function() {
    // İlk güncellemeleri yap
    updateCountdown();
    updateSpecialMessage();
    setRandomQuote();
    
    // Müziği hazırla
    initializeMusic();
    
    // Periyodik güncellemeler
    setInterval(updateCountdown, 1000);
    setInterval(updateSpecialMessage, 60000); // Her dakika kontrol et
    
    // İlk mesajı göster
    setTimeout(() => {
        const messageEl = document.getElementById('message');
        if (messageEl) {
            messageEl.classList.add('show');
        }
    }, 1000);
});