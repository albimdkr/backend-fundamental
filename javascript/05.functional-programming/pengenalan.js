const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

/* output:
   [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
*/

// Sesudah 

const names1 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark1 = names1.map((name) => `${name}!`);

console.log(newNamesWithExcMark1);

/* output:
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 */