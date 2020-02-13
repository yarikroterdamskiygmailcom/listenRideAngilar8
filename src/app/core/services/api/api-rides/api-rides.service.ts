import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '@environment/environment';
import {Observable} from 'rxjs';
import {Bike} from '@models/bike/bike.types';

@Injectable({providedIn: 'root'})
export class ApiRidesService {

  constructor(private httpClient: HttpClient) {
  }

  // TODO: add type
  getByQuery(params: any): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/rides`, {params});
  }

  getById(id: any, light = true): Observable<Bike> {
    const params: any = {light};

    return this.httpClient.get<Bike>(`${environment.apiUrl}/rides/${id}`, {params});
  }

  getUnavailable(startDate, duration): Observable<Bike[]> {
    const params: any = {start_date: startDate, duration};
    return this.httpClient.get<Bike[]>(`${environment.apiUrl}/rides/unavailable`, {params});
  }

  getByUserId(userId: string): Observable<any> {
    return this.httpClient.get<Bike[]>(`${environment.apiUrl}/users/${userId}/rides`);
  }

  createBike(data): Observable<any> {
    return this.httpClient.post(`/rides`, data);
  }

  updateBike(bikeId: string, bike: any): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}/rides/${bikeId}`, bike);
  }

  deleteBike(bikeId: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/rides/${bikeId}`);
  }
}
