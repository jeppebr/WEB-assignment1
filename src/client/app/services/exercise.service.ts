import {Injectable} from '@angular/core';
import {Schedule} from "../models/schedule";
import {Exercise} from "../models/exercises";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from '../../app-config';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

    constructor(private http: HttpClient) {}

    postExercise(schedule: Schedule, body: Object): Observable<Exercise> {
        return this.http.post<Exercise>(`${API_URL}/schedules/${schedule._id}/exercises/`, body);
    }

    deleteExercise(schedule: Schedule, exercise: Exercise): Observable<Exercise> {
        return this.http.delete<Exercise>(`${API_URL}/schedules/${schedule._id}/exercises/${exercise._id}`);
    }
}
