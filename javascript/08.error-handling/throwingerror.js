//Lalu, bagaimana jika json yang didapat adalah seperti ini?


// const json = '{ "age": 20 }';
     
// try {
//   const user = JSON.parse(json);
 
//   console.log(user.name); // undefined
//   console.log(user.age);  // 20
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

//Secara sintaksis, kode di atas tidak menimbulkan eror, sehingga blok catch akan diabaikan. Namun, tidak adanya properti name pada json sebenarnya sama saja dengan eror karena akan berdampak pada jalannya program kita.
//Untuk mengatasinya, kita bisa menggunakan throw. Operator ini akan “melemparkan” eror pada program, sehingga eksekusi kode akan masuk pada blok catch. Berikut ini adalah contoh mengimplementasikan throw untuk menimbulkan eror kita sendiri:

const json = '{ "age": 20 }';
 
try {
  const user = JSON.parse(json);
 
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }
 
  console.log(user.name); // undefined
  console.log(user.age);  // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}
 
/* output
JSON Error: 'name' is required.
*/

//Eror berhasil ditangani, tetapi konsol tetap menampilkan pesan “JSON Error”, lantas bagaimana kita bisa menampilkan pesan eror sesuai eror yang muncul?
//Jawabannya adalah dengan if statement.

try {
    // ...
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    } else {
      console.log(error.stack);
    }
  }

//Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi. Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.