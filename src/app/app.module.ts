import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { NgwWowModule } from 'ngx-wow';

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
import { AddResourceTypeComponent } from './add-resource-type/add-resource-type.component';
import { AddResourceFormComponent } from './add-resource-form/add-resource-form.component';
import { ResourceService } from './resource.service';
import { ResourceFormService } from './resource-form.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HealthDetailComponent } from './health-detail/health-detail.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainOptionsComponent,
    MainTablesComponent,
    RegisterComponent,
    AddResourceComponent,
    MainComponent,
    RegisterFormComponent,
    AddResourceTypeComponent,
    AddResourceFormComponent,
    UserLoginComponent,
    NotFoundComponent,
    HealthDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgwWowModule,
    AgmCoreModule.forRoot({
      apiKey: environment.gmapsAPIKey 
    })
  ],
  providers: [
    UserService,
    ResourceService,
    ResourceFormService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }