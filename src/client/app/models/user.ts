import {Schedule} from "./schedule";
import {ExerciseLog} from "./exerciseLog";

export class User {


    constructor(userName: string, password: string, exercises: Array<Schedule>, exerciseLogs: Array<ExerciseLog>) {
        this.userName = userName;
        this.password = password;
        this.exercises = exercises;
        this.exerciseLogs = exerciseLogs;
    }

    userName: string;
    password: string;
    exercises: Array<Schedule>;
    exerciseLogs: Array<ExerciseLog>;
}