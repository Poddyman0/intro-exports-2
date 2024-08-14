const tutor = require('./examples/file-1'); // 'vel'
const {tutor2} = require('./examples/file-2'); // 'vel'
const printHello = require('./examples/file-3');// 'Hello'
const add = require('./examples/file-4');// add
//const printHello() = require('./examples/file-5'); // 'Hello' add
const somethingFromFile6 = require('./examples/file-6');// error

console.log(tutor)
console.log({tutor2})
console.log(printHello)
console.log(add)
//console.log(printHello());
console.log(somethingFromFile6)
//console.log(REPLACE_ME_WITH_A_VARIABLE_FROM_ABOVE);
