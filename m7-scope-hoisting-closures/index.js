//Task 1
const runningAverage = () => {
    let sum = 0;
    let count = 0;
    return (num) => {
        sum += num;
        count++;
        return sum / count;
    }
}

// const rAvg = runningAverage();
// console.log(rAvg(10));
// console.log(rAvg(11));
// console.log(rAvg(12));

//Task 2
const sum = (a, ...rest) => {
    if(rest.length > 0) {
        return a + rest[0];
    }

    let acc = a;
    const innerFunc = (b) => {
        acc += b;
        return innerFunc;
    }
    innerFunc.toString = function () {
        return acc;
    };

    return innerFunc;
}

console.log(sum(2,3));
console.log(sum(2)(3));
console.log(sum(1)(2)(3)(4));