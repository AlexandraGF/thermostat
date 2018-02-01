var Thermostat = function (){
  defaultTemp = 20;
  this.currentTemp = 20;
  minimumTemp = 10;
  maxpsonTemp = 25;
  maxpsoffTemp = 32;
};


Thermostat.prototype.start = function () {
  // grades = 20;
  return defaultTemp;
};

Thermostat.prototype.up = function (num) {
  if ((this.currentTemp + num) > maxpsonTemp) {
    return this.currentTemp = maxpsonTemp;
  }

  this.currentTemp += num;
};

Thermostat.prototype.down = function (num) {
    if ((this.currentTemp - num) < minimumTemp) {
      return this.currentTemp = minimumTemp;
    }

    return this.currentTemp -= num;
};

Thermostat.prototype.currentTemp = function () {
  return currentTemp;
};



















// var Fizzbuzz = function(){};
// var Length = function(){};
//
// Fizzbuzz.prototype._isDivisibleBy = function(num, div) {
//   return (num % div === 0);
// };
//
// Fizzbuzz.prototype.isDivisibleByThree = function (num) {
//   return this._isDivisibleBy(num, 3);
// };
//
// Fizzbuzz.prototype.isDivisibleByFive = function (num) {
//   return this._isDivisibleBy(num, 5);
// };
//
// Fizzbuzz.prototype.isDivisibleByFifteen = function (num) {
//   return this._isDivisibleBy(num, 15);
// };
//
// Fizzbuzz.prototype.display = function (num) {
//   if (this.isDivisibleByFifteen(num)) {
//     return "FizzBuzz";
//   }
//   if (this.isDivisibleByThree(num)) {
//     return "Fizz";
//   }
//   if (this.isDivisibleByFive(num)) {
//     return "Buzz";
//   }
//   return num
// };
//
// var fizzBuzz = new Fizzbuzz();
//
// for (var i = 1; i <= 100; i++) {
//   console.log(fizzBuzz.display(i));
// }
//
//
// Length.prototype.see = function (name) {
//   if (name.length == 5 ) {
//     return name + "hey";
//   }
//   return name;
// };




// var Fizzbuzz = function(){};
//
// Fizzbuzz.prototype.isDivisibleByThree = function (num) {
//   return (num % 3 === 0);
// };
//
// Fizzbuzz.prototype.isDivisibleByFive = function (num) {
//   return (num % 5 === 0);
// };
//
// Fizzbuzz.prototype.isDivisibleByFifteen = function (num) {
//   return (num % 15 === 0);
// };
