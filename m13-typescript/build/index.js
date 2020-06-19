import { Orso } from './orso';
var orso = new Orso('Medved');
console.log(orso.name);
console.log(orso.makeSound());
orso.eatMeat(100);
console.log(orso.energyLevel);
orso.generateId(55);
console.log(orso.id);
