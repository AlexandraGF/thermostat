var Thermostat = function (){
  DEFAULT_TEMP = 20;
  this.currentTemp = DEFAULT_TEMP;
  MINIMUM_TEMP = 10;
  MAX_POWER_SAVING_ON_TEMP = 25;
  MAX_POWER_SAVING_OFF_TEMP = 32;
  this.powerSave = true;
};


// Thermostat.prototype.start = function () {
//   // grades = 20;
//   return DEFAULT_TEMP;
// };

Thermostat.prototype.reset = function () {
  return this.currentTemp = DEFAULT_TEMP;

};

Thermostat.prototype.up = function (num) {
    if ((this.currentTemp + num) > this._isPowerS()) {
      return this.currentTemp = this._isPowerS();
    }

    this.currentTemp += num;
};


Thermostat.prototype.down = function (num) {
    if ((this.currentTemp - num) < MINIMUM_TEMP) {
      return this.currentTemp = MINIMUM_TEMP;
    }

    return this.currentTemp -= num;
};

// Thermostat.prototype.currentTemp = function () {
//   return currentTemp;
// };

Thermostat.prototype.isPowerSave = function () {
  this.powerSave = true;


};

Thermostat.prototype.switchOff = function () {
  this.powerSave = false;
};

Thermostat.prototype._isPowerS = function () {
 if (this.powerSave == true) {
     return MAX_POWER_SAVING_ON_TEMP;
 };
 if (this.powerSave == false) {
     return MAX_POWER_SAVING_OFF_TEMP;
 };
};

Thermostat.prototype.usage = function () {
  if (this.currentTemp > 24) {
    return 'High usage';
  };
  if (this.currentTemp > 17) {
    return 'Medium usage';
  };
  if (this.currentTemp > 9) {
    return 'Low usage';
  };
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
