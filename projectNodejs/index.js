function coffee (){
    console.log("Menyalakan mesin");
    console.log("Grinder beans");
    console.log("Memanaskan air");
    console.log("Siapkan Tisu");
    console.log("Siapkan Driver V60");
    console.log("Tuangkan Coffee");
    console.log("Brewing coffee");
    console.log("Coffee siap dinikmati");
}

const coffeeStock = {
    arabica : 100,
    robusta : 200,
    liberica : 30,
}

const isCoffeeMachineReady = true;

// wrong
// module.exports = coffeeStock;
// module.exports = isCoffeeMachineReady;

// correct (if have multiple value)
module.exports = {coffeeStock, isCoffeeMachineReady};
