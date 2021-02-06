// function test() {}

// test.b = 255;

// console.log(test.b);

let bmw = {
    color: ''
};
let honda = {
    color: ''
};
let mers = {
    color: ''
};
function changeColor(color) {
    this.color = color;
}
// global 
changeColor();

changeColor.call(bmw, 'red');
changeColor.call(honda, 'green');
changeColor.call(mers, 'black');

console.log(bmw);
console.log(honda);
console.log(mers);

