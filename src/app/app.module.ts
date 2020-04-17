import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainOptionsComponent } from './main-options/main-options.component';
import { MainTablesComponent } from './main-tables/main-tables.component';
import { RegisterComponent } from './register/register.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainOptionsComponent,
    MainTablesComponent,
    RegisterComponent,
    AddResourceComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }