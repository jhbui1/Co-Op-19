import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes:Routes = [
  { path: '',redirectTo: 'main', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent},
  { path: 'add-resource', component: AddResourceComponent},
  { path: 'main', component: MainComponent},
  { path: 'login', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
