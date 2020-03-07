const axios = require('axios');


const getWeather = async (lat, lon) => {
const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=836df7723329af745cf33e05afc54835`);

return resp.data.main.temp;
}



module.exports = {
getWeather    
}