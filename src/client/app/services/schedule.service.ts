import {Injectable} from '@angular/core';
import {Schedule} from "../models/schedule";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
      let options = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
          }),
          body: {scheduleId: schedule._id},
      };

      return this.http.delete<Schedule>("http://localhost:3000/api/schedules", options);
  }
}