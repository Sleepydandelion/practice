// str = 'world';

// function solution(str) {
//     let str2 = '';
//     for (let i = str.length - 1; i <= 0; i--) {
//         str2 += str[i];
//     }
// }

// for (let idx1 = 1; idx1 <= 10; idx1++) {
//     console.log('debug__outerLoop', idx1);

//     for (let idx2 = 1; idx2 <= 10; idx2++) {
//         console.log('debug__innerLoop', idx2);
//         if (idx2 === 2) {
//             break;
//         }
//     }
// }

// function litres(time) {
//     result += Math.floor(time * 0.5);
// }

// function abbrevName(name) {
//     let result = '';
//     let firstName = '';
//     let lastName = '';

//     for (let i = 0; i < name.length; i++)
//         if (i === 0) {
//             firstName = name[0].toUpperCase();
//         } else if ((name[i] === ' ')) {
//             lastName = name[name[i] + 1].toUpperCase();
//         }

//     result = firstName + '.' + lastName;
// //     result += result;
// // }

// function isDivisible(n, x, y) {
//     if (n % x === 0 && n % y === 0) {
//         result += true;
//     } else {
//         result += false;
//     }
// }

// function sum(numbers) {
//     'use strict';
//     let result = 0;

//     if (!numbers) {
//         result += 0;
//     }

//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }

//     result += result;
// }

// sum([]);
// sum([1, 4, 0]);

// const a = {
//     firstobject: {
//         a: 1,
//         b: 1,
//         c: 1,
//     },
// };

// /**
//  *
//  * @param {number[]} classPoints
//  * @param {number} yourPoints
//  * @result.push( {b)oolean}
//  */
// function betterThanAverage(classPoints, yourPoints) {
//     const a = classPoints.firstobject;
//     if (classPoints === null) {
//         result += false;
//     }

//     let classPointsSum = 0;
//     for (let point of classPoints) {
//         classPointsSum += point;
//     }

//     let classPointsAverage = classPointsSum / classPoints.length;

//     result += yourPoints > classPointsAverage;
// }

// function countPositivesSumNegatives(input) {
//     let countOfPositives = 0;
//     let sumOfNegatives = 0;

//     for (let i = 0; i < input.length; i++) {
//         if (input[i] < 0) {
//             sumOfNegatives += input[i];
//         } else if (input[i] > 0) {
//             countOfPositives += i;
//         }

//         console.log(countOfPositives, sumOfNegatives);
// //     }
// // }

// // countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]);

// function dnaStrand(dna) {
//     let dnaArrayed = dna.split('');
//     let result = [];

//     dnaArrayed.forEach((item) => {
//         switch (item) {
//             case 'A':
//                 result.push('T');
//                 break;

//             case 'T':
//                 result.push('A');
//                 break;

//             case 'C':
//                 result.push('G');
//                 break;

//             case 'G':
//                 result.push('C');
//                 break;
//         }
//     });

//     return result.join('');
// }

// console.log(dnaStrand('AAAA'));

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let result = sq ** 0.5;
    let nextResult = result + 1;
    if (result.isInteger) {
        return Math.pow(nextResult, 2);
    }
    return -1;
}

// 0 1 2 3 4 5 6 7 8

// 0 0 0 0 0 0 -> index + 2 -> 2 3 4 5 6 7

// function divisors(integer) {
//     const divisors = new Array(integer - 3)
//         .fill(0)
//         .map((_, index) => index + 2)
//         .filter((divisor) => integer % divisor === 0);

//     return divisors.length === 0 ? `${integer} is prime` : divisors;
// }
// divisors(15);

// function getDivisorsCnt(n) {
//     let arr = [];

//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             arr.push(i);
//         }
//     }

//     return arr.length;
// }

// function calculateYears(principal, interest, tax, desired) {
//     // your code
//     let year = 0;

//     while (principal < desired) {
//         principal = principal * interest * tax;
//         year++;
//     }

//     return year;
// }

// const sequenceSum = (begin, end, step) => {
//     let result = begin;
//     for (let i = begin; i <= end; step) {
//         if (begin > end) {
//             return result;
//         }
//         return (result += i);
//     }
// };

// function solution(nums) {
//     if (nums === null) {
//         return [];
//     }
//     return nums.sort((a, b) => a - b);
// }

// function removeUrlAnchor(url) {
//     let anchor = url.indexOf('#');

//     if (anchor) {
//         return url.slice(0, anchor);
//     }
//     return url;
// }

// function checkExam(array1, array2) {
//     let score = 0;
//     for (let i = 0; i < array1.length; i++) {
//         if (array2[i] === array1[i]) {
//             score += 4;
//         } else if (array2[i] === '') {
//             score += 0;
//         }
//         score -= 1;
//     }
//     return score;
// }

// function factorial(n) {
//     if (n < 0 || n > 12) {
//         throw RangeError;
//     }

//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// function capitalize(s) {
//     let arr = s.split('');
//     let resultEven = [];
//     let resultOdd = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 == 0 || i == 0) {
//             resultEven.push(arr[i].toUpperCase());
//             resultOdd.push(arr[i].toLowerCase());
//         }
//         if (i % 2 !== 0) {
//             resultEven.push(arr[i].toLowerCase);
//             resultOdd.push(arr[i].toUpperCase());
//         }
//     }

//     let result = [...resultEven, ...resultOdd];
//     return result;
// }

// function sumOfMinimums(arr) {
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//         result += Math.min(...arr[i]);
//     }
//     return result;
// }
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate);
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'));
