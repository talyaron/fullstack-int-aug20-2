// function promise ()
function one() {
    return new Promise((resolve, reject) => {
        
        fetch('http://api.openweathermap.org/data/2.5/weather?q=jerusalem&appid=9c72c68beca5025e3cc723b7e0045386')
            .then(r => r.json())
            .then(data => resolve(data))
            .catch(e => reject(e));
    });

}

//simple promise
let simple = new Promise((resolve, reject) => {
    axios.get('https://api.sunrise-sunset.org/json?lat=32.7501114&lng=35.0882167&date=today')
        .then(data => resolve(data.data))
        .catch(e => reject(e));
});

// ------------
console.log('starting');
one().then(data => console.log(data)).catch(e => console.error(e)); // move to event loop
simple.then(data => console.log(data)).catch(e => console.error(e)); // move to event loop
one().then(data => console.log(data)).catch(e => console.error(e)); // move to event loop
console.log('ending');

console.time('aa')
Promise.all([one(), simple]).then((values) => {
    console.log(values);
    console.timeEnd('aa')
  });