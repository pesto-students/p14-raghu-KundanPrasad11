const temperatureData = {
  'New York': 20,
  'London': 18,
  'Paris': 22,
  'Tokyo': 25,
  'Sydney': 28,
};

const getTemperatureForCity = () => {
  //creating a closure
  const cache = {};
  return function (cityName) {
    if (!cache[cityName]) {
      cache[cityName] = temperatureData[cityName];
    } else {
      console.log("cached data")
    }
    return cache[cityName];
  }
}

const memeoizedGetTemperatureForCity = getTemperatureForCity()

const temperature1 = memeoizedGetTemperatureForCity('New York');
console.log(temperature1);

const temperature2 = memeoizedGetTemperatureForCity('New York');
console.log(temperature2);

const temperature3 = memeoizedGetTemperatureForCity('London');
console.log(temperature3);

const temperature4 = memeoizedGetTemperatureForCity('London');
console.log(temperature4); 