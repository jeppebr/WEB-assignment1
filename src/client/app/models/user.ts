import {Schedule} from "./schedule";
import {ExerciseLog} from "./exerciseLog";

export class User {
    
    constructor(id: number, username: string, schedules: Array<Schedule>, exerciseLogs: Array<ExerciseLog>) {
        this._id = id;
        this.username = username;
        this.schedules = schedules;
        this.exerciseLogs = exerciseLogs;
    }

    _id: number;
    username: string;
    schedules: Array<Schedule>;
    exerciseLogs: Array<ExerciseLog>;
}