"use strict";
exports.__esModule = true;
var _ = require("lodash");
var user = {
    name: 'Sergio',
    lastName: 'Brito',
    age: 20,
    status: true
};
var fullName = _.concat(user.name, user.lastName);
console.log('User ::: ', user);
console.log('fullName ::: ', fullName);
console.log('Date ::: ', _.now());
