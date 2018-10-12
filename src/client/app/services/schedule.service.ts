import {Injectable} from '@angular/core';
import {Schedule} from "../models/schedule";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from '../../app-config';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) {}

  getSchedules(): Observable<Schedule[]> {
      let options = {
          headers: new HttpHeaders({
              "Content-Type": 'application/json',
              "InterceptorSkipHeader": ''
          })
      };
      return this.http.get<Schedule[]>(`${API_URL}/schedules`, options);
  }

  postSchedule(): Observable<Schedule> {
      // TODO add userId to connect new schedule to that user
      let options = {
        headers: new HttpHeaders({
          "Content-Type": 'application/json'
        })
      };

      return this.http.post<Schedule>(`${API_URL}/schedules`, "", options);
  }

  deleteSchedule(schedule: Schedule): Observable<Schedule> {
      return this.http.delete<Schedule>(`${API_URL}/schedules/${schedule._id}`);
  }
}