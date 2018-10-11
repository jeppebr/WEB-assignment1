import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {API_URL} from "../../app-config";
import {HttpClient} from "@angular/common/http";
import {ExerciseLog} from "../models/exerciseLog";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class ExerciseLogService {

  constructor(private http: HttpClient) { }

    postExerciseLog(user: User, body: Object): Observable<ExerciseLog> {
        //TODO implement url server side
        return this.http.post<ExerciseLog>(`${API_URL}/users/${user._id}/exerciseLogs`, body);
    }
}
