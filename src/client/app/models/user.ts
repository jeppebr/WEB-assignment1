import {Schedule} from "./schedule";
import {ExerciseLog} from "./exerciseLog";

export class User {

    constructor(userName: string, exercises: Array<Schedule>, exerciseLogs: Array<ExerciseLog>) {
        this.userName = userName;
        this.exercises = exercises;
        this.exerciseLogs = exerciseLogs;
    }

    userName: string;
    exercises: Array<Schedule>;
    exerciseLogs: Array<ExerciseLog>;
}