// // // let user = new Object(); // конструктор объекта
// // // let newUser = {}; // литерал объекта или литеральная нотация

// // // let firstUser = {
// // //     name: 'John', // пара ключ (имя свойства - строка): значение
// // //     age: 30,
// // //     'likes birds': true,
// // // };

// // // console.log(firstUser.name);
// // // console.log(firstUser.age);

// // // firstUser.isAdmin = true;

// // // delete firstUser.age;

// // // console.log(firstUser);
// // // console.log(firstUser['likes birds']);

// // // console.log('age' in firstUser);

// // // let user = {};
// // // user.name = 'John';
// // // user.surname = 'Smith';
// // // user.name = 'Pete';
// // // delete user.name;

// // let user = {
// //     name: 'John',
// //     age: 30,
// // };

// // let clone = {};

// // for (let key in user) {
// //     clone[key] = user[key];
// // }

// // let userAgain = { name: 'John' };

// // let permissions1 = { canView: true };
// // let permissions2 = { canEdit: true };

// // Object.assign(userAgain, permissions1, permissions2);

// // let cloneSecond = Object.assign({}, user);

// let user = {
//     name: 'John',
//     age: 30,
//     sayBye() {
//         console.log(this.name);
//     },
// };

// user.sayHi = function () {
//     console.log('Privet');
//     console.log(this.name);
// };

// user.sayHi(); // метод объекта = функция-свойство объекта

// let arr = new Array();
// let arr2 = [];

// let fruits = ['Apple', 'Orange', 'Plum'];

// console.log(fruits.at(-1));
// console.log(fruits.pop());

// fruits.push('Груша');
// console.log(fruits);

// console.log(fruits.shift());
// fruits.unshift('Яблоко');
// console.log(fruits);

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let arr = ['Я', 'изучаю', 'JavaScript'];

// arr.splice(1, 1);
// console.log(arr);

// let arr = ['Я', 'изучаю', 'JavaScript', 'прямо', 'сейчас'];
// arr.splice(0, 3, 'Давай', 'танцевать');
// // console.log(arr);

// // let deleted = arr.splice(1, 1); // возвращает массив удаленных элементов
// // console.log(deleted);

// let arr = ['t', 'e', 's', 't'];
// console.log(arr.slice(1, 3)); // возвращает новый массив - подмассив
// console.log(arr.slice()); // создает копию массива

// let arr = [1, 2];
// console.log(arr.concat([3, 4], 5));

// arr.forEach(function (item, index, array) {});

// let arr = ['Бильбо', 'Гэндальф', 'Назгул'];
// arr.forEach(console.log);

// let arr = [1, 0, false];

// console.log(arr.indexOf(1));
// console.log(arr.indexOf(3));
// console.log(arr.includes(1));
// console.log(arr.includes(6));

// let users = [
//     { id: 1, name: 'Вася' },
//     { id: 2, name: 'Петя' },
//     { id: 3, name: 'Маша' },
//     { id: 4, name: 'Вася' },
// ];

// let user = users.find((item) => item.id == 1);

// console.log(user.name);
// console.log(users.findIndex((item) => (item.name = 'Вася')));
// console.log(users.findLastIndex((item) => (item.name = 'Вася')));

// let someUsers = users.filter((item) => item.id < 3);
// console.log(someUsers);

// let arr = ['Бильбо', 'Гэндальф', 'Назгул'];
// console.log(arr.map((item) => item.length));

// let arr2 = [1, 2, 15];
// console.log(arr2.sort((a, b) => a - b));

// let arr3 = [1, 2, 3, 4, 5];
// console.log(arr3.reverse());

// let names = 'Вася, Петя, Маша';
// let array = names.split(', ');
// for (let name of array) {
//     console.log(`Сообщение получат: ${name}`);
// }

// console.log(array.join(';'));

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce((sum, current) => sum + current, 0));

// console.log(Array.isArray(arr));

function myLanguages(results) {
    let best = {};
    for (let value of Object.values(results)) {
    }

    return best;
}
// myLanguages({ Java: 10, Ruby: 80, Python: 65 });
const a = [1, 2, 3, 4, 5];
