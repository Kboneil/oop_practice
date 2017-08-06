import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnimalComponent } from '../animal/animal.component';
import { FarmerComponent } from '../farmer/farmer.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    FarmerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
