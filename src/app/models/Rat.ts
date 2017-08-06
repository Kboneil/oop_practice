import { Animal } from './Animal';
import { Farm } from './Farm';

//Inheritance: Rat is an Animal
export class Rat extends Animal {
  //overriding
  public feed(): void {
    console.log(`${this.name} the ${this.type} is finding food in the garbage can`);
  }

  //if this wasn't complied into javascript and was truly statically typed
  //this could overload

  // public feed(foodNumber: number): void {
  //   console.log(`${this.name} the ${this.type} is eating ${foodNumber} pieces of food`);
  // }
  //
  // public feed(food: string): void {
  //   console.log(`${this.name} the ${this.type} is eating ${food}`);
  // }
  //
  // public feed(foodNumber: number, food: string): void {
  //   console.log(`${this.name} the ${this.type} is eating ${foodNumber} pieces of ${food}`);
  // }

  public createHome(farm: Farm): void {
    console.log(`${this.name} the ${this.type} finds a hole in the wall on ${farm.name}`);
  }
}
