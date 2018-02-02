describe('Thermostat', function (){
  // var thermostat
});

  describe('thermostat initial state', function(){
    it('starts at 20C', function() {
      thermostat = new Thermostat();
      expect(thermostat.start()).toEqual(20);
    });

  });

  describe('thermostat can ', function(){
    it('increase the temperature with the up function', function() {
      thermostat = new Thermostat();
      thermostat.up(2)
      expect(thermostat.currentTemp).toEqual(22);
    });

    it('increase the temperature no more than 25C when power saving is on', function(){
      thermostat = new Thermostat();
      thermostat.up(6);
      expect(thermostat.currentTemp).toEqual(25);
    });

    it('increase the temperature no more than 32C when power saving is off', function(){
      thermostat = new Thermostat();
      thermostat.up(13);
      expect(thermostat.currentTemp).toEqual(32);
    });

    it('decrease the temperature with the down function', function() {
      thermostat = new Thermostat();
      thermostat.down(1)
      expect(thermostat.currentTemp).toEqual(19);
    });

  });

    describe('minimum temperature ', function () {
      it('cannot be lower than 10C', function() {
        thermostat = new Thermostat();
        thermostat.down(11);
        expect(thermostat.currentTemp).toEqual(10);
      });


    });

    describe('power saving mode ', function () {
      it('power saving mode is on by default', function(){
        thermostat = new Thermostat();
        expect(thermostat.powerSave).toBe(true);
    });

    it('power saving mode can be switched off', function(){
      thermostat = new Thermostat();
      thermostat.switchOff()
      expect(thermostat.powerSave).toBe(false);
  });

  });















// describe('Fizzbuzz', function() {
//   var fizzbuzz
//   beforeEach(function() {
//     fizzbuzz = new Fizzbuzz();
//   });
//
//   describe('knows when a number is', function() {
//     it('divisible by 3', function() {
//       // fizzbuzz = new Fizzbuzz();
//       expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
//     });
//
//     it('divisible by 5', function() {
//       // fizzbuzz = new Fizzbuzz();
//       expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
//     });
//
//     it('divisible by 15', function() {
//       // fizzbuzz = new Fizzbuzz();
//       expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
//     });
//
//   });
//
//   describe('knows when a number is NOT', function() {
//     it('divisible by 3', function() {
//       // fizzbuzz = new Fizzbuzz();
//       expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
//     });
//
//     it('divisible by 5', function() {
//       // fizzbuzz = new Fizzbuzz();
//       expect(fizzbuzz.isDivisibleByFive(6)).toBe(false);
//     });
//
//     it('divisible by 15', function() {
//       // fizzbuzz = new Fizzbuzz();
//       expect(fizzbuzz.isDivisibleByFifteen(14)).toBe(false);
//     });
//   });
//
//   describe('Number should display to ', function() {
//     it('"Fizz" when divisible to 3', function() {
//       expect(fizzbuzz.display(3)).toEqual("Fizz");
//     });
//
//     it('"Buzz" when divisible to 5', function() {
//       expect(fizzbuzz.display(5)).toEqual("Buzz");
//     });
//
//     it('"FizzBuzz" when divisible to 15', function() {
//       expect(fizzbuzz.display(15)).toEqual("FizzBuzz");
//     });
//
//   });
// });
//
//
// describe('Length', function() {
//   var length
//   beforeEach(function() {
//     length = new Length();
//   });
//
//   describe('knows when a number is', function() {
//     it('divisible by 3', function() {
//       // fizzbuzz = new Fizzbuzz();
//       expect(length.see("Alexa")).toEqual("Alexahey");
//     });
//   });
//   });



//
//
// describe('Fizzbuzz', function() {
//   var fizzbuzz
//   beforeEach(function() {
//     fizzbuzz = new Fizzbuzz();
//   });
//
//   describe('knows when a number is', function() {
//     it('divisible by 3', function() {
//       // fizzbuzz = new Fizzbuzz();
//       expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
//     });
//
//     it('divisible by 5', function() {
//       // fizzbuzz = new Fizzbuzz();
//       expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
//     });
//
//     it('divisible by 15', function() {
//       // fizzbuzz = new Fizzbuzz();
//       expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
//     });
//
//   });
//
//   describe('knows when a number is NOT', function() {
//     it('divisible by 3', function() {
//       // fizzbuzz = new Fizzbuzz();
//       expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
//     });
//
//     it('divisible by 5', function() {
//       // fizzbuzz = new Fizzbuzz();
//       expect(fizzbuzz.isDivisibleByFive(6)).toBe(false);
//     });
//
//     it('divisible by 15', function() {
//       // fizzbuzz = new Fizzbuzz();
//       expect(fizzbuzz.isDivisibleByFifteen(14)).toBe(false);
//     });
//   });
// });
//
