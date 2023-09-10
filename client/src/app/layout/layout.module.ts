import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  exports: [
    AuthLayoutComponent,
    HomeLayoutComponent
  ]
})
export class LayoutModule { }
