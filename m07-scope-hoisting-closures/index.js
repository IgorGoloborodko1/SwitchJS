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
const sum = (a, ...args) => {
    if(args.length) {
        return args.reduce((prev, current) =>  prev + current, a);
    }

    let acc = a;

    const innerFn = (b) => {
        acc += b;
        return innerFn;
    }

    innerFn.toString = () => acc;

    return innerFn;
}

// alert(sum(2, 3));
// alert(sum(1, 2, 3, 4, 5));
// alert(sum(2)(3));
// alert(sum(1)(2)(3)(4));