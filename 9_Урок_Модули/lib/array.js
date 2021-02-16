exports.forEach = function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

exports.sum = function(a, b) {
    console.log(a + b);
    return a + b;
}

exports.MAX_SIZE = 100500;