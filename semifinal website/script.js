// Dapatkan elemen-elemen yang diperlukan
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const searchSubmit = document.getElementById("search-submit");
const searchText = document.getElementById("search-text");

// Tambahkan event listener pada tombol pencarian
searchBtn.addEventListener("click", function () {
    // Toggle tampilan kotak input pencarian
    searchInput.classList.toggle("hidden");
});

// Tambahkan event listener pada tombol "Submit"
searchSubmit.addEventListener("click", function () {
    // Dapatkan teks yang dimasukkan pengguna
    const userInput = searchText.value;

    // Lakukan sesuatu dengan input pengguna, misalnya, alihkan ke hasil pencarian
    alert("Anda mencari: " + userInput);

    // Sembunyikan kembali kotak input pencarian
    searchInput.classList.add("hidden");

    // Kosongkan kotak input pencarian
    searchText.value = "";
});


// Dapatkan elemen header
const siteHeader = document.getElementById("siteHeader");

// Tambahkan event listener untuk mendeteksi scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        // Jika pengguna menggulir, tambahkan kelas header-scroll
        siteHeader.classList.add("header-scroll");
    } else {
        // Jika pengguna di bagian atas halaman, hapus kelas header-scroll
        siteHeader.classList.remove("header-scroll");
    }
});


 // JavaScript untuk mengganti konten saat tautan di header diklik
const aboutLink = document.getElementById("aboutLink");
const contactLink = document.getElementById("contactLink");

aboutLink.addEventListener("click", function() {
    // Ganti konten di bawah sesuai dengan About Us
    // Misalnya, Anda dapat menggunakan AJAX untuk mengambil kontennya dari server.
    // Berikut contoh yang sederhana:
    document.getElementById("content").innerHTML = "<h1>About Us</h1><p>Ini adalah halaman About Us.</p>";
});

contactLink.addEventListener("click", function() {
    // Ganti konten di bawah sesuai dengan Contact
    // Misalnya, Anda dapat menggunakan AJAX untuk mengambil kontennya dari server.
    // Berikut contoh yang sederhana:
    document.getElementById("content").innerHTML = "<h1>Contact</h1><p>Ini adalah halaman Contact.</p>";
});

