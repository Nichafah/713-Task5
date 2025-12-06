

const processNumbers = (numbers: number[]): number[] => {
    return numbers
        .filter(num => num % 3 === 0)
        .map(num => num ** 3);
};


const n = [1, 2, 3, 4, 5, 6, 9];

const result = processNumbers(n);
console.log(result);

