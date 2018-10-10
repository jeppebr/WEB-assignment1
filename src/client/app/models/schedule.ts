import {Exercise} from "./exercises";

export class Schedule {

    constructor(id: number, exercises: Array<Exercise>) {
        this._id = id;
        this.exercises = exercises;
    }

    _id: number;
    exercises: Array<Exercise>;
}