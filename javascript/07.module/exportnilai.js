//Pada materi sebelumnya kita telah mengetahui cara export nilai dari suatu berkas JavaScript. Lantas bagaimana jika kita perlu meng-export beberapa nilai sekaligus?

const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
  };
   
  const isCoffeeMachineReady = true;

//bisa menggunakan kedua cara pertama :
  module.exports = coffeeStock;
  module.exports = isCoffeeMachineReady;

//namun
//Baris kode kedua berarti kita menginisialisasikan ulang nilai properti module.exports sehingga nilai yang di-export hanya variabel isCoffeeMachineReady.

//solusinya
module.exports = {coffeeStock, isCoffeeMachineReady}; 


//gunakan destruction object
const {coffeeStock, isCoffeeMachineReady} = require('./state');
     
console.log(coffeeStock);
console.log(isCoffeeMachineReady);
 
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/
//Namun ingat, ketika menggunakan destructuring object pastikan penamaan variabel lokal sesuai dengan properti objeknya. Jika tidak, maka variabel tersebut akan menghasilkan undefined.