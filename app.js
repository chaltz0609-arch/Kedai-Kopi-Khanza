/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");
console.log("Skrip JavaScript berhasil terhubung!"); 

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"




// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().

const NAMA_SEKOLAH = "SMA Negeri 1 Bandung";
const MATA_PELAJARAN = ["Matematika", "B. Indonesia", "IPAS"];
let namaGuru = "Pak Budi";
let kelasPraktikum = "XII IPA 1";

console.log("Sekolah : " + NAMA_SEKOLAH);
console.log("Kelas : " + kelasPraktikum);
console.log("Guru : " + namaGuru);

// Demo sifat mutabilitas: "let" bisa diubah, "const" tidak bisa
namaGuru = "Pak Eko";
console.log("Guru Baru: " + namaGuru);

// BAGIAN 2B: INPUT INTERAKTIF
alert("Selamat datang di Aplikasi Kalkulator Nilai Rapor Kelas!");
let namaSiswa = prompt("Halo! Masukkan nama kamu untuk memulai:");

if (namaSiswa) {
alert("Halo, " + namaSiswa + "! Yuk kita hitung nilai rapor kamu.");
console.log("Siswa yang aktif: " + namaSiswa);
} else {
alert("Kamu tidak memasukkan nama. Kamu akan dipanggil Siswa Anonim.");
namaSiswa = "Siswa Anonim";
console.log("Siswa yang aktif: " + namaSiswa);
} 


// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.




// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.




// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().

let nilaiMatematika = 80;
let nilaiBahasaIndo = 75;

let nilaiIPA = 90;

let jumlahNilai = nilaiMatematika + nilaiBahasaIndo + nilaiIPA;
let nilaiRataRata = jumlahNilai / 3;

console.log("=== NILAI " + namaSiswa + " ===");
console.log("Matematika : " + nilaiMatematika);
console.log("B. Indonesia : " + nilaiBahasaIndo);
console.log("IPA : " + nilaiIPA);
console.log("Nilai Rata-rata: " + nilaiRataRata);


