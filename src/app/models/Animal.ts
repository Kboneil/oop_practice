import { Farm } from './Farm';

interface IAnimal {
  readonly type: string;
  readonly name: string;

  feed(): void;
  sleep(): void;
  createHome(farm: Farm): void;
}

export abstract class Animal
implements IAnimal
 {
  readonly type: string;
  readonly name: string;

  constructor (args:  {type: string, name: string}){
    this.type = args.type;
    this.name = args.name;
  }

  public feed(): void {
    console.log(`Feeding ${this.name} the ${this.type}`);
  }

  public sleep(): void {
    console.log(`${this.name} the ${this.type} goes to sleep`);
  }

  public abstract createHome(farm: Farm): void;
}
