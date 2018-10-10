import {Injectable} from '@angular/core';
import {Schedule} from "../models/schedule";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) {}

  getSchedules(): Observable<Schedule[]> {
      return this.http.get<Schedule[]>("http://localhost:3000/api/schedules");
  }

  postSchedule(): Observable<Schedule> {
      // TODO add userId to connect new schedule to that user
      return this.http.post<Schedule>("http://localhost:3000/api/schedules", "");
  }

  deleteSchedule(schedule: Schedule): Observable<Schedule> {
      return this.http.delete<Schedule>(`http://localhost:3000/api/schedules/${schedule._id}`);
  }
}