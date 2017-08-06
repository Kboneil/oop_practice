import { Animal } from './Animal';
import { Farm } from './Farm';

//Inheritance: Spider is an Animal
export class Spider
extends Animal {
  private favoriteWord: string;

  constructor(args: {type: string, name: string, favoriteWord: string}) {
    super(args);
    this.favoriteWord = args.favoriteWord;
  }

  //overriding
  public feed(): void  {
    console.log(`${this.name} the ${this.type} is eating a bug`);
  }

  public createHome(farm: Farm): void {
    console.log(`${this.name} the ${this.type} spins a web on ${farm.name}`);
  }

  public setFavoriteWord(word: string): void {
    this.favoriteWord = word;
    console.log('The new favorite word is', this.getFavoriteWord())
  }

  public getFavoriteWord(): string {
    return this.favoriteWord;
  }
}
