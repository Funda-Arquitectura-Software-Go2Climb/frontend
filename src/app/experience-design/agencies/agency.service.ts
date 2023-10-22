import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from 'src/app/models/agency';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  
  private apiUrl = 'https://my-json-server.typicode.com/QuispeJerry/data/agencies';

  constructor(private http: HttpClient) { }

  // Obtener todas las agencias
  getAgencies(): Observable<Agency[]> {
    return this.http.get<Agency[]>(this.apiUrl);
  }
}
