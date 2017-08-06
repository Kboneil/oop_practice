import { Farm } from './Farm';

interface IFarmer {
  readonly firstName: string;
  readonly lastName: string;

  createHome(farm: Farm): void;
}

export class Farmer
implements IFarmer {
  readonly firstName: string;
  readonly lastName: string;

  constructor(args: {firstName: string, lastName: string}) {
    this.firstName = args.firstName;
    this.lastName = args.lastName;
  }

  public createHome(farm: Farm): void {
    console.log(`${this.firstName} ${this.lastName} is building a farmhouse on ${farm.name}`);
  }
}
