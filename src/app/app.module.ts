import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainOptionsComponent } from './main-options/main-options.component';
import { MainTablesComponent } from './main-tables/main-tables.component';
import { RegisterComponent } from './register/register.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserService } from './user-service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainOptionsComponent,
    MainTablesComponent,
    RegisterComponent,
    AddResourceComponent,
    MainComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }