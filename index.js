var EventSearch = require("facebook-events-by-location-core");
var es = new EventSearch();
// сша "lat": 40.710803, "lng": -73.964040,
// "lat":50.450100, "lng":30.523400, //киев. центр
// lat: 50.453554,lng:  30.445561, //shulyavka
// lat:50.466629, lng:30.515642, //kontraktova
es.search({
    lat: 50.453554, lng: 30.445561,
    distance: 2000,
    "accessToken": "EAAH4IuWa9ZAgBAI3UQBGDVKoCLfUukEf0NsYvLmyhL3C3uDdiiFXDfXQZBq7V9hxuRAV7H9ToMdroipEjM13Uh95SpN6ZAhKUuvXI4XOqefTylFZBmQmXmmOeCjOaPPb4yEcXVgAnPVfe994uk05djMi61XRgOkicaHpVC2kpuRy7cZBP77yZAcSeFwFS39NHjqNjVD3ZCfSgZDZD"
}).then(function (events) {
    // console.log(JSON.stringify(events).events);
    console.log(events.events.length);
}).catch(function (error) {
    console.error(JSON.stringify(error));
});