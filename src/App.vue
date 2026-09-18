<template>
  <div class="min-h-screen flex flex-col justify-between selection:bg-purple-200">
    
    <!-- 1. NAVBAR -->
    <header class="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-purple-100 shadow-xs">
      <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="font-bold text-lg tracking-wide text-purple-900 flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-purple-400 inline-block"></span>
          Cynthia's space
        </div>
        <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <li><a href="#hero" class="hover:text-purple-600 transition">Beranda</a></li>
          <li><a href="#content" class="hover:text-purple-600 transition">Tentang</a></li>
          <li><a href="#card" class="hover:text-purple-600 transition">Keahlian</a></li>
          <li><a href="#footer" class="hover:text-purple-600 transition">Kontak</a></li>
        </ul>
        <a href="#footer" class="bg-purple-200/70 hover:bg-purple-300 text-purple-900 px-4 py-2 rounded-full text-sm font-medium transition shadow-xs">
          Hubungi Saya
        </a>
      </nav>
    </header>

    <!-- 2. HERO SECTION -->
    <section id="hero" class="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
      <div class="space-y-6 text-center md:text-left">
        <span class="inline-block bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Selamat Datang di Web Saya
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Halo, Saya <span class="text-purple-500">Cynthia Fecilia Putri</span> 
        </h1>
        <p class="text-gray-600 text-base md:text-lg leading-relaxed">
          Siswa Software Engineering yang antusias mengeksplorasi pengembangan web, merancang antarmuka bersih, serta menciptakan pengalaman digital yang interaktif.
        </p>
        <div class="flex justify-center md:justify-start gap-4 pt-2">
          <a href="#card" class="bg-purple-400 hover:bg-purple-500 text-white font-medium px-6 py-3 rounded-xl shadow-md transition">
            Lihat Keahlian
          </a>
          <a href="#content" class="bg-white hover:bg-gray-50 border border-purple-200 text-gray-700 font-medium px-6 py-3 rounded-xl transition">
            Tentang Saya
          </a>
        </div>
      </div>
      
      <!-- Bagian Foto Tanpa Background -->
      <div class="flex justify-center">
        <div class="relative w-72 h-72 md:w-80 md:h-80 bg-gradient-to-tr from-purple-200 via-pink-100 to-blue-100 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden rotate-3 hover:rotate-0 transition duration-300">
          
          <!-- Efek cahaya pemanis di background foto -->
          <div class="absolute w-56 h-56 bg-white/40 rounded-full blur-xl"></div>

          <!-- Foto Asli Kamu Tanpa Background -->
          <img src="./assets/cynthiaw.png" alt="Cynthia Fecilia Putri" class="relative z-10 h-full object-contain pt-4 drop-shadow-md" />

        </div>
      </div>
    </section>

    <!-- 4. CONTENT (Tentang & Keahlian Dasar) -->
    <section id="content" class="bg-white/50 border-y border-purple-100/60 py-20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center max-w-xl mx-auto mb-16 space-y-3">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Tentang Saya</h2>
          <p class="text-gray-500 text-sm">Fokus pada pembuatan web responsif dengan design menarik</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-2xl shadow-xs border border-purple-100/50 hover:shadow-md transition">
            <div class="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-4 font-bold">🎨</div>
            <h3 class="font-bold text-gray-800 text-lg mb-2">UI/UX Design</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Merancang tata letak web dengan metode dan kreativitas yang saya punya, saya berprinsip untuk membuat website responsif yang tanggap untuk memudahkan sebuah keperluan dalam suatu website</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-xs border border-purple-100/50 hover:shadow-md transition">
            <div class="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center text-xl mb-4 font-bold">⚡</div>
            <h3 class="font-bold text-gray-800 text-lg mb-2">Vue.js 3 Dev</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Memanfaatkan Composition API dan reaktivitas Vue untuk menciptakan aplikasi web yang dinamis.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-xs border border-purple-100/50 hover:shadow-md transition">
            <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl mb-4 font-bold">📱</div>
            <h3 class="font-bold text-gray-800 text-lg mb-2">Responsive Web</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Memastikan tampilan web tetap optimal dan rapi diakses dari berbagai ukuran layar device dan mempermudah penggunaan</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. CARD SECTION (Pengganti Proyek: Keahlian & Pengalaman Belajar) -->
    <section id="card" class="max-w-6xl mx-auto px-6 py-20">
      <div class="text-center max-w-xl mx-auto mb-16 space-y-3">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Keahlian & Pengalaman Belajar</h2>
        <p class="text-gray-500 text-sm">Fokus teknologi yang ditekuni dan pengalaman praktik di dunia nyata.</p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Kotak 1: Tech Stack -->
        <div class="bg-white p-8 rounded-2xl shadow-xs border border-purple-100 space-y-4 hover:shadow-md transition">
          <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-xl font-bold">🛠️</div>
          <h3 class="font-bold text-gray-800 text-xl">Tech Stack & Tools</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Terbiasa menggunakan Vue.js, JavaScript, HTML, CSS, dan Tailwind untuk membangun antarmuka web, serta mendalami dasar pemrograman backend.
          </p>
          <div class="flex flex-wrap gap-2 pt-2">
            <span class="bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">Vue.js</span>
            <span class="bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">Tailwind CSS</span>
            <span class="bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">JavaScript</span>
            <span class="bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">PHP / MySQL</span>
          </div>
        </div>

        <!-- Kotak 2: Pengalaman -->
        <div class="bg-white p-8 rounded-2xl shadow-xs border border-pink-100 space-y-4 hover:shadow-md transition">
          <div class="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center text-xl font-bold">💼</div>
          <h3 class="font-bold text-gray-800 text-xl">Pengalaman & Praktik</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Aktif menjalani pembelajaran kejuruan Software Engineering serta memiliki pengalaman langsung terjun dalam penanganan teknis di lapangan.
          </p>
          <div class="flex flex-wrap gap-2 pt-2">
            <span class="bg-pink-50 text-pink-700 text-xs px-3 py-1 rounded-full font-medium">Software Engineering</span>
            <span class="bg-pink-50 text-pink-700 text-xs px-3 py-1 rounded-full font-medium">Praktik Lapangan</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. FOOTER -->
    <footer id="footer" class="bg-white border-t border-purple-100 py-12">
      <div class="max-w-6xl mx-auto px-6 text-center space-y-4">
        <h3 class="font-bold text-gray-800 text-lg">Mari Terhubung!</h3>
        <p class="text-gray-500 text-sm max-w-md mx-auto">
          Tertarik berkolaborasi atau ingin sekadar berdiskusi seputar web development? Jangan ragu untuk mengirim pesan.
        </p>
        <div class="flex justify-center gap-4 pt-2">
          <a href="mailto:cynthiafeliciaa@gmail.com" class="bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-xl text-sm font-medium transition">
            Email Saya
          </a>
          <a href="https://github.com" target="_blank" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium transition">
            GitHub
          </a>
        </div>
        <p class="text-xs text-gray-400 pt-6">
          © 2026 Cynthia's space
        </p>
      </div>
    </footer>

  </div>
</template>