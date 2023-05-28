import _ from 'lodash';


// function coffee (){
//     console.log("Menyalakan mesin");
//     console.log("Grinder beans");
//     console.log("Memanaskan air");
//     console.log("Siapkan Tisu");
//     console.log("Siapkan Driver V60");
//     console.log("Tuangkan Coffee");
//     console.log("Brewing coffee");
//     console.log("Coffee siap dinikmati");
// }

// const coffeeStock = {
//     arabica : 100,
//     robusta : 200,
//     liberica : 30,
// }
// const isCoffeeMachineReady = true;

// wrong
// module.exports = coffeeStock;
// module.exports = isCoffeeMachineReady;

// correct (if have multiple value)
//module.exports = {coffeeStock, isCoffeeMachineReady};




//=====================
//ES6 MODULE
const coffeeStock = {
    arabica : 100,
    robusta : 200,
    liberica : 30,
}
const isCoffeeMachineReady = true;


function testLodash(){
    const myArray = [1,2,3,4,5];
    const sum = _.sum(myArray);
    console.log(sum);
}

export {coffeeStock, isCoffeeMachineReady, testLodash};