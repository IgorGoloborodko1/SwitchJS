function Person	(name, age) {
    this.name =	name;
	this.age = age;
}

Person.prototype.introduce = function() {
	return `My name is ${this.name} and I am ${this.age}`;
};

function myNew(func, ...args) {
    const obj = Object.create(func.prototype);
    func.apply(obj, args);
    return obj;
}

// const john = myNew(Person, 'John', 30);
// console.log(john);
// console.log(john.name);
// console.log(john.introduce());