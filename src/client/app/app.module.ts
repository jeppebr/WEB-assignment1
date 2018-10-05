import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AddExerciseComponent} from './add-exercise/add-exercise.component';
import {SchedulesComponent} from './schedules/schedules.component';

@NgModule({
    declarations: [
        AppComponent,
        AddExerciseComponent,
        SchedulesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
