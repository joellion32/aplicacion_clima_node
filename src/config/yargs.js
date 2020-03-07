const argv = require('yargs').options({
location: {
alias: 'l',   
demand: true,
desc: "Enter the city and then generate the geolocation and the weather"    
}    
}).argv;

module.exports = {
 argv   
}