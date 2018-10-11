import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SchedulesComponent} from './schedules/schedules.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ScheduleService} from "./services/schedule.service";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SchedulesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
