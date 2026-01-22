  window.onscroll = function() {
        var nav = document.querySelector('.navbar');
        if (window.pageYOffset > 50) { // Jika di-scroll lebih dari 50px
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
} 
      
<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
<script>
  var typed = new Typed('#typed', {
    strings: ['web designer', 'front-end developer', 'full stack engineer'],
    typeSpeed: 80,    // Kecepatan ngetik
    backSpeed: 30,    // Kecepatan hapus
    backDelay: 2000,  // Jeda sebelum hapus (2 detik)
    loop: true,       // Biar muter terus
    cursorChar: '|',  // Bentuk kursornya
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
/* --- SISTEM MULTI-BAHASA (INDONESIA / ENGLISH) --- */
const translations = {
    'id': {
        // Navigasi
        'nav_home': 'Beranda',
        'nav_about': 'Tentang',
        'nav_service': 'Layanan',
        'nav_project': 'Proyek',
        'nav_contact': 'Kontak',
        
        // Hero
        'hero_intro': 'HALO, SAYA ARUNARA, SEORANG...',
        'hero_tagline': 'MENCIPTAKAN MASA DEPAN WEB, PIXEL DEMI PIXEL',
        'btn_work': 'Karya Saya',
        'btn_contact': 'Hubungi Saya',
        
        // About (HTML Support)
        'about_label': 'TENTANG <span class="text-white"> SAYA</span>',
        'about_title': 'Seorang Full Stack <span class="text-primary"> Developer </span> <br> berbasis di <span class="text-neon"> Indonesia</span>',
        'about_desc': 'Halo! Saya Aditya Nugraha. Seorang Full Stack Developer yang terobsesi dengan kode bersih dan pengalaman pengguna yang lancar. Saya ahli dalam membangun produk digital yang tidak hanya bagus dilihat, tapi juga performa maksimal.',
        'btn_hire': 'Rekrut Saya',
        'btn_cv': 'Unduh CV',

        // Services
        'service_head': 'LAYANAN <span class="text-white fw-bold">KAMI</span>',
        'srv_1_title': 'Pengembangan Web',
        'srv_1_desc': 'Mengembangkan website yang tidak hanya menarik secara visual, tetapi juga efektif untuk bisnis.',
        'srv_2_title': 'Full-stack Development',
        'srv_2_desc': 'Solusi End-to-End: Dari Tampilan UI hingga Database.',
        'srv_3_title': 'Pengembangan Software',
        'srv_3_desc': 'Mengubah ide menjadi solusi perangkat lunak yang andal.',

        // Project
        'proj_head': 'PROYEK <span class="text-white fw-bold">PILIHAN</span>',

        // Contact
        'contact_small': 'Kontak Saya',
        'contact_big': 'Mari Mulai Kerjasama',
        'loc_label': 'Lokasi',
        'lbl_name': 'Nama Lengkap',
        'lbl_email': 'Alamat Email',
        'lbl_subject': 'Subjek',
        'lbl_msg': 'Pesan Anda',
        'ph_name': 'Masukkan nama...',
        'ph_email': 'nama@email.com',
        'ph_subject': 'Judul pesan...',
        'ph_msg': 'Tulis pesan lengkap...',
        'btn_send': 'Kirim ke Email',
        'btn_wa': 'Kirim via WhatsApp',

        // Footer
        'footer_desc': 'Membangun solusi digital yang fungsional dan estetik dengan sentuhan teknologi terbaru.',
        'foot_nav': 'Navigasi',
        'foot_connect': 'Tetap Terhubung',
        'foot_connect_desc': 'Tertarik untuk diskusi project? Langsung aja kirim email atau DM lewat sosmed.',
        'copyright': '&copy; 2026 Portofolio Saya. Dibuat dengan <i class="fa-solid fa-heart text-danger"></i>'
    },
    'en': {
        // Navigation
        'nav_home': 'Home',
        'nav_about': 'About',
        'nav_service': 'Service',
        'nav_project': 'Project',
        'nav_contact': 'Contact',

        // Hero
        'hero_intro': "HI, I'M ARUNARA, A...",
        'hero_tagline': 'CRAFTING THE FUTURE OF WEB, ONE PIXEL AT A TIME',
        'btn_work': 'My Work',
        'btn_contact': 'Contact Me',

        // About
        'about_label': 'ABOUT <span class="text-white"> ME</span>',
        'about_title': 'A Full Stack <span class="text-primary"> Developer </span> <br> based in <span class="text-neon"> Indonesia</span>',
        'about_desc': "Hello! I'm Aditya Nugraha. A Full Stack Developer obsessed with clean code and seamless user experience. I specialize in building digital products that not only look good, but also perform at their best.",
        'btn_hire': 'Hire Me',
        'btn_cv': 'Download CV',

        // Services
        'service_head': 'OUR <span class="text-white fw-bold">SERVICES</span>',
        'srv_1_title': 'Web Development',
        'srv_1_desc': 'Developing a website which is not only visually appealing, but also effective in generating business',
        'srv_2_title': 'Full-stack Development',
        'srv_2_desc': 'End-to-End Solutions: From UI to Database',
        'srv_3_title': 'Software Development',
        'srv_3_desc': 'Turning ideas to powerful software solutions',

        // Project
        'proj_head': 'SELECTED <span class="text-white fw-bold">PROJECTS</span>',

        // Contact
        'contact_small': 'Contact Me',
        'contact_big': "Let's Start Working Together",
        'loc_label': 'Location',
        'lbl_name': 'Full Name',
        'lbl_email': 'Email Address',
        'lbl_subject': 'Subject',
        'lbl_msg': 'Your Message',
        'ph_name': 'Enter your name...',
        'ph_email': 'name@email.com',
        'ph_subject': 'Message subject...',
        'ph_msg': 'Write your full message...',
        'btn_send': 'Send to Email',
        'btn_wa': 'Send via WhatsApp',

        // Footer
        'footer_desc': 'Building functional and aesthetic digital solutions with a touch of the latest technology.',
        'foot_nav': 'Navigation',
        'foot_connect': 'Stay Connected',
        'foot_connect_desc': 'Interested in discussing a project? Just send an email or DM via social media.',
        'copyright': '&copy; 2026 My Portfolio Built with <i class="fa-solid fa-heart text-danger"></i>'
    }
};

function changeLang(lang) {
    // 1. Simpan pilihan bahasa ke memori browser
    localStorage.setItem('preferredLang', lang);

    // 2. Cari semua elemen yang punya atribut 'data-lang'
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        const text = translations[lang][key];

        if (text) {
            // Cek apakah elemen ini input/textarea (untuk ganti placeholder)
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                // Gunakan innerHTML biar tag warna (span) tetep jalan
                element.innerHTML = text;
            }
        }
    });

    // 3. Update tampilan tombol aktif (Desktop & Mobile)
    updateActiveButton(lang, 'btn-id', 'btn-en');
    updateActiveButton(lang, 'btn-id-mob', 'btn-en-mob');
}

function updateActiveButton(lang, idBtn, enBtn) {
    const btnId = document.getElementById(idBtn);
    const btnEn = document.getElementById(enBtn);
    
    // Reset class active
    if(btnId) btnId.classList.remove('active');
    if(btnEn) btnEn.classList.remove('active');

    // Set class active sesuai pilihan
    if (lang === 'id' && btnId) {
        btnId.classList.add('active');
    } else if (lang === 'en' && btnEn) {
        btnEn.classList.add('active');
    }
}

// 4. Jalankan otomatis saat web pertama kali dibuka
document.addEventListener('DOMContentLoaded', () => {
    // Cek apakah user pernah milih bahasa, kalau belum default ke 'en'
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    changeLang(savedLang);
});

