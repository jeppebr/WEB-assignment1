export class Exercise {

    constructor(_id: number, exercise: string, description: string, set: number, reps: number) {
        this._id = _id;
        this.exerciseName = exercise;
        this.description = description;
        this.set = set;
        this.reps = reps;
    }

    _id: number;
    exerciseName: string;
    description: string;
    set: number;
    reps: number;

}