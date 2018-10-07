import {Injectable} from '@angular/core';
import {Schedule} from "../models/schedule";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) {}

  getSchedules (): Observable<Schedule[]> {
      return this.http.get<Schedule[]>("http://localhost:3000/api/schedules")
  }

  private handleError(error: any): Promise<any> {
      console.error('Something has gone wrong', error);
      return Promise.reject(error.message || error);
  }
}
