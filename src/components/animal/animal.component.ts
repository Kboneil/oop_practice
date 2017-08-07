import { Component, Input } from '@angular/core';
import { Farm } from '../../models/Farm';
import { Animal } from '../../models/Animal';
import { Pig } from '../../models/Pig';
import { Spider } from '../../models/Spider';
import { Rat } from '../../models/Rat';

@Component({
  selector: 'animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})

export class AnimalComponent {
  @Input() private farm: Farm;

  public createFarmAnimals(): Animal[] {
    let animals: Animal[] = [];

    let wilbur = new Pig({type: 'pig', name: 'Wilbur'});
    let charlotte = new Spider({type: 'spider', name: 'Charlotte', favoriteWord: 'Terrific'});
    let templeton = new Rat({type: 'rat', name: 'Templeton'});

    animals.push(wilbur, charlotte, templeton);

    return animals;
  }

  private feedAnimals(animals: Animal[]): void {
    animals.forEach(animal => {
      animal.feed();
    });
  }

  private endDay(animals: Animal[]): void {
    animals.forEach(animal => {
      animal.sleep();
    });
  }

  private changeFavoriteWord(word: string): void {
    let spider: Spider = this.farm.animals.find(animal => {
      return animal instanceof Spider;
    }) as Spider;

    (spider) ? spider.setFavoriteWord(word) : alert('There are no spiders on the farm');
  }
}
