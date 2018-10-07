import {Component, OnInit} from '@angular/core';
import {Schedule} from "../models/schedule";
import {Exercise} from "../models/exercises";
import {ScheduleService} from "../services/schedule.service";

@Component({
    selector: 'app-schedules',
    providers: [ScheduleService],
    templateUrl: './schedules.component.html',
    styleUrls: ['./schedules.component.css']
})

export class SchedulesComponent implements OnInit {

    schedules: Schedule[];

    constructor(private scheduleService: ScheduleService) {}

    ngOnInit() {
        this.scheduleService.getSchedules().subscribe(schedules => this.schedules = schedules);
        alert(this.schedules);
    }

    deleteSchedule(scheduleIndex: number) {
        this.schedules.splice(scheduleIndex, 1);
    }

    deleteScheduleExercise(scheduleIndex: number, exerciseIndex: number) {
        this.schedules[scheduleIndex].exercises.splice(exerciseIndex, 1);
    }

    addSchedule() {
        this.schedules.push(new Schedule(this.schedules.length, []))
    }

    addExercise(scheduleIndex: number) {
        this.schedules[scheduleIndex].exercises.push(new Exercise(0, "name", "des", 1, 2));
    }

}