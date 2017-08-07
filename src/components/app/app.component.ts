import { Component, OnInit, ViewChild } from '@angular/core';
import { AnimalComponent } from '../animal/animal.component';
import { FarmerComponent } from '../farmer/farmer.component';
import { Farm } from '../../models/Farm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild(AnimalComponent) animalChild: AnimalComponent
  @ViewChild(FarmerComponent) farmerChild: FarmerComponent

  protected farm: Farm;

  constructor(){}

  private createFarm(): void {
    console.assert(null != this.farmerChild, 'Assertion Fail @ AppComponent#createFarm: No farmerChild.');
    console.assert(null != this.animalChild, 'Assertion Fail @ AppComponent#createFarm: No animalChild.');

    let farmers = this.farmerChild.createFarmers();
    let animals = this.animalChild.createFarmAnimals();

    this.farm = new Farm({name: 'Zuckerman\'s Farm', address: 'Somewhere in the country', farmers: farmers, animals: animals});
  }

  private createHomes(): void {
    let thingsInNeedOfAHome: any[] = [];
    thingsInNeedOfAHome = thingsInNeedOfAHome.concat(this.farm.animals, this.farm.farmers);

    //example of a duck type because it doesn't matter if it's a
    //Farmer or an Animal, as long is it can createHome with a farm
    thingsInNeedOfAHome.forEach(thing => {
      console.assert(typeof thing.createHome === 'function',
      'Assertion Fail @ AppComponent#createHomes: No createHome().');
      console.assert(null != this.farm, 'Assertion Fail @ AppComponent#createHomes: No farm.');

      thing.createHome(this.farm);
    });
  }

  private viewFarmInformation(): void {
    console.log('farm: ', this.farm);
  }

  ngOnInit(){
    this.createFarm();
  }
}
