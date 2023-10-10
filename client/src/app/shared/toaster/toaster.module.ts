import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterComponent } from './toaster.component';
import { ToasterServiceService } from './toaster-service/toaster-service.service';



@NgModule({
  declarations: [ToasterComponent],
  imports: [
    CommonModule
  ],
  exports: [ToasterComponent]
})
export class ToasterModule { }
