var Thermostat = function (){
  DEFAULT_TEMP = 20;
  this.currentTemp = DEFAULT_TEMP;
  MINIMUM_TEMP = 10;
  MAX_POWER_SAVING_ON_TEMP = 25;
  MAX_POWER_SAVING_OFF_TEMP = 32;
  this.powerSave = true;
};

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
