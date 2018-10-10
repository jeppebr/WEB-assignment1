import {Component, OnInit} from '@angular/core';
import {Schedule} from "../models/schedule";
import {ScheduleService} from "../services/schedule.service";
import {ExerciseService} from "../services/exercise.service";
import {NgForm} from "@angular/forms";

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
    deleteSchedule(scheduleId: number) {
        var scheduleIndex = this.schedules.findIndex(schedule => schedule._id === scheduleId);

        this.scheduleService.deleteSchedule(this.schedules[scheduleIndex]).subscribe();
        this.schedules.splice(scheduleIndex, 1);
    }

    postSchedule() {
        this.scheduleService.postSchedule().subscribe(schedule => this.schedules.push(schedule));
    }

    //Exercises
    postExercise(form: NgForm, scheduleId: number) {
        var scheduleIndex = this.schedules.findIndex(schedule => schedule._id === scheduleId);
        var body = {
            exerciseName: form.value.exerciseName,
            description: form.value.description,
            set: form.value.set,
            reps: form.value.reps
        }
        this.exerciseService.postExercise(this.schedules[scheduleIndex], body).subscribe(
            exercise => this.schedules[scheduleIndex].exercises.push(exercise)
        );
    }

    deleteExercise(scheduleId: number, exerciseId: number) {
        var scheduleIndex = this.schedules.findIndex(schedule => schedule._id === scheduleId);
        var schedule: Schedule = this.schedules[scheduleIndex];

        var exerciseIndex = schedule.exercises.findIndex(exercise => exercise._id === exerciseId);

        this.exerciseService.deleteExercise(schedule, schedule.exercises[exerciseIndex]).subscribe();
        schedule.exercises.splice(exerciseIndex, 1);
    }

}