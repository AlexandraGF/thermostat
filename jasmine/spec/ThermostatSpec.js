describe('Thermostat', function (){});

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
      thermostat.switchOff();
      thermostat.up(13);
      expect(thermostat.currentTemp).toEqual(32);
    });

    it('decrease the temperature with the down function', function() {
      thermostat = new Thermostat();
      thermostat.down(1)
      expect(thermostat.currentTemp).toEqual(19);
    });

    it('be reset at 20C', function() {
      thermostat = new Thermostat();
      thermostat.up(5);
      thermostat.reset();
      expect(thermostat.currentTemp).toEqual(20);
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

  describe('check the thermostat current energy usage at ', function(){
    it('high-usage', function(){
      thermostat = new Thermostat();
      thermostat.up(7);
      expect(thermostat.usage()).toEqual("High usage");
    });
    it('medium-usage', function(){
      thermostat = new Thermostat();
      thermostat.down(2);
      expect(thermostat.usage()).toEqual("Medium usage");
    });
    it('low-usage', function(){
      thermostat = new Thermostat();
      thermostat.down(5);
      expect(thermostat.usage()).toEqual("Low usage");
    });
  });
