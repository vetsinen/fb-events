'use strict';

var EventSearch = require("facebook-events-by-location-core");

var es = new EventSearch();

es.search({
    "lat": 40.710803,
    "lng": -73.964040,
    "accessToken":"EAAH4IuWa9ZAgBAEHecNuDf0SVL8uplFGAZBuFoZAKKBZAu9GTuMWUkCMBdZCHDOScqZCj5Fe6X6Pcuv4t9ZAeE8djHq3O9GW6wnHfsCGMJEYfZCRoO0WlfILGjYMfO0JPfBAatoRNAavZCbcMTBcjDOJm6Qf0KzH3szCOxY19pWDuAdNIpaenqqzNfVdzdkQtWvHsOkWVlN7W2QZDZD"
}).then(function (events) {
    console.log(JSON.stringify(events));
}).catch(function (error) {
    console.error(JSON.stringify(error));
});

// var NodeGeocoder = require('node-geocoder');
// var geocoder = NodeGeocoder();
//
// let metro = require('./metro-locs');
// geocoder.geocode("вулиця Жилянського 35, Київ, Україна", function ( err, data ) {
//   console.log(data[0]);
//   console.log(metro.closestMetro(data[0].latitude, data[0].longitude)); //returns closest station
// });


// let v = [{name: "нода", packages: 100}, {name: 'пайтон', packages: 300}, {name: 'рубі', packages: 117}];
// v.sort((a, b) => a.packages > b.packages);
// console.log(v);

// let d =
//     [{title: 'Майдан Незалежності', distance: 2250},
//         {title: 'Академмістечко', distance: 17361},
//         {title: 'Харківська', distance: 16256},
//         {title: 'Славутич', distance: 11305},
//         {title: 'Видубичі', distance: 6443},
//         {title: 'Дружби народів', distance: 4270},
//         {title: 'Печерська', distance: 3369},
//         {title: 'Кловська', distance: 2540},
//         {title: 'Палац спорту', distance: 1379},
//         {title: 'Золоті ворота', distance: 1471},
//         {title: 'Лукянівська', distance: 4086},
//         {title: 'Дорогожичі', distance: 7685},
//         {title: 'Сирець', distance: 9601},
//         {title: 'Теремки', distance: 8823},
//         {title: 'Іподром', distance: 7067},
//         {title: 'Виставковий центр', distance: 6100},
//         {title: 'Васильківська', distance: 4532},
//         {title: 'Голосіївська', distance: 3473},
//         {title: 'Деміївська', distance: 2908},
//         {title: 'Либідська', distance: 2592},
//         {title: 'Святошин', distance: 13375},
//         {title: 'Бориспільська', distance: 19688},
//         {title: 'Червоний хутір', distance: 20937}];
//
// sd = d.sort(function (a, b) {
//     return a.distance - b.distance;
// });
// console.log(sd);

// function mysort(a) {
//     let al=a.length;
//     let more = true;
//     while (more) {
//         more = false;
//         for (let i=0;i<al-1;i++){
//             if (a[i].distance>a[i+1].distance){
//                 more=true;
//                 let t=a[i];a[i]=a[i+1];a[i+1]=t;
//             }
//         }
//     }
//     return a;
// }

//     {title: 'Позняки', distance: 14372},
//     {title: 'Осокорки', distance: 12475},

//     {title: 'Палац «Україна', distance: 1767},
//     {title: 'Олімпійська', distance: 797},
//     {title: 'Площа Льва Толстого', distance: 1155},
//     {title: 'Житомирська', distance: 16163},
//     {title: 'Поштова площа', distance: 2967},
//     {title: 'Контрактова площа', distance: 3150},
//     {title: 'Тараса Шевченка', distance: 3835},
//     {title: 'Петрівка', distance: 5070},
//     {title: 'Оболонь', distance: 6586},
//     {title: 'Мінська', distance: 7597},
//     {title: 'Героїв Дніпра', distance: 8586},
//     {title: 'Лісова', distance: 15336},
//     {title: 'Чернігівська', distance: 13705},
//     {title: 'Дарниця', distance: 11613},
//     {title: 'Лівобережна', distance: 10053},
//     {title: 'Гідропарк', distance: 7626},
//     {title: 'Арсенальна', distance: 4162},
//     {title: 'Хрещатик', distance: 2308},
//     {title: 'Театральна', distance: 1474},
//     {title: 'Університет', distance: 1053},
//     {title: 'Вокзальна', distance: 2446},
//     {title: 'Політехнічний інститут', distance: 5027},
//     {title: 'Шулявська', distance: 7365},
//     {title: 'Берестейська', distance: 10195},
//     {title: 'Нивки', distance: 12020},
// let sd = mysort(d);
// console.log(sd.slice(0,2));


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
