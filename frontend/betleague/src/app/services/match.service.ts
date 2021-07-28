import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Match} from '../model/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Match[]> {
    return this.httpClient.get<Match[]>(this.baseUrl);
  }
}
