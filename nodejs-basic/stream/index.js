const fs = require('fs');

const fileReadCallback = (error, data) => {
    if(error){
        console.log('Data gagal dibaca!');
    }
    console.log(data);
}

fs.readFile('input.txt', 'UTF-8', fileReadCallback);

const writableStream = fs.createWriteStream('output.txt');
writableStream.write('Hallo');
writableStream.write('I am javascript')
writableStream.end('see you on advance session');

