import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private http: HttpClient,
  ) { }

  getContacts() {
    return this.http.get('http://localhost:8882/contacts');
  }

  getInfo() {
    return this.http.get('http://localhost:8882/info')
  }

  getById(id) {
    return this.http.get(`http://localhost:8882/contact/${id}`)
  }
}
