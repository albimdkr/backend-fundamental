// JavaScript merupakan bahasa pemrograman yang menerapkan pola event-driven, baik pada environment Node.js maupun browser. Seluruh proses yang berjalan dipicu oleh sebuah event atau kejadian, contohnya DOMContentLoaded dalam browser atau process exit pada Node.js. Dengan pola event-driven itu, artinya kode yang ditulis dengan JavaScript tidak harus dijalankan secara berurutan, tetapi kode dapat dijalankan berdasarkan event atau bahkan dijadwalkan.

// Ada satu fungsi dalam JavaScript yang digunakan untuk menjadwalkan pemanggilan sebuah kode sekaligus membuatnya berjalan secara asynchronous, yakni setTimeout(). Fungsi tersebut menerima dua argumen dengan penjelasan berikut.

//     Argumen pertama merupakan sebuah fungsi yang akan dipanggil secara terjadwal dan asynchronous.
//     Argumen kedua merupakan delay waktu dalam satuan milisecond yang menentukan delay dari pemanggilan fungsi pada argumen pertama.

// Inilah contoh dari penggunaan fungsi setTimeout().

console.log('Selamat datang!');
     
setTimeout(() => {
  console.log('Terima kasih sudah mampir, silakan datang kembali!');
}, 3000)
 
console.log('Ada yang bisa dibantu?');

// Jika kita terbiasa dengan pola synchronous, wajar bila kita menganggap output pada console memiliki urutan sebagai berikut.

//     Mencetak → Selamat datang!
//     Menunggu selama tiga detik.
//     Mencetak → Terima kasih sudah mampir, silakan datang kembali!
//     Mencetak → Ada yang bisa dibantu?

// Namun, nyatanya setTimeout() tidak akan menghentikan JavaScript untuk mengeksekusi kode pada baris berikutnya. Jadi, urutannya seperti ini.

//     Mencetak →  Selamat datang!
//     Mencetak → Ada yang bisa dibantu?
//     Menunggu selama tiga detik.
//     Mencetak → Terima kasih sudah mampir, silakan datang kembali!

// Anda bisa mencobanya dengan menulis kode tersebut di dalam berkas JavaScript kemudian menjalankannya dengan Node.js.

// Fungsi setTimeout() merupakan cara paling dasar untuk membuat baris kode berjalan secara asynchronous. Kita akan gunakan setTimeout() dalam pembelajaran ini untuk menyimulasikan cara mendapatkan nilai dari sebuah proses yang membutuhkan waktu.

// Catatan: Ketahuilah bahwa ada beberapa operasi yang berjalan secara asynchronous di berbagai environment JavaScript, contohnya fungsi fetch() di browser dan proses input/output pada Node.js. Namun, kita tidak akan menggunakan fungsi-fungsi tersebut pada pembelajaran ini. Seluruh proses asynchronous akan kami simulasikan dengan menggunakan fungsi setTimeout().