function sumscores(scores: string | any[]) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total;
}

console.log(sumscores([10, 20, 30]));


