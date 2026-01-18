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