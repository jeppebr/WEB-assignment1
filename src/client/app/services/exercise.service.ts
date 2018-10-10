import {Injectable} from '@angular/core';
import {Schedule} from "../models/schedule";
import {Exercise} from "../models/exercises";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

    constructor(private http: HttpClient) {}

    postExercise(schedule: Schedule): Observable<Exercise> {
        // TODO add userId to connect new schedule to that user
        return this.http.post<Exercise>(`http://localhost:3000/api/schedules/${schedule._id}/exercises/`, "");
    }

    deleteExercise(schedule: Schedule, exercise: Exercise): Observable<Exercise> {
        return this.http.delete<Exercise>(`http://localhost:3000/api/schedules/${schedule._id}/exercises/${exercise._id}`);
    }
}
