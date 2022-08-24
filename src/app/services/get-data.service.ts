import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {storeModel} from '../models/storeDataModel';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http : HttpClient) { }
  getData() : Observable<storeModel[]> {
    return this.http.get<storeModel[]>('../../assets/data.json')
  }
}
