import {Exercise} from "./exercises";
import {User} from "./user";

export class ExerciseLog {

    constructor(user: User, exercise: Exercise, dateTime: number) {
        this.user = user;
        this.exercise = exercise;
        this.dateTime = dateTime;
    }

    user: User;
    exercise: Exercise;
    dateTime: number;
}