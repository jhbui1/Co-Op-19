import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../user-service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  user : User = new User(0,"","","","",0,"",22.2,11.1);

  submitted = false;

  async addUser(user:User): Promise<any> {
    const body = JSON.stringify(user);
    console.log(body);
    const response = await fetch('/users',{
      method:"POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(user)
    });
    return response.json();
  }

  onSubmit() {
    // this.userService.addUser(this.user)
    //   .subscribe();
    console.log(this.addUser(this.user));
    this.submitted = true;
  }
  constructor(
    private userService : UserService
  ) { }

  ngOnInit(): void {
  }

}
