import { Injectable } from '@angular/core';
import {Car} from './models/car';
import {HttpClient} from '@angular/common/http'

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

}
