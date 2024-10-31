function generateRange(min, max, step) {
    let result = [];

    for (let i = min; i <= max; i += step) {
        result.push(i);
    }

    console.log(result);
}

generateRange(2, 10, 2);
