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
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    
    // Eğer tarih geçtiyse
    if (distance < 0) {
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
        
        const messageEl = document.getElementById('message');
        if (messageEl) {
            messageEl.innerHTML = '<p>🎉 Elhamdülillah! Rabbim saadeti dareyn nasip etsin! 🎉</p>';
            messageEl.classList.add('show');
        }
        
        // Kutlama animasyonu ekle
        const container = document.querySelector('.container');
        if (container) {
            container.classList.add('celebration');
        }
        
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
    
    if (!backgroundMusic) {
        console.log('Müzik elementi bulunamadı');
        return;
    }
    
    // Kullanıcı etkileşimi sonrası müziği başlat
    const startMusic = function() {
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(e => {
                console.log('Müzik çalanamadı:', e);
            });
        }
        document.removeEventListener('click', startMusic);
        document.removeEventListener('keydown', startMusic);
    };
    
    document.addEventListener('click', startMusic, { once: true });
    document.addEventListener('keydown', startMusic, { once: true });
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
    if (!messageEl) return;
    
    const specialMessage = getSpecialMessage(days);
    
    if (distance > 0) {
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