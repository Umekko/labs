// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// let obj1 = obj;

// console.log('obj До изменения \n', obj);

// obj1.a = 2;

// console.log('obj1', obj1);

// console.log('obj после изменения: ', obj);

let user = {
    age: 25,
    name: 'Andrew',
    getAge: function() {
        // console.log(user.age);
        console.log('this.age: ', this.age);
    }
}

// user['age']

for (let key in user) {
    console.log("Ключ: "+ key + " Значения: " + user[key]);
}
