const graph = require('fbgraph');
graph.setAccessToken("EAACEdEose0cBAGNEnayfYxjaFtxV5g9jghyOO3W3rrMDZByGVxFl4D0DvvNolozeLSvswZAc1Uu0GtVZCYsz6Bl7zveGr9em31cEy1nY0HWhXbH8r8VF3ECu22bAjEKr1RotdCeTlDPLOFUgvDAxy0ATF3p8tPsFJ8LYZAUIV7TBJmpKbnIjkdy7ak4zGoZCK4J6gWYrGdgZDZD");
let evstore=[];
async function asyncGraph(url) {
    return new Promise((resolve, reject) => {
        graph.get(url, function (err, res) {
            resolve(res);
        });
    })
}

async function main(type = "attending") {
    // let url = "228577287676159/events?limit=5";
    let url = "228577287676159/events?limit=5&type=" + type; //type enum{attending, created, declined, maybe, not_replied}
    // let rez;
    for (let i = 30; i > 0 && url; i--) {
        rez = await asyncGraph(url);
        for (let i = rez.data.length - 1; i > -1; i--) {
            console.log(rez.data[i].name, ' ', rez.data[i].rsvp_status)
            evstore.push(rez.data[i]);
        }
        url = rez.paging.next;
        // console.log(rez.data[0].name,' ',rez.data.length,'  ',url);
    }
    console.log(evstore);
}

main();

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
