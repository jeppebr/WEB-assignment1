import {Component, OnInit} from '@angular/core';
import {Schedule} from "../models/schedule";
import {User} from "../models/user";
import {ScheduleService} from "../services/schedule.service";
import {ExerciseService} from "../services/exercise.service";
import {NgForm} from "@angular/forms";
import {ExerciseLog} from "../models/exerciseLog";

@Component({
    selector: 'app-schedules',
    providers: [ScheduleService],
    templateUrl: './schedules.component.html',
    styleUrls: ['./schedules.component.css']
})

export class SchedulesComponent implements OnInit {

    user: User;
    schedules: Schedule[];

    constructor(private scheduleService: ScheduleService, private exerciseService: ExerciseService) {}

    ngOnInit() {
        this.scheduleService.getSchedules().subscribe(schedules => this.schedules = schedules);
        this.user = new User("Deloris", [], []);
    }

    //Schedules
    deleteSchedule(scheduleId: number) {
        const scheduleIndex = this.schedules.findIndex(schedule => schedule._id === scheduleId);

        this.scheduleService.deleteSchedule(this.schedules[scheduleIndex]).subscribe();
        this.schedules.splice(scheduleIndex, 1);
    }

    postSchedule() {
        this.scheduleService.postSchedule().subscribe(schedule => this.schedules.push(schedule));
    }

    //Exercises
    postExercise(form: NgForm, scheduleId: number) {
        const scheduleIndex = this.schedules.findIndex(schedule => schedule._id === scheduleId);
        const body = {
            exerciseName: form.value.exerciseName,
            description: form.value.description,
            set: form.value.set,
            reps: form.value.reps
        };
        this.exerciseService.postExercise(this.schedules[scheduleIndex], body).subscribe(
            exercise => this.schedules[scheduleIndex].exercises.push(exercise)
        );
    }

    deleteExercise(scheduleId: number, exerciseId: number) {
        const scheduleIndex = this.schedules.findIndex(schedule => schedule._id === scheduleId);
        const schedule: Schedule = this.schedules[scheduleIndex];

        const exerciseIndex = schedule.exercises.findIndex(exercise => exercise._id === exerciseId);

        this.exerciseService.deleteExercise(schedule, schedule.exercises[exerciseIndex]).subscribe();
        schedule.exercises.splice(exerciseIndex, 1);
    }

    logExercise(scheduleId: number, exerciseId: number) {
        const newExerciseLog = new ExerciseLog(this.user, this.findExerciseById(scheduleId, exerciseId), Date.now());
        this.user.exerciseLogs.push(newExerciseLog)
    }

    private findScheduleById (scheduleId: number){
        return this.schedules[this.schedules.findIndex(schedule => schedule._id === scheduleId)];
    }

    private findExerciseById (scheduleId: number, exerciseId: number) {
        const exercises = this.findScheduleById(scheduleId).exercises;
        return exercises[exercises.findIndex(exercise => exercise._id === exerciseId)];
    }

}