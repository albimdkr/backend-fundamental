try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
  } catch (error) {
    console.log("Terjadi error!");  // (4)
  }
   
  /* output
  Awal blok try
  Terjadi error!
  */

//   Object error memiliki beberapa properti utama di dalamnya, yaitu:
//     name : Nama error yang terjadi.
//     message : Pesan tentang detail error
//     stack : Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error.

try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
  }
   
  /* output
  Awal blok try
  ReferenceError
  errorCode is not defined
  ReferenceError: errorCode is not defined
      at file:///home/dicoding/Playground/javascript/CoffeeMachine/error.js:3:5
      at ModuleJob.run (internal/modules/esm/module_job.js:152:23)
      at async Loader.import (internal/modules/esm/loader.js:166:24)
      at async Object.loadESM (internal/process/esm_loader.js:68:5)
  */

    //try-catch-finally
    //Selain try dan catch, ada satu blok lagi yang ada dalam mekanisme error handling pada JavaScript, yaitu finally. Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.
    try {
        console.log("Awal blok try");
        console.log("Akhir blok try");
      } catch (error) {
        console.log("Baris ini diabaikan");
      } finally {
        console.log("Akan tetap dieksekusi");
      }
       
      /* output
      Awal blok try
      Akhir blok try
      Akan tetap dieksekusi
      */







