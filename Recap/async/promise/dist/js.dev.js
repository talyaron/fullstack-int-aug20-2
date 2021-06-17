"use strict";

// function promise ()
function one() {
  return new Promise(function (resolve, reject) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=jerusalem&appid=9c72c68beca5025e3cc723b7e0045386').then(function (r) {
      return r.json();
    }).then(function (data) {
      return resolve(data);
    })["catch"](function (e) {
      return reject(e);
    });
  });
} //simple promise


var simple = new Promise(function (resolve, reject) {
  axios.get('https://api.sunrise-sunset.org/json?lat=32.7501114&lng=35.0882167&date=today').then(function (data) {
    return resolve(data.data);
  })["catch"](function (e) {
    return reject(e);
  });
}); // ------------

console.log('starting');
one().then(function (data) {
  return console.log(data);
})["catch"](function (e) {
  return console.error(e);
}); // move to event loop

simple.then(function (data) {
  return console.log(data);
})["catch"](function (e) {
  return console.error(e);
}); // move to event loop

one().then(function (data) {
  return console.log(data);
})["catch"](function (e) {
  return console.error(e);
}); // move to event loop

console.log('ending');
console.time('aa');
Promise.all([one(), simple]).then(function (values) {
  console.log(values);
  console.timeEnd('aa');
});