// Kode pada sebuah program biasanya dijalankan secara berurutan dan saling menunggu hingga prosesnya selesai. Contoh, pada baris pertama kita memanggil fungsi X dan baris kedua kita memanggil fungsi Y, maka fungsi Y hanya akan dijalankan setelah seluruh proses yang berhubungan dengan fungsi X selesai, begitu juga dengan baris kode selanjutnya. Proses yang dijalankan berdasarkan sebuah urutan dan saling menunggu disebut dengan proses synchronous.

// Dalam asynchronous process, kita bisa menjalankan proses yang berada di baris kedua tanpa harus menunggu kode pada baris pertama selesai dieksekusi. Arti lainnya, kita bisa melakukan lebih dari satu proses sekaligus dalam waktu yang bersamaan. Mengapa hal ini penting? Simak contoh berikut.

// Kode di bawah ini merupakan fungsi untuk menghasilkan bilangan prima sebanyak input dari pengguna. Jika Anda menginput dengan nilai yang besar, contohnya 1 juta, Anda bisa merasakan sedikit delay hingga akhirnya pesan “proses membuat 1000000 bilangan prima selesai”.

import { isPrime, random } from "./utils";

export function generatesPrimes(maximum) {
  const MAX_PRIME = 1000000;
    
  const primes = [];
    
  while (primes.length < maximum) {
    const candidate = random(MAX_PRIME);
    
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
    
  return primes;
}

// Delay terjadi karena proses menjalankan fungsi generatePrimes() berjalan lambat dan bersifat synchronous, hingga pengguna merasakan hal itu. Pengalaman ini akan membuat pengguna risi, terlebih ketika harus melakukan hal lain sembari menunggu proses itu selesai.

// Contoh, cobalah Anda tulis sesuatu pada text area selagi menunggu hasilnya muncul. Apa yang Anda rasakan?

// Program asynchronous memungkinkan suatu proses berjalan sembari menunggu proses lainnya selesai. Umumnya, kita memanfaatkan asynchronous pada proses yang besar dan membutuhkan waktu lama, seperti mengambil data dari internet, menyimpan data ke database, dan membaca data dari sebuah berkas.











