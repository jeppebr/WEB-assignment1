import {Component, Input, OnInit} from '@angular/core';
import {Schedule} from "../models/schedule";
import {ScheduleService} from "../services/schedule.service";
import {ExerciseService} from "../services/exercise.service";
import {NgForm} from "@angular/forms";
import {ExerciseLog} from "../models/exerciseLog";
import {Exercise} from "../models/exercises";
import {ExerciseLogService} from "../services/exercise-log.service";
import {User} from "../models/user";

@Component({
    selector: 'app-schedules',
    providers: [ScheduleService],
    templateUrl: './schedules.component.html',
    styleUrls: ['./schedules.component.css'],
})

export class SchedulesComponent implements OnInit {

    schedules: Schedule[] = [];
    @Input() user: User;

    constructor(
        private scheduleService: ScheduleService,
        private exerciseService: ExerciseService,
        private exerciseLogService: ExerciseLogService
    ) {}

    ngOnInit() {
        this.scheduleService.getSchedules().subscribe(schedules => this.schedules = schedules);
    }

    //Schedules
    deleteSchedule(schedule: Schedule) {
        const scheduleIndex = this.schedules.findIndex(x => x._id === schedule._id);

        this.scheduleService.deleteSchedule(schedule).subscribe();
        this.schedules.splice(scheduleIndex, 1);
    }

    postSchedule() {
        this.scheduleService.postSchedule().subscribe(schedule => this.schedules.push(schedule));
    }

    //Exercises
    postExercise(form: NgForm, schedule: Schedule) {
        const body = {
            exerciseName: form.value.exerciseName,
            description: form.value.description,
            set: form.value.set,
            reps: form.value.reps
        };
        this.exerciseService.postExercise(schedule, body).subscribe(
            exercise => schedule.exercises.push(exercise)
        );
    }

    deleteExercise(schedule: Schedule, exercise: Exercise) {
        const exerciseIndex = schedule.exercises.findIndex(x => x._id === exercise._id)

        this.exerciseService.deleteExercise(schedule, exercise).subscribe();
        schedule.exercises.splice(exerciseIndex, 1);
    }

    logExercise(exercise: Exercise) {
        const newExerciseLog = new ExerciseLog(0, exercise.exerciseName, Date.now());
        this.user.exerciseLogs.push(newExerciseLog);

        const body = {
            exerciseName: exercise.exerciseName,
            dateTime: Date.now()
        };
        this.exerciseLogService.postExerciseLog(this.user, body).subscribe();
    }
}