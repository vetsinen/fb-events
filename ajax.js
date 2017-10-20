// 'https://httpbin.org/get'
// var url = "https://graph.facebook.com/v2.10/" + "593812360?access_token=1724235024316583|FserG_5N2mjJ75fKjTpEvyUgI_E";
// var url =  "https://graph.facebook.com/v2.10/me?access_token=EAACEdEose0cBAAg45FZCMBpUjygXoy77QFCwDS15c0T4wduFnQUMHd7EhLvf8p2CYFAPQpmuzg8lQwWhVnMiaGHbpXyndSZA0ZBtPSZCxEv9wZChPIYhRnUD8Tf37aL7V5adfngkL3I0UElLC52cgMF9mCK2mDfXZBIcs8ZCXiZClHhQxewVSlcISqGvRJAnEMYktwmMG3RLFAZDZD";
var graph = require('fbgraph');
async function z() {
    
}
graph.setAccessToken("EAACEdEose0cBAFpzHe0nc5bpMZBaGJTc63kTKDZCxm9NoUFcslVdBsJALwCKuWsUTRRdr8rRxy73jlpvZBKAiZAoM26LdtyFml6zbqLb1hOBzIFSIo6GRmPBstT7ohaUx1m4iyzaofLkkC7w6rLdBZBUVIZCnQp6ycHG48eaqwHV6BZBbXfEm9OXqZBQOc1hvoCgYGSimn5w0QZDZD");
url = "593812360/events?limit=2";
async function asyncGraph(url) {
    return new Promise((resolve,reject)=>{
        resolve (1);
    })
}
// asyncGraph('fdfdf').then((rez)=>{console.log(rez)});
// console.log(asyncGraph('fdfdf'));
async function main() {
    const x=await asyncGraph('ffff');
    console.log(x);
}
main();
    // graph.get(url, function (err, res) {
    //     console.log(res.data[0].name); // { id: '4', name: 'Mark Zuckerberg'... }
    //     console.log(res.paging.next);
    // });



//curl -i -X GET \
// "https://graph.facebook.com/v2.10/me?access_token=EAACEdEose0cBAAg45FZCMBpUjygXoy77QFCwDS15c0T4wduFnQUMHd7EhLvf8p2CYFAPQpmuzg8lQwWhVnMiaGHbpXyndSZA0ZBtPSZCxEv9wZChPIYhRnUD8Tf37aL7V5adfngkL3I0UElLC52cgMF9mCK2mDfXZBIcs8ZCXiZClHhQxewVSlcISqGvRJAnEMYktwmMG3RLFAZDZD"
