import { Animal } from './Animal';
import { Farm } from './Farm';

export class Pig extends Animal {
    public createHome(farm: Farm): void {
    console.log(`${this.name} the ${this.type} gets a stall in the barn on ${farm.name}`);
  }
}
