import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  // This function returns specific cookie value
  get(cookieName: string): any {

    let cookieArray: string[] = document.cookie.split(';');

    return cookieArray.filter((ele: string) => ele.includes(cookieName)).toString().split('=')[1];
  }

  // This function sets new cookie
  set(cookieName: string,cookieValue: string): boolean {

    document.cookie = `${cookieName}=${cookieValue}`
    return true;
  }
}
