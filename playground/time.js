var moment = require('moment');

// var date = moment();

// console.log(date.format('MMM Do, YYYY'));
// console.log(date.format('hh:mm'));

// 10:35 am

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 12345;
var date = moment(createdAt);
console.log(date.format('h:mm a'));