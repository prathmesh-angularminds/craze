import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(url: string,payload: any) {

    // If we want to set cookies in browser which we received from server then pass withCredentials : true
    return this.http.post((environment.URL + url),payload,{withCredentials: true});
  }

  get(url: string) {

    return this.http.get((environment.URL + url));
  }

  patch(url: string,payload: any) {

    return this.http.patch((environment.URL + url),payload);
  }

  delete(url: string) {
    
    return this.http.delete((environment.URL + url));
  }
}
