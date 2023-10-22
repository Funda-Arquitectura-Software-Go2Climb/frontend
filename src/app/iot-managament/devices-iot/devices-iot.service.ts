import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card';

@Injectable({
  providedIn: 'root'
})
export class DevicesIotService {
  private baseUrl = 'https://my-json-server.typicode.com/QuispeJerry/data-iot/cards';  // Assuming json-server is running on default port

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseUrl);
  }

}
