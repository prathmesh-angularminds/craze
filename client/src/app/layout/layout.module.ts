import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Components
import { SellerAuthLayoutComponent } from './seller-layout/seller-auth-layout/seller-auth-layout.component';
import { SellerHomeLayoutComponent } from './seller-layout/seller-home-layout/seller-home-layout.component';
import { VerticalSidebarComponent } from '../shared/components/vertical-sidebar/vertical-sidebar.component';
import { HorizontalHeaderComponent } from '../shared/components/horizontal-header/horizontal-header.component';



@NgModule({
  declarations: [
    SellerAuthLayoutComponent,
    SellerHomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    // Standalone components
    VerticalSidebarComponent,
    HorizontalHeaderComponent
  ],
  exports: [
    SellerAuthLayoutComponent,
    SellerHomeLayoutComponent
  ]
})
export class LayoutModule { }
