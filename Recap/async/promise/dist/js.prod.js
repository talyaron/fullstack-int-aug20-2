"use strict";function one(){return new Promise(function(e,o){fetch("http://api.openweathermap.org/data/2.5/weather?q=jerusalem&appid=9c72c68beca5025e3cc723b7e0045386").then(function(n){return n.json()}).then(function(n){return e(n)}).catch(function(n){return o(n)})})}var simple=new Promise(function(e,o){axios.get("https://api.sunrise-sunset.org/json?lat=32.7501114&lng=35.0882167&date=today").then(function(n){return e(n.data)}).catch(function(n){return o(n)})});console.log("starting"),one().then(function(n){return console.log(n)}).catch(function(n){return console.error(n)}),simple.then(function(n){return console.log(n)}).catch(function(n){return console.error(n)}),one().then(function(n){return console.log(n)}).catch(function(n){return console.error(n)}),console.log("ending"),console.time("aa"),Promise.all([one(),simple]).then(function(n){console.log(n),console.timeEnd("aa")});