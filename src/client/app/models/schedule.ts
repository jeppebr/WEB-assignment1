import {Exercise} from "./exercise";

export class Schedule {

    constructor(id: number, name: string, exercises: Array<Exercise>) {
        this.id = id;
        this.name = name;
        this.exercises = exercises;
    }

    id: number;
    name: string;
    exercises: Array<Exercise>;
}