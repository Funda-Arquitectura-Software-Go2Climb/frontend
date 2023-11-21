import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl = 'https://backendiot.azurewebsites.net/api/activity';

  constructor(private http: HttpClient) {}

  getActivities(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  postCreateActivity(activity: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, activity);
  }

  deleteActivity(activityId: number): Observable<any> {
    const url = `${this.apiUrl}/${activityId}`;
    return this.http.delete<any>(url);
  }
}
