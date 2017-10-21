// 'https://httpbin.org/get'
// var url = "https://graph.facebook.com/v2.10/" + "593812360?access_token=1724235024316583|FserG_5N2mjJ75fKjTpEvyUgI_E";
// var url =  "https://graph.facebook.com/v2.10/me?access_token=EAACEdEose0cBAAg45FZCMBpUjygXoy77QFCwDS15c0T4wduFnQUMHd7EhLvf8p2CYFAPQpmuzg8lQwWhVnMiaGHbpXyndSZA0ZBtPSZCxEv9wZChPIYhRnUD8Tf37aL7V5adfngkL3I0UElLC52cgMF9mCK2mDfXZBIcs8ZCXiZClHhQxewVSlcISqGvRJAnEMYktwmMG3RLFAZDZD";
const graph = require('fbgraph');

graph.setAccessToken("EAACEdEose0cBANMQxt26cTkRqcraZCMMLlDiIBES5vP21pRvzOsXn5Fnz917pexPxFdxhyReZB5MzrLfkuLfwDkmj8UvVMDDsNdi0lS2ZAxuM4N30IA1N7hf05CaSVfqwAJaZCJ4MxAKOSTQhbyp27s023Co9hU7ENVX8QYpzFLIzscWjZALwXClb1BkdJwkZD");
// const url = "593812360";
const  url = "593812360/events?limit=1";
async function asyncGraph(url) {
    return new Promise((resolve, reject) => {
        graph.get(url, function (err, res) {
            resolve(res);
        });
    })
}

// asyncGraph('fdfdf').then((rez)=>{console.log(rez)});
// console.log(asyncGraph('fdfdf'));
async function main(url) {
    for (let i=10;i>0;i--){
        let rez = await asyncGraph(url);
        url = rez.paging.next;
        console.log(rez.data[0].name);
    }
}
main(url);

// graph.get(url, function (err, res) {
//     console.log(res.name); // { id: '4', name: 'Mark Zuckerberg'... }
//     // console.log(res.paging.next);
// });


//curl -i -X GET \
// "https://graph.facebook.com/v2.10/me?access_token=EAACEdEose0cBAAg45FZCMBpUjygXoy77QFCwDS15c0T4wduFnQUMHd7EhLvf8p2CYFAPQpmuzg8lQwWhVnMiaGHbpXyndSZA0ZBtPSZCxEv9wZChPIYhRnUD8Tf37aL7V5adfngkL3I0UElLC52cgMF9mCK2mDfXZBIcs8ZCXiZClHhQxewVSlcISqGvRJAnEMYktwmMG3RLFAZDZD"
