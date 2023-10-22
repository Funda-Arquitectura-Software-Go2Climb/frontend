import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private apiUrl = 'https://my-json-server.typicode.com/QuispeJerry/data/travels';

  constructor(private http: HttpClient) {}

  // Obtener todos los viajes
  getTravels(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener viajes por ID de agencia
  getTravelsByAgencyId(agencyId: number): Observable<any[]> {
    const url = `${this.apiUrl}?agencyId=${agencyId}`;
    return this.http.get<any[]>(url);
  }
}
