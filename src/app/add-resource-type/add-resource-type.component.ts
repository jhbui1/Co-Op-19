import { Component, OnInit } from '@angular/core';

import { ResourceFormService } from '../resource-form.service';
import { UserService } from '../user-service';

@Component({
  selector: 'app-add-resource-type',
  templateUrl: './add-resource-type.component.html',
  styleUrls: ['./add-resource-type.component.scss']
})

export class AddResourceTypeComponent implements OnInit {

  logInError : boolean = false;

  constructor(private resourceForm:ResourceFormService,
              private userService:UserService    
    ) { }

  ngOnInit(): void {
  }

  checkLogin() {
    if(!this.userService.loggedIn) {
      this.logInError=true;
      return false;
    }
    return true;
  }

  scrollToResForm() {
    let target = document.getElementById("add-resourse-form-content");
    target?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  addHealth() {
    if(this.checkLogin()){
      this.resourceForm.AddHealth();
      this.scrollToResForm();
    }
    
  }

  addConsumable() {
    if(this.checkLogin()){
      this.resourceForm.AddConsumable();
      this.scrollToResForm();
    }
  }
  
  addShelter() {
    if(this.checkLogin()){
      this.resourceForm.AddShelter();
      this.scrollToResForm();
    }
  }

}
