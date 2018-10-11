import {Schedule} from "./schedule";
import {ExerciseLog} from "./exerciseLog";

export class User {

    constructor(id: number, userName: string, password: string, exercises: Array<Schedule>, exerciseLogs: Array<ExerciseLog>) {
        this._id = id;
        this.userName = userName;
        this.password = password;
        this.exercises = exercises;
        this.exerciseLogs = exerciseLogs;
    }

    _id: number;
    userName: string;
    password: string;
    exercises: Array<Schedule>;
    exerciseLogs: Array<ExerciseLog>;
}