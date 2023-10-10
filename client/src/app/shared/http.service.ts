import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "";

  constructor(private http: HttpClient) { }

  post(url: string,payload: any) {

    return this.http.post(url,payload);
  }

  get(url: string) {

    return this.http.get(url);
  }

  patch(url: string,payload: any) {

    return this.http.patch(url,payload);
  }

  delete(url: string) {
    
    return this.http.delete(url);
  }
}
