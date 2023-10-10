import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterServiceService {

  // Instance variable
  showToaster: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }
}
