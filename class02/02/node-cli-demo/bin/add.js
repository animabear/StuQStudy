#!/usr/bin/env node
'use strict';

var argv = require('yargs').argv;

var addedNumArr = argv._;
var sum = 0;

addedNumArr.forEach(function(num) {
    sum += num;
});

console.log(addedNumArr.join('+') + '=' + sum);