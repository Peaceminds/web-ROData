'use strict';

var http = require("http");
var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

module.exports = greet;

console.log('Hello, world.');
console.log(100 + 200 + 300);
