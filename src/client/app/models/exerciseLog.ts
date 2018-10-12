export class ExerciseLog {

    constructor(id: number, exerciseName: String, dateTime: number) {
        this._id = id;
        this.exerciseName = exerciseName;
        this.dateTime = dateTime;
    }

    _id: number;
    exerciseName: String;
    dateTime: number;
}