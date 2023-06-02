const message = (name) => {
    console.log(`Hello ${name}`)
}

const moment = require('moment');
const date = moment().format("MM Do YY");
console.log(date);

module.exports = {message};