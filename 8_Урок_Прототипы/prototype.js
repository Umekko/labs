//let arr = new Array(1, 2, 3);
let arr = [1, 2, 3];
Array.prototype.myForEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
};
arr.myForEach(function(number) {
    console.log(number + 1);
});
arr.forEach(function(number) {
    console.log(number + "1");
});
