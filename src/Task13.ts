// index.ts

import add, { subtract } from './function';

import { findMax } from './function2';

const result = add(1, 2) + 0;
const result2 = subtract(1, 2) + 0;
const maxScore = findMax([10, 20, 35, 5, 28]);

console.log(result, 'type of result:', typeof result);
console.log(result2, 'type of result2:', typeof result2);
console.log(maxScore, 'type of maxScore:', typeof maxScore);



// const findMax = (numbers: number[]): string => {
//     let max = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//
//

//         if (numbers[i] > max) {
//             max = numbers[i];
//         }
//     }
//

//     return max.toString();
// }
//
// const scores = [10, 20, 35, 5, 28];
// const maxScore = findMax(scores);
//
// console.log("Max score:", maxScore, "type:", typeof maxScore);