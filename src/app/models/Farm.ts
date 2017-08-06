import { Farmer } from './Farmer';
import { Animal } from './Animal';

const INITIAL_ANIMAL_NUMBER = 0

interface IFarm {
  readonly name: string;
  readonly address: string;
  numberOfAnimals: number;
  farmers: Farmer[]
  animals: Animal[]
}

export class Farm
implements IFarm {
  readonly name: string;
  readonly address: string;
  numberOfAnimals: number = INITIAL_ANIMAL_NUMBER;

  //Composition: A Farm has Farmers and Animals
  farmers: Farmer[]
  animals: Animal[]

  constructor (args: {name: string, address: string, farmers: Farmer[], animals: Animal[]}) {
    this.name = args.name;
    this.address = args.address;
    this.farmers = args.farmers;
    this.animals = args.animals;

    args.animals.forEach(animal => { this.addAnimal() });
  }

  public addAnimal(): void {
    this.numberOfAnimals++;
  }
}
