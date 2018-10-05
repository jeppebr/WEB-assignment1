import {Component, OnInit} from '@angular/core';
import {Schedule} from "../models/schedule";

@Component({
    selector: 'app-schedules',
    templateUrl: './schedules.component.html',
    styleUrls: ['./schedules.component.css']
})

export class SchedulesComponent implements OnInit {

    schedules = [{}];

    deleteSchedule = function () {
        alert("Delete schedule activated");
    }

    deleteScheduleExercise = function () {
        alert("Delete schedule exercise activated");
    }


    addSchedule() {
        this.schedules.push(new Schedule(1, ""))
    }

    constructor() {
    }

    ngOnInit() {
    }

}