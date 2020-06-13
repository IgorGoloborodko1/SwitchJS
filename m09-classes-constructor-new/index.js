class Vector {
    #vector = [];

    get vector() {
        return this.#vector;
    }

    set vector(val) {
        this.#vector = val;
    }

    constructor(arr) {
        this.vector = arr;
    }

    add(vectorObj) {
        this.verifyVectorArr(vectorObj.vector);

        return this.vector.slice().map((item, index) => item + vectorObj.vector[index]);
    }

    subtract(vectorObj) {
        this.verifyVectorArr(vectorObj.vector);

        return this.vector.slice().map((item, index) => item - vectorObj.vector[index]);
    }

    dot(vectorObj) {
        this.verifyVectorArr(vectorObj.vector);

        return this.vector
            .map((item, index) => item * vectorObj.vector[index])
            .reduce((acc, current) => acc + current);
    }

    norm() {
        return this.vector.reduce((acc, current) => acc + Math.pow(current, 2));
    }

    toString() {
        return `(${this.vector[0]},${this.vector[1]},${this.vector[2]})`;
    }

    equals(vectorObj) {
        this.verifyVectorArr(vectorObj.vector);

        return this.vector.every((item, index) => item === vectorObj.vector[index]);
    }

    verifyVectorArr(arr) {
        if(arr.length !== this.vector.length) {
            throw new Error(`This type of math operations are not supported! Please, check your vector size!`);
        }
    }
}

const a = new Vector([1, 2,	3]);
const b = new Vector([3, 4,	5]);
const c = new Vector([5, 6,	7, 8]);
const d = new Vector([1, 2, 3]);

// console.log(a.add(b)); // should return a new Vector([4, 6, 8])
// console.log(a.subtract(b)); // should return a new Vector([-2, -2, -2])
// console.log(a.dot(b)); // should return	1*3	+ 2*4 +	3*5	= 26
// console.log(a.norm()); // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// console.log(a.add(c)); // throws an error
console.log(a.toString()); //(1,2,3)
console.log(a.toString() === '(1,2,3)'); //true
console.log(a.equals(d)); //true