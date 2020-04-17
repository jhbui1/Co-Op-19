import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../user-service.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  user : User = new User("","","","","","");

  submitted = false;

  onSubmit() {
    this.userService.addUser(this.user);
    this.submitted = true;
  }
  constructor(
    private userService : UserService
  ) { }

  ngOnInit(): void {
  }

}
