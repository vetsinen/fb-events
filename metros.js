/**
 * helper script to get coordinates of different metro stations
 * may be launched only one time
 *
 * @type {string[]}
 * @fileOverview helper script to get coordinates of different metro stations
 */
let stations = [
    "Академмістечко"
    , "Житомирська"
    , "Святошин",
    "Нивки"
    , "Берестейська"
    , "Шулявська"
    , "Політехнічний інститут"
    , "Вокзальна",
    "Університет"
    , "Театральна"
    , "Хрещатик", "Арсенальна"
    , "Гідропарк"
    , "Лівобережна",
    "Дарниця"
    , "Чернігівська",
    "Лісова",
    'Героїв Дніпра',
    'Мінська',
    'Оболонь',
    'Петрівка',
    'Тараса Шевченка',
    'Контрактова площа',
    'Поштова площа',
    'Майдан Незалежності',
    'Площа Льва Толстого',
    'Олімпійська',
    'Палац «Україна',
    'Либідська',
    'Деміївська',
    'Голосіївська',
    'Васильківська',
    'Виставковий центр',
    'Іподром',
    'Теремки',
    'Сирець',
    'Дорогожичі',
    'Лукянівська',
    'Золоті ворота',
    'Палац спорту',
    'Кловська',
    'Печерська',
    'Дружби народів',
    'Видубичі',
    'Славутич',
    'Осокорки',
    'Позняки',
    'Харківська',
    'Бориспільська',
    'Червоний хутір',
];
var locations = {}; //initially list is empty

let geocoder = require('geocoder'); //external module plugged in

async function asyncGeocode(fullst) { //wrapper for asyns module
    return new Promise((resolve) => {
        geocoder.geocode(fullst, function (err, res) {
            resolve(res);
        });
    })
}

async function surfMetro() {
    let fullst, loc, res;
    // loc = await asyncGeocode("станція метро Лісова, Київ, Україна");
    for (let i = stations.length - 1; i > -1;) {
        fullst = "станція метро " + stations[i] + ", Київ, Україна";
        res = await asyncGeocode(fullst);
        console.log(res);
        if (res.results.length > 0) {
            loc = res.results[0].geometry.location;
            locations[stations[i]] = loc;
            console.log(fullst, loc);
            i--;
        }
        //WTF ????
        // let waitTill = new Date(new Date().getTime() + 2 * 1000);
        // do {
        // } while (waitTill > new Date())
    else
        {
            console.log('some shit');
        }

    }
    console.log(locations);
}

surfMetro();


// geocoder.geocode("станція метро Лісова, Київ, Україна", function ( err, data ) {
//     console.log(data.results[0].geometry.location);
// });