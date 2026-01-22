function sendToWhatsApp() {
    const name = document.getElementById('contact_name').value;
    const message = document.getElementById('contact_message').value;
    const phone = "6288293427818"; // Nomor lu udah bener

    if (name === "" || message === "") {
        alert("Isi nama ama pesan dulu dong bre, biar enak dichatnya!");
        return;
    }

    // Gabungin Nama + Pesan buat jadi draft di WA
    const text = `Halo Anubhawa, Nama saya *${name}*. %0A%0A*Pesan:* %0A${message}`;
    
    // Buka tab baru ke WA
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}
window.onscroll = function() {
        var nav = document.querySelector('.navbar');
        if (window.pageYOffset > 50) { // Jika di-scroll lebih dari 50px
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
} 
var typed=new Typed('#typed', {
    strings: ['web designer', 'front-end developer', 'full stack engineer'],
    typeSpeed: 80,    // Kecepatan ngetik
    backSpeed: 30,    // Kecepatan hapus
    backDelay: 2000,  // Jeda sebelum hapus (2 detik)
    loop: true,       // Biar muter terus
    cursorChar: '',  // Bentuk kursornya
  });
  // --- SCRIPT CODE RAIN BACKGROUND ---
    const canvas = document.getElementById('code-rain-canvas');
    const ctx = canvas.getContext('2d');

    // Atur ukuran kanvas agar memenuhi layar
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Karakter yang akan dijatuhkan (simbol-simbol coding)
    // Lu bisa tambah/kurang karakter di sini sesuka hati
    const codeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{};/<>[]$#=+-functionvarconstletifforwhile';
    const characters = codeChars.split('');

    const fontSize = 14; // Ukuran font kode
    const columns = canvas.width / fontSize; // Jumlah kolom hujan

    // Array untuk menyimpan posisi Y setiap kolom
    const drops = [];
    // Inisialisasi semua kolom mulai dari atas (y=1)
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    // Fungsi untuk menggambar animasi
    function drawCodeRain() {
        // Trik kunci: Timpa layar dengan warna hitam yang sangat transparan (0.05)
        // Ini yang bikin efek "jejak pudar" (trailing effect)
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Warna teks kodingnya (Hijau Hacker ala Matrix)
        // Ganti jadi '#007bff' kalau mau warna biru, atau '#ffffff' buat putih
        ctx.fillStyle = '#0f0'; 
        ctx.font = fontSize + 'px monospace';

        // Loop untuk setiap kolom
        for (let i = 0; i < drops.length; i++) {
            // Pilih karakter acak
            const text = characters[Math.floor(Math.random() * characters.length)];
            
            // Gambar karakter di posisi x dan y saat ini
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Logika reset: Jika sudah lewat bawah layar DAN random chance terpenuhi
            // Kirim balik ke atas biar ngeloop terus
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Gerakkan ke bawah
            drops[i]++;
        }
    }

    // Jalankan animasi setiap 33ms (sekitar 30fps)
    setInterval(drawCodeRain, 33);

    // Biar kalau layar di-resize, kanvasnya menyesuaikan
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    // ------------------------------------
    document.addEventListener('DOMContentLoaded', function() {
        const btn = document.getElementById('manualToggler');
        const menu = document.getElementById('navbarNavManual');
        const links = document.querySelectorAll('.nav-link');

        if (btn && menu) {
            // Klik Tombol: Buka/Tutup
            btn.addEventListener('click', function() {
                menu.classList.toggle('active');
            });

            // Klik Link: Otomatis Tutup (Biar gak ribet)
            links.forEach(link => {
                link.addEventListener('click', function() {
                    menu.classList.remove('active');
                });
            });
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
    // Daftarkan semua elemen yang mau dikasih efek scroll
    const animatedElements = document.querySelectorAll('.service-card, .project-card-wrapper');

    const observerOptions = {
        root: null,
        // 0.6 artinya efek aktif kalau 60% kartu sudah masuk layar HP
        threshold: 0.6 
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
            } else {
                // Hapus baris di bawah ini kalau lu mau efeknya cuma sekali (gak balik lagi)
                entry.target.classList.remove('is-active');
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });

});
/* --- FEATURE: MULTI-LANGUAGE SYSTEM --- */
const translations = {
    'id': {
        'nav_home': 'Beranda',
        'nav_about': 'Tentang',
        'nav_service': 'Layanan',
        'nav_project': 'Proyek',
        'nav_contact': 'Kontak',
        'hero_hi': 'HALO, SAYA ARUNARA, SEORANG...',
        'hero_tagline': 'MENCIPTAKAN MASA DEPAN WEB, PIXEL DEMI PIXEL',
        'btn_work': 'karya saya',
        'btn_contact': 'hubungi saya',
        'about_title_1': 'TENTANG',
        'about_title_2': ' SAYA',
        'about_header': 'Full Stack Developer Berbasis di Indonesia',
        'about_desc': "Halo! Saya Aditya Nugraha. Seorang Full Stack Developer yang terobsesi dengan kode bersih dan pengalaman pengguna yang lancar. Saya ahli dalam membangun produk digital yang tidak hanya bagus dilihat, tapi juga performa maksimal.",
        'btn_hire': 'Rekrut Saya',
        'btn_cv': 'Unduh CV',
        'service_title': 'LAYANAN KAMI',
        'contact_title': 'Kontak Saya',
        'contact_header': 'Mari Mulai Kerjasama',
        'footer_desc': 'Membangun solusi digital yang fungsional dan estetik dengan teknologi terbaru.',
        'copyright': '© 2026 Portofolio Saya. Dibuat dengan cinta.'
    },
    'en': {
        'nav_home': 'Home',
        'nav_about': 'About',
        'nav_service': 'Service',
        'nav_project': 'Project',
        'nav_contact': 'Contact',
        'hero_hi': "HI, I'M ARUNARA, A...",
        'hero_tagline': 'CRAFTING THE FUTURE OF WEB, ONE PIXEL AT A TIME',
        'btn_work': 'my work',
        'btn_contact': 'contact me',
        'about_title_1': 'ABOUT',
        'about_title_2': ' ME',
        'about_header': 'A Full Stack Developer based in Indonesia',
        'about_desc': "Hello! I'm Aditya Nugraha. A Full Stack Developer obsessed with clean code and seamless user experience. I specialize in building digital products that not only look good, but also perform at their best.",
        'btn_hire': 'Hire Me',
        'btn_cv': 'Download CV',
        'service_title': 'OUR SERVICES',
        'contact_title': 'Contact Me',
        'contact_header': "Let's Start Working Together",
        'footer_desc': 'Building functional and aesthetic digital solutions with the latest technology.',
        'copyright': '© 2026 My Portfolio. Built with Love.'
    }
};

// Fungsi Ganti Bahasa
function changeLang(lang) {
    localStorage.setItem('preferredLang', lang);
    
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update status tombol aktif
    document.querySelectorAll('.btn-lang').forEach(btn => btn.classList.remove('active'));
    if(lang === 'id') {
        document.getElementById('lang-id').classList.add('active');
        document.getElementById('lang-id-mob').classList.add('active');
    } else {
        document.getElementById('lang-en').classList.add('active');
        document.getElementById('lang-en-mob').classList.add('active');
    }

    // Update Typed.js khusus (Jika perlu ganti list kata-katanya)
    // if (window.typedInstance) { ... ganti strings ... }
}

// Cek bahasa saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    changeLang(savedLang);
});
