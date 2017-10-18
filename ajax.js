// 'https://httpbin.org/get'
// var url = "https://graph.facebook.com/v2.10/" + "593812360?access_token=1724235024316583|FserG_5N2mjJ75fKjTpEvyUgI_E";
// var url =  "https://graph.facebook.com/v2.10/me?access_token=EAACEdEose0cBAAg45FZCMBpUjygXoy77QFCwDS15c0T4wduFnQUMHd7EhLvf8p2CYFAPQpmuzg8lQwWhVnMiaGHbpXyndSZA0ZBtPSZCxEv9wZChPIYhRnUD8Tf37aL7V5adfngkL3I0UElLC52cgMF9mCK2mDfXZBIcs8ZCXiZClHhQxewVSlcISqGvRJAnEMYktwmMG3RLFAZDZD";
var graph = require('fbgraph');
graph.setAccessToken("EAACEdEose0cBAP4vprsMGmPoP1kfZBFnxl4Os7sg23kbZCC5qDZB0yIIgbnRvbkg23QpOZAEi83ZALLo7plIzA2S9at1gquZA2nATy7nKR40YyVjmoPi5GwSCiAWBXkOHiZCHtasYz9YnXZAtsVaAPvvc1YE2cwzpi0LvgjIdlzeoEHrPZCmFimpYdwo4yjaw8qv35xn5T4vHcAZDZD");

graph.get("593812360/events?limit=2", function (err, res) {
    console.log(res.data[0].name); // { id: '4', name: 'Mark Zuckerberg'... }
    console.log(res.paging);
});

//curl -i -X GET \
// "https://graph.facebook.com/v2.10/me?access_token=EAACEdEose0cBAAg45FZCMBpUjygXoy77QFCwDS15c0T4wduFnQUMHd7EhLvf8p2CYFAPQpmuzg8lQwWhVnMiaGHbpXyndSZA0ZBtPSZCxEv9wZChPIYhRnUD8Tf37aL7V5adfngkL3I0UElLC52cgMF9mCK2mDfXZBIcs8ZCXiZClHhQxewVSlcISqGvRJAnEMYktwmMG3RLFAZDZD"
