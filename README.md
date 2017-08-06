# OOP Practice - Charlotte's Web

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

#### Used to practice OOP concepts of:
 - Inheritance

    ```ts

    export abstract class Animal {

      public feed(): void {
        console.log(`Feeding ${this.name} the ${this.type}`);
      }

      public abstract createHome(farm: Farm): void;
    }

    //Inheritance: Pig is an Animal
    export class Pig extends Animal {
        public createHome(farm: Farm): void {
        console.log(`${this.name} the ${this.type} gets a stall in the barn on ${farm.name}`);
      }
    }
    ```
 - Composition

    ```ts
    //Composition: A Farm has Farmers and Animals
    export class Farm
    implements IFarm {
      readonly name: string;
      farmers: Farmer[]
      animals: Animal[]
    }
    ```
 - Polymorphism
  - Overriding
    ```ts
    export class Spider extends Animal {
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
    }

    ```
  - Duck Typing
    ```ts
    export class Farmer
    implements IFarmer {
      readonly firstName: string;
      readonly lastName: string;

      constructor(args: {firstName: string, lastName: string}) {
        this.firstName = args.firstName;
        this.lastName = args.lastName;
      }

      //createHome exists on Animal and Farmer
      public createHome(farm: Farm): void {
        console.log(`${this.firstName} ${this.lastName} is building a farmhouse on ${farm.name}`);
      }
    }

    //on AppComponent
    private createHomes(): void {
      let thingsInNeedOfAHome: any[] = [];
      thingsInNeedOfAHome = thingsInNeedOfAHome.concat(this.farm.animals, this.farm.farmers);

      //example of a duck type because it doesn't matter if it's a
      //Farmer or an Animal, as long is it can createHome with a farm
      thingsInNeedOfAHome.forEach(thing => {

        thing.createHome(this.farm);
      });
    }
    ```
  - Overloading (if it was possible)
    ```ts
    //if this wasn't complied into Javascript and was a true statically typed language
    //this could be an example Overloading

    public feed(foodNumber: number): void {
      console.log(`${this.name} the ${this.type} is eating ${foodNumber} pieces of food`);
    }

    public feed(food: string): void {
      console.log(`${this.name} the ${this.type} is eating ${food}`);
    }

    public feed(foodNumber: number, food: string): void {
      console.log(`${this.name} the ${this.type} is eating ${foodNumber} pieces of ${food}`);
    }
    ```
    Typescript does have a version of Overloading, but it requires "ifs": [Typescript Documentation](https://www.typescriptlang.org/docs/handbook/functions.html)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
