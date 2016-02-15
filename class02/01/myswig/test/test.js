var fs = require('fs');
var path = require('path');
var myswig = require('../index');

var tpl  = fs.readFileSync(path.join(__dirname, 'index.tpl')).toString();
var html = myswig.render(tpl, {
    locals: {
        arr: ['1', '2', '3', '4'],
        str: '1;2;3;4'
    }
});

console.log(html);
