const data = [
    { day_auto_count: '2021-05-21 23:20', quantity: 125 },
    { day_auto_count: '2021-05-21 23:21', quantity: 125 },
    { day_auto_count: '2021-05-21 23:22', quantity: 125 },
    { day_auto_count: '2021-05-22 22:20', quantity: 125 },
    { day_auto_count: '2021-05-23 22:20', quantity: 125 },
    { day_auto_count: '2021-05-24 22:20', quantity: 125 },
    { day_auto_count: '2021-05-25 22:20', quantity: 125 },
    { day_auto_count: '2021-05-25 22:21', quantity: 125 }
];

let data2 = data.map(dt => {

    return { day_auto_count: new Date(dt.day_auto_count).getTime(), quantity: dt.quantity }
});
let daysArray = [];

data.map(dt => {
    let day = dt.day_auto_count.split(' ')[0];
    const ind = daysArray.findIndex(el => el === day)
    if (ind === -1) {
        daysArray.push(day);
    }
})
console.log(daysArray)

let days = {}
data.forEach(dt => {

    const splitDate = dt.day_auto_count.split(' ')
    const day = new Date(splitDate[0]);
    let hour = new Date(dt.day_auto_count).getHours();
    console.log(day, hour)
    if (hour <= 22) {
        if (splitDate[0] in days) {
            days[splitDate[0]] = days[splitDate[0]] + dt.quantity;
        } else {
            days[splitDate[0]] = dt.quantity
        }
    } else {
        //set to next day
        const ind = daysArray.findIndex(el => el === day);
        let nextDay = daysArray[ind + 1];
        console.log('nextDay', nextDay)
        if (nextDay in days) {
            days[nextDay] = days[nextDay] + dt.quantity;
        } else {
            days[nextDay] = dt.quantity
        }

    }

    console.log(days)
})

console.log(data2)

