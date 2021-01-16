import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://127.0.0.1:8000/api/login';

  constructor(
    private http: HttpClient,
  ) { }

  login(account: string, password: string): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    var data = {
      "account": account,
      "password": password
    };
    return this.http.post(`${this.baseUrl}`, data, {headers: reqHeader, responseType: 'json'});
  }
}
