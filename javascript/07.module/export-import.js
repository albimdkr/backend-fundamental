// Expore
//Modul bekerja dengan cara exporting dan importing nilai. Baik itu nilai variabel, fungsi, array, object, atau class agar bisa digunakan pada berkas JavaScript lain. Satu berkas JavaScript terdiri dari satu module yang dapat kita export menjadi lebih dari satu nilai.
//Dalam environment Node.js, gunakan perintah module.exports untuk melakukan proses export module. Setiap berkas JavaScript yang berjalan pada Node, memiliki objek module lokal yang memiliki properti exports. Properti tersebut digunakan untuk mendefinisikan nilai apa yang akan diekspor dari berkas tersebut.
//Buatlah berkas baru bernama state.js pada project Anda. Kode di bawah ini merupakan contoh bagaimana melakukan export nilai menggunakan module.exports.

const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
  }
   
  module.exports = coffeeStock;


//   Kode module.exports = coffeeStock membuat object coffeeStock ditetapkan sebagai nilai dari module.exports. Nilai properti exports ini nantinya bisa di-import dan digunakan pada berkas JavaScript lain.
//   Jika Anda mencoba melihat nilai module yang ada pada berkas state.js dengan menambahkan kode console.log(module) di akhir berkas, maka kita akan melihat object coffeeStock menjadi nilai dari properti exports.
//   Catatan: untuk melihat hasilnya, Anda harus menjalankan dengan perintah node state.js.


//Lalu bagaimana caranya untuk melakukan import atau menggunakan object yang sudah di-export? Caranya adalah menggunakan method require().
//index.js
const coffeeStock = require('./state');
console.log(coffeeStock);
 
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/

//state.js
// const coffeeStock = {
//     arabica: 100,
//     robusta: 150,
//     liberica: 200
//   };
   
//   module.exports = coffeeStock;

//Dalam inisialisasi variabel coffeeStock (nama variabel bebas kita tentukan), kita gunakan method require() dengan memberikan parameter lokasi berkas state.js. Dengan begitu variabel coffeeStock akan memiliki nilai module.exports yang sama pada berkas state.js. Setelah mendapatkan nilainya, kita bebas menggunakannya seperti variabel lokal pada umumnya.
const coffeeStockk = require('./state');
     
const makeCoffee = (type, miligrams) => {
  if (coffeeStockk[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
}
 
makeCoffee("robusta", 80); 
/* output
Kopi berhasil dibuat!
*/

//Tips: Jika kita menggunakan lokasi yang relatif (dapat berubah/dipindahkan), pastikan awali dengan menuliskan ./. Contohnya, berkas index.js dan state.js berada pada folder yang sama, maka kita cukup menuliskannya dengan ./state.js.

