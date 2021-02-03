// function culcPower(chislo, power) {
//     let resultPower = chislo ** power;
//     return resultPower;
// }
// let result = culcPower(2,3);
// console.log(result);

// //       2 zadanie

// function showMessage(text, showText) {
// 	for (let i = 1; i < showText; i++) {
// 		console.log(text);
// 	}

// 	return text;
// }
// let show = showMessage('han ssshhhiiittt', 5);
// console.log(show);

//       3 zadanie

// function isEven(num){
//     if (num % 2 === 0){
//         return true;
//     } 
//     return false;
// }
// let resultCheck = isEven(11);
// console.log(resultCheck);

// //       4 zadanie

let user = {
    name: 'Adnrew',
    age: 18
};
let user1 = {
    name: 'Petr',
    age: 25
};
let user2 = {
    name: 'Sergey',
    age: 15
};

function isAdult (user){
    return user.name && user.age >= 18;
}

function showContent (){
    if(isAdult(user)){
        console.log('добро пожаловать');
    } else {
        console.log('вам не 18!');
    }

}
showContent();

function showContent1 (){
    if(isAdult(user1)){
        console.log('добро пожаловать');
    } else {
        console.log('вам не 18!');
    }

}
showContent1();

function showContent2 (){
    if(isAdult(user2)){
        console.log('добро пожаловать');
    } else {
        console.log('вам не 18!');
    }

}
showContent2();
