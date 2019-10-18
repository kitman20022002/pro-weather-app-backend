const request = require('request');

const url = 'https://api.darksky.net/forecast/149866425056f58cba752a06a3ad025e/37.8267,-122.4233?units=si';

request({url : url, json :true},(error , response)=>{
    if(error){

    }else if(response.body.error){

    }
   console.log(response.body.currently.temperature);
});


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2l0bWFuMjAwMjIwMDIiLCJhIjoiY2sxd3BjOG54MDQ3ajNucWw0NzBqajRyciJ9.oCz-m_TQXx68DtTXL07nSA&limit=1';


request({url : geocodeURL, json :true},(error , response)=>{

    if(error){

    }else if(response.body.features.length === 0){

    }else {
        const latitude = response.body.features[0].center[0];
        const longitude = response.body.features[0].center[1];
    }
});
