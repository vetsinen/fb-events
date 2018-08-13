/**
 * @fileOverview: starts express app
 * @type {createApplication}
 */
var express = require('express');
var app = express();
let geocoder = require('geocoder');
let metro = require('./metro-locs');

app.get('/', function (req, res) {
    // res.send('Hello World!');
    geocoder.geocode("вулиця Жилянського 35, Київ, Україна", function (err, data) {
        // console.log(data.results[0]);
        let out = ""+ metro.closestMetro(data.results[0].geometry.location.lat,
            data.results[0].geometry.location.lng);
        res.send(out);
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});