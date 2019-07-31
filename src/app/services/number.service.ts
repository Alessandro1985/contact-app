import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor(
    private http: HttpClient,
  ) { }

  getNumber() {
    return this.http.get('http://localhost:8882/number')
  }
}