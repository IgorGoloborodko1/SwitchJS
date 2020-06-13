class VectorValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
}

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

        return this.#vector.map((item, index) => item + vectorObj.vector[index]);
    }

    verifyVectorArr(arr) {
        if(this.#vector !== arr.length) {
            throw new VectorValidationError(`Incorrect type of vector! Please, check your vector size!`);
        }
    }
}
  
const a = new Vector([1, 2, 3]);
const b = new Vector([5, 6,	7, 8]);

try {
    a.add(b);
} catch(err) {
    console.log(err.name);
    console.log(err.message);
}