function tripleAdd() {}

const car1 = {
  brand: "Porsche",
  getCarDescription: function (cost, year, color) {
    console.log(
      `This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`
    );
  },
};

const car2 = {
  brand: "Lamborghini",
};

const car3 = {
  brand: "Ford",
};

// car2.__proto__ = car1;
// call()
car2.getCarDescription = car1.getCarDescription();
car1.getCarDescription.call(car2, 200000, 2013, "yellow");
car1.getCarDescription.apply(car3, [35000, 2012, "black"]);

// class obj{
//     constructor(){
//     }
// }
