//Task 1
class MyPromise {
    constructor(executor) {
        executor(this.onResolve);
    }

    onResolve() {
        return Promise.resolve();
    }

    syncThen(cb) {
        cb();
        return Promise.resolve();
    }
}

// let promise = new MyPromise((resolve) => {
//     console.log(1);
//     resolve();
// }).syncThen(() => {
//     console.log(2);
// }).then(() => {
//     console.log(3);
// });

// console.log(4);

//Task 2
class ReversePromise {
    constructor(executor) {
        this.chain = [];
        executor(this.onResolve);
    }

    onResolve = () => {
        setTimeout(() => {
            this.chain.forEach(f => f());
        }, 100)
    }

    then(cb) {
        this.chain.unshift(cb);
        return this;
    }
}

// let promise = new ReversePromise((resolve) => {
//     console.log(1);
//     resolve();
// })
// .then(() => console.log(2))
// .then(() => console.log(3))
// .then(() => console.log(4));