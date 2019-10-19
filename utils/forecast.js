const request = require('request');


const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/149866425056f58cba752a06a3ad025e/' + latitude + ',' + longitude + '?units=si';
    const url = 'https://api.darksky.net/forecast/149866425056f58cba752a06a3ad025e/37.8267,-122.4233?units=si';
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to website services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body);
        }
    });
};

module.exports = forecast;
