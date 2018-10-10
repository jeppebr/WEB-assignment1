import {Component, OnInit} from '@angular/core';
import {Schedule} from "../models/schedule";
import {Exercise} from "../models/exercises";
import {ScheduleService} from "../services/schedule.service";
import {ExerciseService} from "../services/exercise.service";

@Component({
    selector: 'app-schedules',
    providers: [ScheduleService],
    templateUrl: './schedules.component.html',
    styleUrls: ['./schedules.component.css']
})

export class SchedulesComponent implements OnInit {

    schedules: Schedule[];

    constructor(private scheduleService: ScheduleService, private exerciseService: ExerciseService) {}

    ngOnInit() {
        this.scheduleService.getSchedules().subscribe(schedules => this.schedules = schedules);
    }

    //Schedules
    deleteSchedule(scheduleIndex: number) {
        this.scheduleService.deleteSchedule(this.schedules[scheduleIndex]).subscribe();
        this.schedules.splice(scheduleIndex, 1);
    }

    postSchedule() {
        this.scheduleService.postSchedule().subscribe(schedule => this.schedules.push(schedule));
    }

    //Exercises
    postExercise(scheduleIndex: number) {
        this.schedules[scheduleIndex].exercises.push(new Exercise(0, "name", "des", 1, 2));
    }

    deleteExercise(scheduleIndex: number, exerciseIndex: number) {
        this.exerciseService.deleteExercise(this.schedules[scheduleIndex], this.schedules[scheduleIndex].exercises[exerciseIndex]).subscribe();
        this.schedules[scheduleIndex].exercises.splice(exerciseIndex, 1);
    }

}