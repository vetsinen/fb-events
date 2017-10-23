let geocoder = require('geocoder');
let metro = require('./metro-locs');
geocoder.geocode("вулиця Саксаганського 160, Київ, Україна", function ( err, data ) {
  // console.log(data.results[0]);
  console.log(metro.closestMetro(data.results[0].geometry.location.lat,
      data.results[0].geometry.location.lng));
});

// let distance = require('google-distance');
// distance.get(
//     {
//         origin: '50.450086, 30.468206',
//         destination: '50.458772, 30.4199517'
//     },
//     function (err, data) {
//         if (err) return console.log(err);
//         console.log(data);
//     });


// var f = new Promise((resolve,reject)=>{setTimeout(function () {resolve(5)},0)});
// console.log(f);
// f.then((rez)=>{console.log(rez)});
// let f=()=>4;
// console.log(f());
// const fa = async ()=>{setTimeout(()=>{yield 1},0)};
// var fv = fa();
// console.log(fv);
