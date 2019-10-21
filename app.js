const axios = require("axios");
const express = require('express');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
require('dotenv').config()
const MAPBOX_API_KEY = process.env.MAPBOX_API_KEY;
const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY;
const MAPBOX_URL = process.env.MAPBOX_URL;
const DARKSKY_URL = process.env.DARKSKY_URL;

const app = express();
app.listen(process.env.PORT);

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const url = MAPBOX_URL + '/geocoding/v5/mapbox.places/' + city + '.json?access_token=' + MAPBOX_API_KEY + '&limit=1';

    const result = await axios.get(url);
    const latitude = result.data.features[0].center[0];
    const longitude = result.data.features[0].center[1];
    const darksky = DARKSKY_URL + '/forecast/' + DARKSKY_API_KEY + '/' + longitude + ',' + latitude + '?units=si';

    const resultWeather = await axios.get(darksky);

    return res.status(200).send(resultWeather.data);
});
