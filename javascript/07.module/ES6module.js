// ES6 Module
// Untuk melakukan export dan import module JavaScript, ada dua cara yang bisa kita gunakan. Sebelumnya kita telah mempelajari salah satu cara yaitu format CommonJS yang berjalan di lingkungan Node.js. Sejak ES6, JavaScript memiliki sistem modular secara native. Karena itu, sistem ini dapat dijalankan baik pada environment Node.js maupun browser.
// Pada Node.js sebelumnya tidak ada perbedaan antara export satu atau beberapa nilai. Semua nilai yang akan diekspor dijadikan nilai dari properti module.exports. Pada ES6 module, jika kita hanya mengekspor satu nilai pada sebuah berkas JavaScript baik itu primitive value, function, array, object, atau class, kita gunakan keyword export default. Contohnya seperti ini:

const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
  };
   
  export default coffeeStock;

// Lalu untuk mengimpor nilainya kita dapat menggunakan keyword import … from seperti berikut ini:
//import coffeeStock from "./state.js";

// Berbeda dengan gaya Node.js, kita gunakan keyword import ketika mendeklarasikan variabel yang di-import. Kita juga menggunakan keyword from untuk menentukan lokasi berkas JavaScript-nya.
// Ketika menggunakan export default, kita dapat menggunakan penamaan apa saja saat mendeklarasikan variabel untuk menyimpan nilai yang diimpor.
import stock from "./state.js";

//index.js
// import coffeeStock from './state.js';
     
// const displayStock = stock => {
//   for (const type in stock) {
//     console.log(type);
//   }
// }
 
// displayStock(coffeeStock);

//state.js
// const coffeeStock = {
//     arabica: 100,
//     robusta: 150,
//     liberica: 200
//   };
   
//   export default coffeeStock;


// Hal tersebut akan error dengan pesan
// error : cannot use import statement
//karna hal tersebut kita belum mengaktifkan ES6 pada package.json nya
//Tambahkan type : module, pada packeage.json 
// {
//     "name": "coffeemachine",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "type": "module", //ini dia
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1",
//       "start": "node index.js"
//     },
//     "author": "",
//     "license": "ISC"
//   }

// Bagaimana ekspor beberapa nilai pada ES6
//index.js
// const coffeeStock = {
//     arabica: 100,
//     robusta: 150,
//     liberica: 200
//   };
// const isCoffeeMachineReady = true;   
// export { coffeeStock, isCoffeeMachineReady };

//state.js
import { coffeeStock, isCoffeeMachineReady } from './state.js';
console.log(coffeeStock);
console.log(isCoffeeMachineReady);
  /* output
  { arabica: 100, robusta: 150, liberica: 200 }
  true
  */

//Kalau menginginkan nama variabel nya di ubah pada state.js pake AS
//state.js
import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';
console.log(stock);
console.log(isCoffeeMachineReady);
 
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/