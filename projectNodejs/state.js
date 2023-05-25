const coffeeStock = require('./index');

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams){
        console.log("suceess!")
    } else {
        console.log("sorry, you need buying beans:(")
    }

}

makeCoffee("v60", 0);
