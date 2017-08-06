import { Component } from '@angular/core';

interface IFarm {
  name: string;
  address: string;
  numberOfAnimals: number;

  createHomes(thingsInNeedOfAHome: any[]): void;
}

class Farm
implements IFarm{
  name: string;
  address: string;
  numberOfAnimals: number;

  constructor (args: {name: string, address: string, numberOfAnimals: number}){
    this.name = args.name;
    this.address = args.address;
    this.numberOfAnimals = args.numberOfAnimals;
  }

  public addAnimal(): void {
    this.numberOfAnimals++;
  }

  public createHomes(thingsInNeedOfAHome: any[]): void {
    thingsInNeedOfAHome.forEach(thing => {
      thing.createHome(this);
    });
  }
}

interface IAnimal {
  type: string;
  name: string;

  feed(): void;
  sleep(): void;
  createHome(farm: Farm): void;
}

abstract class Animal
implements IAnimal
 {
  type: string;
  name: string;

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

  abstract createHome(farm: Farm): void
}

class Pig extends Animal {
  public createHome(farm: Farm){
    console.log(`${this.name} the ${this.type} gets a stall in the barn on ${farm.name}`);
  }
}

class Spider extends Animal {
  private favoriteWord: string;

  constructor(args: {type: string, name: string, favoriteWord: string}) {
    super(args);
    this.favoriteWord = args.favoriteWord;
  }

  public feed(): void  {
    console.log(`${this.name} the ${this.type} is eating a bug`);
  }

  public createHome(farm: Farm): void {
    console.log(`${this.name} the ${this.type} spins a web on ${farm.name}`);
  }

  public setFavoriteWord(word: string): void {
    this.favoriteWord = word;
  }

  public getFavoriteWord(): string{
    return this.favoriteWord;
  }
}

class Rat extends Animal {
  public feed(): void {
    console.log(`${this.name} the ${this.type} is finding food in the garbage can`);
  }

  public createHome(farm: Farm): void {
    console.log(`${this.name} the ${this.type} finds a hole in the wall on ${farm.name}`);
  }
}

interface IFarmer {
  firstName: string;
  lastName: string;

  createHome(farm: Farm): void;
}

class Farmer
implements IFarmer {
  firstName: string;
  lastName: string;

  constructor(args: {firstName: string, lastName: string}){
    this.firstName = args.firstName;
    this.lastName = args.lastName;
  }

  public createHome(farm: Farm): void {
    console.log(`${this.firstName} ${this.lastName} is building a farmhouse on ${farm.name}`);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  farm: Farm;
  farmAnimals: Animal[] = [];
  farmers: Farmer[] = [];

  constructor(){
    this.createFarm();
  }

  createFarm(): void {
    this.farm = new Farm({name: 'Zuckerman\'s Farm', address: 'Somewhere in the country', numberOfAnimals: 0});

    this.createFarmers();
    this.createFarmAnimals();
  }

  createFarmers(): void {
    let homer = new Farmer({firstName: 'Homer', lastName: 'Zuckerman'});
    let edith = new Farmer({firstName: 'Edith', lastName: 'Zuckerman'});
    this.farmers.push(homer, edith);
  }

  createFarmAnimals(): void {
    let wilbur = new Pig({type: 'pig', name: 'Wilbur'});
    let charlotte = new Spider({type: 'spider', name: 'Charlotte', favoriteWord: 'Terrific'});
    let templeton = new Rat({type: 'rat', name: 'Templeton'});

    this.addAnimalsToFarm([wilbur, charlotte, templeton]);
  }

  addAnimalsToFarm(animals: Animal[]): void {
    animals.forEach(animal => {
      this.farmAnimals.push(animal);
      this.farm.addAnimal();
    })
  }

  createAnimalHomes(): void {
    this.farm.createHomes(this.farmAnimals);
  }

  feedAnimals(): void {
    this.farmAnimals.forEach(animal => {
      animal.feed();
    });
  }

  endDay(): void {
    this.farmAnimals.forEach(animal => {
      animal.sleep();
    });
  }

  viewFarmInformation(){
    console.log('farm: ', this.farm);
    console.log('farmers: ', this.farmers);
    console.log('farm animals: ', this.farmAnimals);
  }
}
