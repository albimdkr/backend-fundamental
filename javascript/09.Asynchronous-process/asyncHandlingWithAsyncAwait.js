// Asynchronous Handling dengan Sintaks Async dan Await

// Dalam materi sebelumnya, Anda telah belajar banyak mengenai Promise. Kita sepakat bahwa penanganan asynchronous dengan Promise jauh lebih baik daripada menggunakan callback. Dengan menggunakan Promise, kita bisa menulis kode lebih simpel dan mudah dibaca.

// Sekarang mari kita bayangkan, bagaimana jika kita bisa menangani proses asynchronous layaknya proses synchronous? Tentunya, ini akan membuat kode kita jauh lebih ringkas dan mudah dipahami karena tidak perlu menggunakan .then() dan .catch() untuk mendapatkan nilainya. Untunglah harapan tersebut kini sudah terealisasi dengan hadirnya fitur async dan await di JavaScript versi ECMAScript 2017.

// Sintaks async dan await memungkinkan kita untuk menulis kode dalam menangani proses asynchronous Promise-based dengan cara yang sama seperti kode synchronous. Dalam penanganan error-nya (rejection) pun kita bisa menggunakan try dan catch layaknya error yang dihasilkan oleh proses synchronous. Mari kita lihat contohnya dengan mengangkat kembali kasus menonton film di bioskop secara asynchronous.


function watchMovie() {
    withDrawMoney(10)
      .then((money) => buyCinemaTicket(money))
      .then((ticket) => goInsideCinema(ticket))
      .then((result) => console.log(result))
      .catch((error) => console.log(error.message));
  }
  watchMovie();


//Kami yakin Anda sudah paham dengan penanganan Promise berantai seperti di atas. Sekarang, bagaimana jika kita memanfaatkan async dan await dalam menangani proses asynchronous-nya? Kodenya akan tampak seperti ini.

async function watchMovie() {
    try {
      const money = await withDrawMoney(10);
      const ticket = await buyCinemaTicket(money);
      const result = await goInsideCinema(ticket);
   
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
   
  watchMovie();

//   Untuk menggunakan fitur async dan await, kita perlu mengubah sebuah fungsi agar berjalan secara asynchronous dengan menambahkan kata kunci async pada awal fungsi. Setelah itu, di dalam fungsi tersebut, kita bisa mengambil data yang dihasilkan oleh Promise dengan menggunakan sintaks await. Sintaks await akan memberi tahu JavaScript untuk menunggu proses Promise selesai sebelum mengeksekusi kode baris selanjutnya. Jadi, kita bisa melakukan Promise berantai tanpa perlu menggunakan .then(). Simak juga cara penanganan error-nya. Kita sudah tidak lagi menggunakan .catch(), tetapi try dan catch layaknya proses synchronous.
//   Ketahuilah bahwa setiap fungsi yang didefinisikan dengan kata async akan selalu mengembalikan sebuah Promise. Contoh pada kode di atas, kita bisa menggunakan fungsi .then() setelah pemanggilan fungsi watchMovie() seperti ini.

async function watchMovie() {
    try {
      const money = await withDrawMoney(10);
      const ticket = await buyCinemaTicket(money);
      const result = await goInsideCinema(ticket);
   
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
   
  watchMovie().then(() => console.log('done'));
   
  /** output */

//Jika fungsi yang diberikan kata “async” mengembalikan Promise, bagaimana caranya mengontrol status Promise tersebut agar bernilai fulfilled atau rejected? Kata async secara implisit menggunakan return untuk mengubah status Promise menjadi fulfilled dan menggunakan throw untuk mengubah status Promise menjadi rejected. Mari kita buktikan dengan mengubah fungsi watchMovie() dengan mengembalikan nilai dan men-throw error.

//inde.js
const { withDrawMoney, buyCinemaTicket, goInsideCinema } = require('./utils');

async function watchMovie(amount) {
  try {
    const money = await withDrawMoney(amount);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    return result;
  } catch (error) {
    throw error;
  }
}

watchMovie(10)
  .then((result) => console.log(result)) // enjoy the movie
  .catch((error) => console.log(error.message));

watchMovie(5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message)); // not enough money to buy ticket

//utils.js
function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 100) {
          reject(new Error('Not enough money to withdraw'))
        }
  
        resolve(amount)
      }, 1000);
    });
  }
  
  function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (money < 10) {
          reject(new Error('not enough money to buy ticket'))
        }
  
        resolve('ticket-1')
      }, 1000);
    });
  }
  
  function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!ticket) {
          reject(new Error('no ticket'))
        }
  
        resolve('enjoy the movie')
      }, 1000);
    });
  }
  
  module.exports = { withDrawMoney, buyCinemaTicket, goInsideCinema };

//   Lihatlah perubahan kode di atas. Fungsi watchMovie() tidak lagi menampilkan nilainya pada console.log(), tetapi mengembalikan nilai result dan bisa juga membangkitkan error. Kemudian dalam memanggil fungsinya, kita bisa menggunakan .then() dan .catch() untuk mengambil nilai yang di-resolve ataupun di-reject. Hal ini membuktikan bahwa kata async membuat fungsi mengembalikan Promise secara implisit.
//   Sintaks async dan await memiliki beberapa keuntungan dibandingkan dengan penggunaan callback dan Promise secara langsung.
  
//       Lebih mudah dipahami dan ditulis.
//       Sintaks async dan await memungkinkan kita untuk menulis kode yang menangani asynchronous dengan cara yang sama seperti synchronous. Tentu ini membuat kode lebih mudah dipahami dan ditulis.
//       Terhindar dari callback.
//       Penggunaan Promise secara langsung pun tidak terlepas dari callback, seperti .then() dan .catch(). Namun, dengan async dan await, kita bisa terlepas dari pola callback.
//       Lebih mudah dalam mengelola error.
//       Async dan await benar-benar membuat pengalaman asynchronous layaknya synchronous, hingga dalam penanganan error-nya pun menggunakan beberapa hal yang sudah ada, seperti try, catch, dan throw.










