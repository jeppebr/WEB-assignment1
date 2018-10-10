export class Exercise {

    constructor(_id: number, exercise: string, description: string, set: number, reps: number) {
        this._id = _id;
        this.exercise = exercise;
        this.description = description;
        this.set = set;
        this.reps = reps;
    }

    _id: number;
    exercise: string;
    description: string;
    set: number;
    reps: number;

}