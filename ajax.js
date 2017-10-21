// 'https://httpbin.org/get'
// var url = "https://graph.facebook.com/v2.10/" + "593812360?access_token=1724235024316583|FserG_5N2mjJ75fKjTpEvyUgI_E";
// var url =  "https://graph.facebook.com/v2.10/me?access_token=EAACEdEose0cBAAg45FZCMBpUjygXoy77QFCwDS15c0T4wduFnQUMHd7EhLvf8p2CYFAPQpmuzg8lQwWhVnMiaGHbpXyndSZA0ZBtPSZCxEv9wZChPIYhRnUD8Tf37aL7V5adfngkL3I0UElLC52cgMF9mCK2mDfXZBIcs8ZCXiZClHhQxewVSlcISqGvRJAnEMYktwmMG3RLFAZDZD";
var graph = require('fbgraph');

async function z() {

}

graph.setAccessToken("EAACEdEose0cBANMQxt26cTkRqcraZCMMLlDiIBES5vP21pRvzOsXn5Fnz917pexPxFdxhyReZB5MzrLfkuLfwDkmj8UvVMDDsNdi0lS2ZAxuM4N30IA1N7hf05CaSVfqwAJaZCJ4MxAKOSTQhbyp27s023Co9hU7ENVX8QYpzFLIzscWjZALwXClb1BkdJwkZD");
url = "593812360"; //"593812360/events?limit=2";
async function asyncGraph(url) {
    return new Promise((resolve, reject) => {
        graph.get(url, function (err, res) {
            resolve(res);
        });
    })
}

// asyncGraph('fdfdf').then((rez)=>{console.log(rez)});
// console.log(asyncGraph('fdfdf'));
async function main() {
    const x = await asyncGraph(url);
    console.log(x);
}
main();

// graph.get(url, function (err, res) {
//     console.log(res.name); // { id: '4', name: 'Mark Zuckerberg'... }
//     // console.log(res.paging.next);
// });


//curl -i -X GET \
// "https://graph.facebook.com/v2.10/me?access_token=EAACEdEose0cBAAg45FZCMBpUjygXoy77QFCwDS15c0T4wduFnQUMHd7EhLvf8p2CYFAPQpmuzg8lQwWhVnMiaGHbpXyndSZA0ZBtPSZCxEv9wZChPIYhRnUD8Tf37aL7V5adfngkL3I0UElLC52cgMF9mCK2mDfXZBIcs8ZCXiZClHhQxewVSlcISqGvRJAnEMYktwmMG3RLFAZDZD"
