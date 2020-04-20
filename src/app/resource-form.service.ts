import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceFormService {
  addShelter = false;
  addConsumable = false;
  addHealth = false;
  constructor() { }

  AddConsumable() {
    this.addShelter=false;
    this.addHealth=false;

    this.addConsumable=true;
  }
  AddShelter() {
    this.addHealth=false;
    this.addConsumable=false;

    this.addShelter=true;
  }

  AddHealth() {
    this.addShelter=false;
    this.addConsumable=false;

    this.addHealth=true;
  }

}
