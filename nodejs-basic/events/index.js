const birthdayEventListener = (name) => {
    console.log(`Happy Birthday ${name}`);
}

//todo 1
const { EventEmitter } = require('events');


//todo 2
const myEmitter = new EventEmitter();


//todo 3
const onBirthdayEventListener = ({name}) => {
    birthdayEventListener(name);
}
myEmitter.on('saturday', onBirthdayEventListener);


//todo 4
myEmitter.emit('saturday', {name : 'AlbiMudakar'});
