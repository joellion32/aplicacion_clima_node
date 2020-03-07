const axios = require('axios');

const getLocation = async (loc) => {

const encondedUrl = encodeURI(loc);

// request http
const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${loc}`,
    headers: {'x-rapidapi-key': '819b00bc95msha8dac5fc1ed31b7p1c41bbjsnda3c774c106b'}
  });

  const resp = await instance.get();

  if(resp.data.Results.length === 0){
      throw new Error(`There are no results for: ${loc}`);
  }

  const data = resp.data.Results[0];
  const location = data.name;
  const lat = data.lat;
  const lng = data.lon;


  return {
      location,
      lat,
      lng
  }
}


// get request Api openweathermap

module.exports = {
    getLocation    
}