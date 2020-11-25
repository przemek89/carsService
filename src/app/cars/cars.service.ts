import { Injectable } from '@angular/core';
import {Car} from './models/car';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private url : string = "http://localhost:3000/api/cars";

  constructor(private http : HttpClient) { }


  getCars() {
    return this.http.get<Car[]>(this.url)
  }

  getCar(id : number) {
    return this.http.get<Car>(this.url + `/${id}`)
  }

  addCar(data : Car) : Observable<Car> {
    return this.http.post<Car>(this.url, data)
  }
}
