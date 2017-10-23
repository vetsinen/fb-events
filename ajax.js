const graph = require('fbgraph');
const metro = require('./metro-locs');
graph.setAccessToken("EAACEdEose0cBAJeGkXrBR5Ej7vFaxZABR7uuGGhZBpgfkyQXrZC1FGyhrba71JtRmDZCX6rwaXrsJTbZAQYt8WnCVkKVMgvHsHg2me9vuuXfvCrzXsIgHKn3LJDRG7miTFZBuBLIgQAZBXcVvWiJW1tvojEqZBMtXi3EbQZAQfQvcZCH1f7WDHI84ByVy2dJl1P19zz6xchDqXCgZDZD");
let evstore = [];

//TODO define current date
async function asyncGraph(url) {
    return new Promise((resolve, reject) => {
        graph.get(url, function (err, res) {
            resolve(res);
        });
    })
}

async function main(type = "attending") {
    let url = "228577287676159/events";
    // let url = "228577287676159/events?limit=5&type=" + type; //type enum{attending, created, declined, maybe, not_replied}
    for (let ii = 30; ii > 0 && url; ii--) {
        let rez = await asyncGraph(url);
        for (let i = rez.data.length - 1; i > -1; i--) {
            let cur = rez.data[i];
            let filter = date === cur.start_time.substring(0, 10);
            if (true) {
                console.log(rez.data[i].name, ' ',
                    metro.closestMetro(cur.place.location.latitude, cur.place.location.longitude),
                    cur.place.name);//rez.data[i].rsvp_status,' ',cur.start_time.substring(0,10)
                evstore.push(rez.data[i]);
            }
        }
        url = rez.paging.next;
        // console.log(rez.data[0].name,' ',rez.data.length,'  ',url);
    }
    // console.log(evstore);
}

let date = new Date().toISOString().substring(0, 10);
main();

// console.log(date);
// const url = "593812360"; //veitsi
// asyncGraph('fdfdf').then((rez)=>{console.log(rez)});
// console.log(asyncGraph('fdfdf'));
// graph.get(url, function (err, res) {
//     console.log(res.name); // { id: '4', name: 'Mark Zuckerberg'... }
//     // console.log(res.paging.next);
// });
//curl -i -X GET \
// "https://graph.facebook.com/v2.10/me?access_token=EAACEdEose0cBAAg45FZCMBpUjygXoy77QFCwDS15c0T4wduFnQUMHd7EhLvf8p2CYFAPQpmuzg8lQwWhVnMiaGHbpXyndSZA0ZBtPSZCxEv9wZChPIYhRnUD8Tf37aL7V5adfngkL3I0UElLC52cgMF9mCK2mDfXZBIcs8ZCXiZClHhQxewVSlcISqGvRJAnEMYktwmMG3RLFAZDZD"
// 'https://httpbin.org/get'
// var url = "https://graph.facebook.com/v2.10/" + "593812360?access_token=1724235024316583|FserG_5N2mjJ75fKjTpEvyUgI_E";
// var url =  "https://graph.facebook.com/v2.10/me?access_token=EAACEdEose0cBAAg45FZCMBpUjygXoy77QFCwDS15c0T4wduFnQUMHd7EhLvf8p2CYFAPQpmuzg8lQwWhVnMiaGHbpXyndSZA0ZBtPSZCxEv9wZChPIYhRnUD8Tf37aL7V5adfngkL3I0UElLC52cgMF9mCK2mDfXZBIcs8ZCXiZClHhQxewVSlcISqGvRJAnEMYktwmMG3RLFAZDZD";
