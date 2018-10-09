export class Exercise {

    constructor(id: number, exercise: string, description: string, set: number, reps: number) {
        this.id = id;
        this.exercise = exercise;
        this.description = description;
        this.set = set;
        this.reps = reps;
    }

    id: number;
    exercise: string;
    description: string;
    set: number;
    reps: number;

}