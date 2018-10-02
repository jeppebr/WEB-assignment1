import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AddExerciseComponent} from './add-exercise/add-exercise.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {AddScheduleComponent} from './add-schedule/add-schedule.component';

@NgModule({
    declarations: [
        AppComponent,
        AddExerciseComponent,
        ScheduleComponent,
        AddScheduleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
