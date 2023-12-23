import { ComponentFactory, ComponentFactoryResolver, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToasterComponent } from '../toaster.component';

@Injectable({
  providedIn: 'root'
})
export class ToasterServiceService {

  // Instance variable
  showToaster: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }
}
