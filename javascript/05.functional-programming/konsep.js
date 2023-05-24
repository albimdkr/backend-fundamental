// Pure
let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80

// bagaimana cara membuat fungsi tersebut menjadi pure? Mudah!
const hitungLuasLingkaran1 = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
  }
  
  console.log(hitungLuasLingkaran1(4)); // 50.24
  console.log(hitungLuasLingkaran1(4)); // 50.24
  console.log(hitungLuasLingkaran1(8)); // 200.96
  console.log(hitungLuasLingkaran1(8)); // 200.96


//   Dengan memindahkan nilai PI secara konstan di dalam fungsi, maka dapat dipastikan nilai tersebut tidak akan berubah atau tak sengaja diubah. Dengan begitu fungsi selalu menghasilkan nilai yang sama bila nilai parameter yang diberikan sama.
//   Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.
//   Untuk lebih jelasnya, coba lihat contoh kode berikut:
  const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person,
    newPerson
  });
  
  /**
   * Output:
   *  {
        person: { name: 'Bobo', age: 18 },
        newPerson: { name: 'Bobo', age: 18 }
      }
  */
//   Fungsi createPersonWithAge bertujuan untuk membuat objek person baru dengan tambahan properti age dari objek person yang ada. Namun alih-alih hanya membuat objek baru, ia juga malah mengubah nilai dari objek lama. Nah, hal inilah yang menyebabkan fungsi createPersonWithAge bukanlah pure function.
//   Lalu bagaimana cara membuat fungsi tersebut menjadi pure? Mudah, kita manfaatkan destructuring object daripada mengubah objek tersebut secara langsung.

const createPersonWithAge1 = (age, person) => {
    return { ...person1, age };
  };
  
  const person1 = {
    name: 'Bobo'
  };
  
  const newPerson1 = createPersonWithAge(18, person1);
  
  console.log({
    person1,
    newPerson1
  });
  
  /**
   * Output:
   *  { 
   *    person: { name: 'Bobo' },
   *    newPerson: { name: 'Bobo', age: 18 } 
   *  }
  */
  
// agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang Anda buat.
//     - Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
//     - Hanya bergantung pada argumen yang diberikan.
//     - Tidak menimbulkan efek samping.
// Bila 3 konsep di atas terpenuhi, maka bisa dipastikan Anda membuat sebuah pure function.



// Immutability
// Konsep yang kedua adalah immutability. Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat. Kontras dengan mutable yang artinya objek boleh diubah setelah objek tersebut dibuat.
// Konsep immutability sangat kental pada paradigma FP. Anda bisa lihat sebelumnya pada contoh penggunaan array map. Ketika menggunakan array.map(), alih-alih ia mengubah nilai dari array itu sendiri, malah ia membuat atau menghasilkan array baru.

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({
    names,
    newNamesWithExcMark,
});

/**
 * {
     names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
     newNamesWithExcMark: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
   }
 */

//    Lantas, bagaimana bila kita benar-benar perlu mengubah nilai dari sebuah objek? Contohnya seperti ini:

const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);

console.log(user);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */

// Yup! Tujuan Anda memang tercapai namun itu bukanlah konsep dari paradigma FP. Bila Anda ingin menerapkan FP sepenuhnya, hindari cara seperti di atas. Lantas bagaimana solusinya? Sama seperti fungsi array map(), alih-alih mengubah nilai objek secara langsung, terapkan perubahan tersebut pada nilai return dalam objek baru.
const user2 = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user2) => {
    return { ...user2, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user2);

console.log(newUser);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */



// Rekursif
// Konsep selanjutnya yang ada di Functional Programming adalah rekursif. Apa itu rekursif? Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.
// Kita akan mencoba mengubah fungsi countDown yang biasanya kita buat menggunakan sintaksis iterasi seperti for, foreach, while seperti kode di bawah menjadi bentuk rekursif.
//Before
const countDown1 = start => {
    do {
      console.log(start);
      start -=1;
    }
    while(start > 0);
  };
  countDown1(10);

//AFter
const countDown2 = start => {
    console.log(start);
    if(start > 0) countDown2(start-1);
  };
  countDown2(10);

// Higher-Order Function
// JavaScript memiliki kemampuan First Class Functions, karena itu fungsi pada JavaScript dapat diperlakukan layaknya sebuah data. Kita bisa menyimpan function dalam variabel, memberikan function sebagai parameter pada fungsi lainnya, hingga mengembalikan function di dalam function.
const hello = () => {
    console.log('Hello!')
  };
  
  const say = (someFunction) => {
    someFunction();
  }
  
  const sayHello = () => {
    return () => {
      console.log('Hello!');
    }
  }
  
  hello();
  say(hello);
  sayHello()();
  
  /**
   * Hello!
   * Hello!
   * Hello!
   */

//   Karena dengan kemampuan First Class Functions-nya itu, kita dapat membuat Higher-Order Function secara mudah. Tunggu, tunggu. Apa itu Higher-Order Function?
//   Higher-Order Function menjadi bagian konsep pada paradigma FP. Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.
//   Teknik Higher-Order Function biasanya digunakan untuk:
//       Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
//       Membuat utilities yang dapat digunakan di berbagai tipe data.
//       Membuat teknik currying atau function composition.
//   Array map() merupakan salah satu contoh Higher-Order Function yang ada di JavaScript. Karena dalam penggunaanya, ia menerima satu buah argumen yang merupakan sebuah function.
//   Dengan mengetahui adanya Higher-Order Function, Anda bisa membuat fungsi map() versi Anda sendiri!

const names4 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name4) => `${name4}!` );

console.log({
  names,
  newNames,
});

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */