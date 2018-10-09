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
    }

    deleteSchedule(scheduleIndex: number) {
        this.scheduleService.deleteSchedule(this.schedules[scheduleIndex]).subscribe();
        this.schedules.splice(scheduleIndex, 1);
    }

    deleteScheduleExercise(scheduleIndex: number, exerciseIndex: number) {
        this.schedules[scheduleIndex].exercises.splice(exerciseIndex, 1);
    }

    postSchedule() {
        this.scheduleService.postSchedule().subscribe(schedule => this.schedules.push(schedule));
    }

    postExercise(scheduleIndex: number) {
        this.schedules[scheduleIndex].exercises.push(new Exercise(0, "name", "des", 1, 2));
    }

}