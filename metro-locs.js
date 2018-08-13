'use strict';

var locations = {
    'Червоний хутір': {lat: 50.409473, lng: 30.696203},
    'Бориспільська': {lat: 50.403375, lng: 30.684195},
    'Харківська': {lat: 50.40073, lng: 30.652474},
    'Позняки': {lat: 50.397944, lng: 30.6345791},
    'Осокорки': {lat: 50.395248, lng: 30.616231},
    'Славутич': {lat: 50.394264, lng: 30.604859},
    'Видубичі': {lat: 50.402102, lng: 30.56016},
    'Дружби народів': {lat: 50.4179808, lng: 30.5449696},
    'Печерська': {lat: 50.42735949999999, lng: 30.5388649},
    'Кловська': {lat: 50.43699609999999, lng: 30.5317785},
    'Палац спорту': {lat: 50.4382072, lng: 30.5209278},
    'Золоті ворота': {lat: 50.4482291, lng: 30.5138327},
    'Лукянівська': {lat: 50.4624207, lng: 30.4817867},
    'Дорогожичі': {lat: 50.4736756, lng: 30.449081},
    'Сирець': {lat: 50.4763773, lng: 30.4308978},
    'Теремки': {lat: 50.3671714, lng: 30.4544127},
    'Іподром': {lat: 50.37667399999999, lng: 30.4689869},
    'Виставковий центр': {lat: 50.3821018, lng: 30.4771875},
    'Васильківська': {lat: 50.3932998, lng: 30.488171},
    'Голосіївська': {lat: 50.3976431, lng: 30.50967},
    'Деміївська': {lat: 50.4051102, lng: 30.517419},
    'Либідська': {lat: 50.4133524, lng: 30.5242655},
    'Палац «Україна': {lat: 50.421186, lng: 30.520611},
    'Олімпійська': {lat: 50.4322697, lng: 30.51612489999999},
    'Площа Льва Толстого': {lat: 50.4400665, lng: 30.5180103},
    'Майдан Незалежності': {lat: 50.44993359999999, lng: 30.5238713},
    'Поштова площа': {lat: 50.4589633, lng: 30.5247585},
    'Контрактова площа': {lat: 50.46605, lng: 30.514996},
    'Тараса Шевченка': {lat: 50.47358819999999, lng: 30.50463989999999},
    'Петрівка': {lat: 50.4853152, lng: 30.4983392},
    'Оболонь': {lat: 50.501466, lng: 30.49822799999999},
    'Мінська': {lat: 50.51224200000001, lng: 30.498551},
    'Героїв Дніпра': {lat: 50.52273899999999, lng: 30.498971},
    'Лісова': {lat: 50.4645458, lng: 30.6444612},
    'Чернігівська': {lat: 50.459892, lng: 30.630292},
    'Дарниця': {lat: 50.4556265, lng: 30.611837},
    'Лівобережна': {lat: 50.451877, lng: 30.598167},
    'Гідропарк': {lat: 50.445978, lng: 30.576884},
    'Арсенальна': {lat: 50.4444465, lng: 30.5454041},
    'Хрещатик': {lat: 50.4473932, lng: 30.526286},
    'Театральна': {lat: 50.4452359, lng: 30.5180487},
    'Університет': {lat: 50.44423519999999, lng: 30.5058879},
    'Вокзальна': {lat: 50.4417316, lng: 30.4881542},
    'Політехнічний інститут': {lat: 50.45079699999999, lng: 30.4662924},
    'Шулявська': {lat: 50.4549603, lng: 30.4453936},
    'Берестейська': {lat: 50.458772, lng: 30.4199517},
    'Нивки': {lat: 50.4584859, lng: 30.4030914},
    'Святошин': {lat: 50.457771, lng: 30.390585},
    'Житомирська': {lat: 50.4560768, lng: 30.3649982},
    'Академмістечко': {lat: 50.464936, lng: 30.355272}
};

/**
 * toRad helper function
 */
if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function () {
        return this * Math.PI / 180;
    }
}

/** Converts numeric degrees to radians */
function distance2(lon1, lat1, lon2, lat2) {
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2 - lat1).toRad();  // Javascript functions in radians
    var dLon = (lon2 - lon1).toRad();
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return Math.round(1000 * d);
}

/**
 * provides string with list of closest metro stations
*/
exports.closestMetro = function (lat1 = 50.450793, lng1 = 30.458139, num = 1) {

    function arr2line(a) {
        let rez = '';
        for (let i = 0; i < a.length; i++) {
            rez = rez + a[i].title + ":" + a[i].distance + '/'
        }
        return rez;
    }

    let dist, res, distances = [];
    for (var m in locations) {
        let el = locations[m];
        dist = distance2(lat1, lng1, el.lat, el.lng);
        distances.push({title: m, distance: dist});
    }
    // distances = mysort(distances);
    // [3,10].sort(function (a, b) { return a - b; });
    distances.sort((a, b) => a.distance - b.distance);
    for (let i = distances.length - 1; i > -1; i--) {
        distances[i].distance = 100 * Math.round(distances[i].distance / 100)
    }
    return arr2line(distances.slice(0, num));
};

// console.log(exports.closestMetro(50.437298, 30.578713));
// console.log(distance(50.450086, 30.468206,50.458772, 30.4199517));
// console.log(distance2(50.450086, 30.468206,50.458772, 30.4199517));