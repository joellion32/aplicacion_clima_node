const argv = require('../src/config/yargs').argv;
const location = require('../src/controllers/location');
const weather = require('./controllers/weather');




const getInfo = async (params) => {


try {
const coords = await location.getLocation(params);
const temp = await weather.getWeather(coords.lat, coords.lng);
return `the weather of ${coords.location} it is ${temp} \n
el clima de ${coords.location} es de ${temp}`
} catch (error) {
    return `request error ${error}`;
}


}





getInfo(argv.location).then(resp => {
console.log(resp)
}).catch(console.log);



