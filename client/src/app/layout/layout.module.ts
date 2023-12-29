import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerAuthLayoutComponent } from './seller-layout/seller-auth-layout/seller-auth-layout.component';
import { SellerHomeLayoutComponent } from './seller-layout/seller-home-layout/seller-home-layout.component';
import { RouterOutlet } from '@angular/router';
import { VerticalSidebarComponent } from '../shared/components/vertical-sidebar/vertical-sidebar.component';



@NgModule({
  declarations: [
    SellerAuthLayoutComponent,
    SellerHomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    // Standalone components
    VerticalSidebarComponent
  ],
  exports: [
    SellerAuthLayoutComponent,
    SellerHomeLayoutComponent
  ]
})
export class LayoutModule { }
