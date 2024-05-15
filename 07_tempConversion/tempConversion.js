const convertToCelsius = function(temprature) {
  return +((temprature-32)*5/9).toFixed(1);   
};

const convertToFahrenheit = function(temprature) {
  return +((temprature*9/5)+32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
