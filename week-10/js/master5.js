let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce((acc, current) => {
    if (current % 2 === 0) {
        return acc * current;
    } else {
        return acc + current;
    }
}, 1);

console.log(result); // 500