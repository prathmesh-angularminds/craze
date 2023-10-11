import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterModule } from './toaster/toaster.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToasterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [ToasterModule]
})
export class SharedModule { }
