import {Component, OnInit} from '@angular/core';
import {Schedule} from "../models/schedule";
import {User} from "../models/user";
import {ScheduleService} from "../services/schedule.service";
import {ExerciseService} from "../services/exercise.service";
import {NgForm} from "@angular/forms";
import {ExerciseLog} from "../models/exerciseLog";
import {Exercise} from "../models/exercises";
import {ExerciseLogService} from "../services/exercise-log.service";

@Component({
    selector: 'app-schedules',
    providers: [ScheduleService],
    templateUrl: './schedules.component.html',
    styleUrls: ['./schedules.component.css']
})

export class SchedulesComponent implements OnInit {

    user: User;
    schedules: Schedule[];

    constructor(
        private scheduleService: ScheduleService,
        private exerciseService: ExerciseService,
        private exerciseLogService: ExerciseLogService
    ) {}

    ngOnInit() {
        this.scheduleService.getSchedules().subscribe(schedules => this.schedules = schedules);
        this.user = new User("Deloris", [], []);
    }

    //Schedules
    deleteSchedule(schedule: Schedule) {
        const scheduleIndex = this.schedules.findIndex(schedule => schedule._id === schedule._id);

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
        const exerciseIndex = schedule.exercises.findIndex(exercise => exercise._id === exercise._id)

        this.exerciseService.deleteExercise(schedule, exercise).subscribe();
        schedule.exercises.splice(exerciseIndex, 1);
    }

    logExercise(newExercise: Exercise) {
        const newExerciseLog = new ExerciseLog(this.user, newExercise, Date.now());
        this.user.exerciseLogs.push(newExerciseLog);

        const body = {
            exerciseId: newExercise._id
        };
        this.exerciseLogService.postExerciseLog(body);
    }
}