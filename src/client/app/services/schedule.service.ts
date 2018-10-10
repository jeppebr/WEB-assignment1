import {Injectable} from '@angular/core';
import {Schedule} from "../models/schedule";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from '../../app-config';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) {}

  getSchedules(): Observable<Schedule[]> {
      return this.http.get<Schedule[]>(`${API_URL}/schedules`);
  }

  postSchedule(): Observable<Schedule> {
      // TODO add userId to connect new schedule to that user
      return this.http.post<Schedule>(`${API_URL}/schedules`, "");
  }

  deleteSchedule(schedule: Schedule): Observable<Schedule> {
      return this.http.delete<Schedule>(`${API_URL}/schedules/${schedule._id}`);
  }
}