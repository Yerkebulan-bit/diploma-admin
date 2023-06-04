import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpGeneralService {

  BASE_URL = 'http://localhost:8080/';

  constructor(public http: HttpClient) {
  }

  post(apiRoute: string, body: any) {
    return this.http.post(`${this.BASE_URL + apiRoute}`, body, { headers: this.getHttpHeaders() });
  }

  get(apiRoute: string) {
    return this.http.get(`${this.BASE_URL + apiRoute}`, { headers: this.getHttpHeaders() });
  }

  put(apiRoute: string, body: any) {
    return this.http.put(`${this.BASE_URL + apiRoute}`, body, { headers: this.getHttpHeaders() });
  }

  delete(apiRoute: string) {
    return this.http.delete(`${this.BASE_URL + apiRoute}`, { headers: this.getHttpHeaders() });
  }

  getHttpHeaders(): HttpHeaders {
    return new HttpHeaders().set("key", "value");
  }
}
