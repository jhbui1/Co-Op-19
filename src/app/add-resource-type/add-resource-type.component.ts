import { Component, OnInit } from '@angular/core';

import {ResourceFormService} from '../resource-form.service';

@Component({
  selector: 'app-add-resource-type',
  templateUrl: './add-resource-type.component.html',
  styleUrls: ['./add-resource-type.component.scss']
})
export class AddResourceTypeComponent implements OnInit {

  constructor(private resourceForm:ResourceFormService) { }

  ngOnInit(): void {
  }

  scrollToResForm() {
    let target = document.getElementById("add-resourse-form-content");
    
    target?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  addHealth() {
    this.resourceForm.AddHealth();
    this.scrollToResForm();
  }
  addConsumable() {
    this.resourceForm.AddConsumable();
    this.scrollToResForm();
  }
  addShelter() {
    this.resourceForm.AddShelter();
    this.scrollToResForm();
  }

}
