import { Component } from '@angular/core';
import { Farmer } from '../../models/Farmer';

@Component({
  selector: 'farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})

export class FarmerComponent {
  public createFarmers(): Farmer[] {
    let farmers: Farmer[] = [];

    let homer = new Farmer({firstName: 'Homer', lastName: 'Zuckerman'});
    let edith = new Farmer({firstName: 'Edith', lastName: 'Zuckerman'});

    farmers.push(homer, edith);

    return farmers;
  }
}
