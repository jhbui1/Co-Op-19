import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainOptionsComponent } from './main-options/main-options.component';
import { MainTablesComponent } from './main-tables/main-tables.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainOptionsComponent,
    MainTablesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }