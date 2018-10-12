import {Exercise} from "./exercises";
import {User} from "./user";

export class ExerciseLog {

    constructor(id: number, user: User, exercise: Exercise, dateTime: number) {
        this._id = id;
        this.user = user;
        this.exercise = exercise;
        this.dateTime = dateTime;
    }

    _id: number;
    user: User;
    exercise: Exercise;
    dateTime: number;
}