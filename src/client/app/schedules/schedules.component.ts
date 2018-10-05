import {Component, OnInit} from '@angular/core';
import {Schedule} from "../models/schedule";
import {Exercise} from "../models/exercise";

@Component({
    selector: 'app-schedules',
    templateUrl: './schedules.component.html',
    styleUrls: ['./schedules.component.css']
})

export class SchedulesComponent implements OnInit {

    schedules: Array<Schedule> = [];

    deleteSchedule(scheduleIndex: number) {
        this.schedules.splice(scheduleIndex, 1);
    }

    deleteScheduleExercise(scheduleIndex: number, exerciseIndex: number) {
        this.schedules[scheduleIndex].exercises.splice(exerciseIndex, 1);
    }

    addSchedule() {
        const exercises: Array<Exercise> = [];

        this.schedules.push(new Schedule(this.schedules.length, "", exercises))
    }

    addExercise = function (scheduleIndex: number) {
        this.schedules[scheduleIndex].exercises.push(new Exercise(0, "name", "des", 1, 2));
    }

    constructor() {
    }

    ngOnInit() {
    }

}