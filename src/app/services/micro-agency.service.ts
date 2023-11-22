import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MicroAgencyService {

  private apiUrl = 'https://go2climb-apigateway.onrender.com/api/v1/agencies'; 
  

  constructor(private http: HttpClient) {}

  getAllAgencies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getAgencyById(agencyId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/id/${agencyId}`);
  }

  getAgencyByName(agencyName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/name/${agencyName}`);
  }

  getAgencyByEmail(agencyEmail: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/email/${agencyEmail}`);
  }

  getAgencyByLocation(agencyLocation: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/location/${agencyLocation}`);
  }
}


