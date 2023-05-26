// Asynchronous Handling dengan Callback

// Dalam materi sebelumnya, kita sudah mengetahui bahwa ada kalanya operasi di JavaScript akan berjalan secara asynchronous. Proses tersebut membuat JavaScript dapat mengeksekusi proses selanjutnya tanpa menunggu tahapan sebelumnya selesai. Perilaku ini membuat penanganan proses asynchronous berbeda dengan synchronous. Sebagai developer, kita harus tahu cara menangani proses asynchronous agar kelak kita bisa mendapatkan nilai yang dihasilkan dari proses tersebut.

// Saat ini ada dua cara atau pola yang digunakan JavaScript dalam menangani proses asynchronous. Pola pertama yang akan kita bahas adalah callback.


// Pola Callback

// Pola callback merupakan salah satu cara menangani proses asynchronous. Tidak hanya di JavaScript, pola ini juga digunakan pada bahasa pemrograman lainnya. Callback merupakan sebuah fungsi yang disisipkan pada argumen fungsi asynchronous dan akan dipanggil ketika proses dinyatakan selesai. Fungsi callback akan membawa nilai-nilai yang dihasilkan dari proses asynchronous sehingga kita bisa memanfaatkan nilai tersebut.

// Jika masih belum terbayang, simak kode di bawah ini.


function getUsers(callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
      callback(users);
    }, 3000);
  }

// Anggaplah getUsers() merupakan fungsi yang digunakan untuk mendapatkan data nama pengguna yang diambil dari internet. Kami menggunakan setTimeout() untuk menyimulasikan bahwa fungsi berjalan secara asynchronous. Anda juga bisa melihat bahwa fungsi tersebut memanggil argumen callback ketika prosesnya selesai dan membawa data users.

// Berikut adalah cara memakai fungsi tersebut untuk mendapatkan nilai users.


getUsers((users) => {
    console.log(users);
  });

// Ketika menggunakan fungsi getUsers() kita perlu memanggil dengan memberikan argumen fungsi. Fungsi ini akan dipanggil ketika proses asynchronous selesai sekaligus membawa data users yang dihasilkan. Di dalam cakupan fungsi inilah kita bisa mengonsumsi nilai users yang dihasilkan dari proses asynchronous. Inilah yang dimaksud dengan pola callback.

// Catatan: Callback merupakan salah satu implementasi dari konsep High-Order Function yang sudah kita bahas pada modul Functional Programming.

// Agar kode lebih mudah dibaca, Anda bisa mendeklarasikan fungsi callback di luar argumen seperti ini.

function getUsers(callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
   
      callback(users);
    }, 3000);
  }
   
  function usersCallback(users) {
    console.log(users);
  }
   
  getUsers(usersCallback);

//   Proses yang dijalankan secara asynchronous, biasanya berpotensi menghasilkan error. Misalnya, sebuah fungsi yang mengambil data dari internet akan menghasilkan error ketika jaringan kita bermasalah. Contoh lainnya, ketika berkas tersebut tidak ditemukan, fungsi yang membacanya akan menghasilkan error.

//   Dengan alasan tersebut, pada fungsi callback selain membawa argumen data, ia juga membawa argumen error. Argumen error hanya akan memiliki nilai ketika proses asynchronous gagal atau mengalami gangguan.


function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
      
      if (isOffline) {
        callback(new Error('cannot retrieve users due offline'), null);
        return;
      }
   
      callback(null, users);
    }, 3000);
  }

//   Kami menambahkan argumen isOffline pada fungsi getUsers() untuk menentukan proses asynchronous berhasil atau gagal. Sebab prosesnya berpotensi gagal, nilai yang dibawa oleh fungsi callback harus disesuaikan.

//   Fungsi callback yang digunakan di JavaScript secara standar (convention) memiliki struktur seperti kode di bawah ini.


function callback(error, data) {
    // logika ketika proses asynchronous selesai
}

// Argumen pertama dari fungsi callback merupakan error. Argumen ini hanya akan bernilai jika proses asynchronous gagal, sebaliknya biasanya bernilai null. Argumen kedua dari fungsi callback merupakan data yang dibawa ketika prosesnya berhasil. Jika proses asynchronous gagal, dia akan bernilai null.

// Selain itu, Anda juga perlu mengingat convention yang ditetapkan oleh Node.js bahwa argumen callback selalu diletakkan terakhir. Itulah alasan kami mendefinisikan argumen isOffline kemudian callback pada fungsi getUsers().

//     Catatan: Harap diingat convention tersebut ditetapkan karena banyak proses asynchronous yang terdapat pada Node.js API menggunakan struktur tersebut dalam penggunaan callback, seperti fungsi fs.readFile().

// Dengan diubahnya fungsi getUsers(), kita juga perlu menyesuaikan struktur callback-nya. Untuk menangani proses asynchronous pada fungsi getUsers(), baik ketika prosesnya berhasil maupun gagal, maka fungsi usersCallback() perlu diubah menjadi seperti ini.


function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
   
      if (isOffline) {
        callback(new Error('cannot retrieve users due offline'), null);
        return;
      }
   
      callback(null, users);
    }, 3000);
  }
   
  function usersCallback(error, users) {
    if (error) {
      console.log('process failed:', error.message);
      return;
    }
    console.log('process success:', users);
  }
   
  getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
  getUsers(true, usersCallback); // process failed: cannot retrieve users due offline

// Apakah Anda sudah paham dengan pola callback ini? Untuk mengasah pemahaman, cobalah selesaikan tantangan yang kami sediakan di bawah ini.

// Tantangan!

// Kami menyediakan fungsi asynchronous untuk mendapatkan nilai daftar provinsi di Indonesia dengan nama getProvinces(). Fungsi tersebut akan mengembalikan daftar provinsi pada pemanggilan pertama dan menghasilkan error pada pemanggilan kedua. Fungsi getProvinces() hanya menerima satu argumen, yakni fungsi callback yang perlu Anda buat.

// Cobalah panggil fungsi tersebut dan tangani proses asynchronous-nya dengan pola callback. Pastikan callback yang Anda buat dapat menangani proses yang gagal dan berhasil.

// Jika Anda berhasil menyelesaikan tantangan ini, hasilnya akan tampak seperti ini.

//solusition.js
const { getProvinces } = require('./utils');

// solution
function provincesCallback(error, provinces) {
  if (error) {
    console.log(error.message);
    return;
  }

  console.log(provinces);
}

getProvinces(provincesCallback);
getProvinces(provincesCallback);

//index.js
const { getProvinces } = require('./utils');

// @TODO: call getProvinces() twices and log the result

// Callback Hell

// Seiring kompleksnya pengembangan aplikasi, kita akan semakin banyak menggunakan fungsi yang berjalan secara asynchronous. Tidak jarang kita perlu mengagregasikan banyak data dari berbagai proses asynchronous. Masalah akan timbul ketika sebuah proses asynchronous perlu dijalankan setelah tahapan serupa lainnya selesai.

// Sebagai developer pemula, kita sangat terbiasa dengan operasi yang saling menunggu pada proses synchronous. Jika Anda coba baca kode di bawah ini, tentu akan mudah memahami alurnya.


function getUserWeather(userId) {
    try {
      const user = getUser(userId);
      const weather = getWeather(user.location);
      return { ...user, ...weather };
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
   
  const userWeather = getUserWeather(1);
  console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }

// Kode di atas menunjukkan sebuah fungsi getUserWeather() yang bertujuan untuk mendapatkan cuaca berdasarkan userId. Anda juga bisa melihat bahwa data cuaca didapatkan dengan cara mengagregasi dua fungsi, yakni getUser() dan getWeather(). Jika kedua fungsi tersebut berjalan secara sinkron, tentu proses agregasi akan mudah karena proses berjalan secara terurut dan saling menunggu.

// Sekarang bayangkan jika fungsi getUser() dan getWeather() berjalan secara asinkron dan memanfaatkan pola callback. Untuk menghasilkan output yang sama, kita perlu ubah kode menjadi seperti ini.



//inde.js
const { getUser, getWeather } = require('./utils');

function getUserWeather(userId, callback) {
  getUser(userId, (error, user) => {
    if (error) {
      callback(error, null);
    }

    getWeather(user.location, (error, weather) => {
      if (error) {
        callback(error, null);
      }

      callback(null, { ...user, ...weather });
    });
  });
}

getUserWeather(1, (error, userWeather) => {
  if (error) {
    console.log(error);
  }

  console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
});

//utils.js
function getUser(id, callback) {
    setTimeout(() => {
      if (!id) {
        callback(new Error("User ID is required"), null);
      }
  
      callback(null, { id, name: 'John Doe', location: "Jakarta" });
    }, 1000);
  }
  
  function getWeather(location, callback) {
    setTimeout(() => {
      if (!location) {
        callback(new Error("Location is required"), null);
      }
  
      callback(null, { weather: "Sunny", temperature: 30 });
    }, 1000);
  }
  
  module.exports = { getUser, getWeather };

  
//   Menurut Anda, apakah kode di atas masih nyaman untuk dibaca? Jelas tidak jika kita bandingkan dengan versi sinkron. Ini merupakan contoh sederhana dalam penggambaran masalah yang sering dihadapi pada kasus nyata ketika bermain dengan proses asinkron. Kami baru mencontohkan penggunaan dua fungsi asinkron yang saling membutuhkan, bagaimana jika ada tiga atau bahkan lebih? Tentu kodenya lebih semrawut untuk dibaca.

//   Menurut kami, masalah yang berhubungan dengan readability code adalah masalah yang serius. Saking seriusnya, masalah ini dikenal sebagai callback hell atau pyramid of doom. Anda bisa lihat betapa menyeramkannya lengkungan kode ketika kita banyak menggunakan callback, hingga bisa tampak seperti gambar di bawah ini.

//Pola callback dapat digunakan pada bahasa pemrograman apa pun, begitu juga masalah yang dihasilkan olehnya. Beruntunglah di JavaScript terdapat cara lain dalam menangani proses asynchronous lebih baik lagi dengan menggunakan Promise. Ia dapat membuat kode kita lebih mudah dibaca dibanding callback. Berikut adalah gambaran kode yang memanfaatkan Promise dalam proses asynchronous-nya.

const { getUser, getWeather } = require('./utils');

function getUserWeather(userId) {
  let user;
  
  return getUser(userId)
    .then((_user) => { 
      user = _user;
      return getWeather(user.location)
    })
    .then((weather) => ({ ...user, ...weather }))
}

getUserWeather(1)
  .then(console.log)
  .catch(console.log);









