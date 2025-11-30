// const add = (a:number,b:number):string => {
//     const result =  a+b;
//     return result.toString();
// }
//
// const result = add(1, 2);
// console.log(result, 'type of result:', typeof result);

const findMax = (numbers: number[]): string => {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {


        // @ts-ignore
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }


    // @ts-ignore
    return max.toString();
}


const scores = [10, 20, 35, 5, 28];
const maxScore = findMax(scores);

console.log("Max score:", maxScore, "type:", typeof maxScore);