import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MicroServiceService {

  private apiUrl = 'https://go2climb-apigateway.onrender.com/api/v1/service';

constructor(private http: HttpClient) {}

getAllServices(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}`);
}

getServiceById(serviceId: any): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/${serviceId}`);
}

getServiceByName(name: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/name/${name}`);
}

getServiceByLocation(location: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/location/${location}`);
}

getServiceByPrice(price: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/price/${price}`);
}

}
