function NamedOne(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
      
        set(value) {
          if(value.split(' ').length !== 2) {
              return;
          }
          [this.firstName, this.lastName] = value.split(' ');
        }
      });
}

// const namedOne = new NamedOne('Naomi', 'Wang');

// console.log(namedOne.firstName);
// console.log(namedOne.lastName);
// console.log(namedOne.fullName);

// namedOne.firstName = 'John';
// console.log(namedOne.firstName);
// namedOne.lastName = 'Doe';
// console.log(namedOne.lastName);
// console.log(namedOne.fullName);

// namedOne.fullName = 'Tom';
// namedOne.fullName = 'TomDonnovan';
// console.log(namedOne.fullName);

// namedOne.fullName = 'Ivan Smith';
// console.log(namedOne.lastName);
// console.log(namedOne.fullName);