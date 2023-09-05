import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthLayoutComponent,
    HomeLayoutComponent
  ]
})
export class LayoutModule { }
