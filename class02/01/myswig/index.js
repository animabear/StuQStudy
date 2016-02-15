var swig = require('swig');

swig.setDefaults({
    cache: false,
    // loader: swig.loaders.fs(path.join(appbase)),
    locals: {
        environment: "local", // global variable for distinguish between swig and twig
        range: function (start, end) {
            return (new Array(end-start+1)).join().split(',').map(function (n, idx) { return idx + start; });
        }
    }
});
swig.setFilter('length', function (input) {
  return input.length;
});
swig.setFilter('slice', function(input, begin, len){
    return input.slice(begin, len);
});
swig.setFilter('json_encode', function(input){
    return JSON.stringify(input);
});
swig.setFilter('replace', function(input, obj) {
    var output = input;
    for (var key in obj) {
        output = output.replace(key, obj[key]);
    }
    return output;
});
swig.setFilter('split', function(input, symbol) {
    return input.split(symbol);
});
swig.setFilter('add_pic_version', function(pic, version_name) {
    var pic = pic.replace(/!.*$/g, '');
    return pic + '!' + version_name;
});
swig.setFilter('merge', function(target, object) {
    return Object.assign(target, object);
});

module.exports = swig;