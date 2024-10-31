// function removeChar(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (i === 0 || i === str.length - 1) {
//             continue;
//         }
//         result += str[i];
//     }
//     return result;
// }

// function removeChar(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (i > 0 && i < str.length - 1) {
//             result += str[i];
//         }
//     }
//     return result;
// }

// function removeChar(str) {
//     let result = '';
//     for (let i = 1; i < str.length - 1; i++) {
//         result += str[i];
//     }
//     return result;
// }

// console.log(removeChar('abcde'));
// console.log(removeChar(''));
// console.log(removeChar('hello'));

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

function sumSalaries(salaries) {
    let result = 0;
    for (let amount of Object.values(salaries)) {
        result += amount;
    }
    return result;
}

console.log(sumSalaries(salaries)); // 650

let user = {
    name: 'John',
    age: 30,
};

function count(obj) {
    return Object.keys(obj).length;
}

console.log(count(user));
