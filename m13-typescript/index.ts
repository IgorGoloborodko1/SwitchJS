import { Orso } from './orso';

const orso: Orso = new Orso('Medved');
console.log(orso.name);
console.log(orso.makeSound());
orso.eatMeat(100)
console.log(orso.energyLevel);
orso.generateId<number>(55);
console.log(orso.id);