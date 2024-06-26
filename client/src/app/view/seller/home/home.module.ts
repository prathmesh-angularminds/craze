import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProductsComponent } from './navigation/products/products.component';
import { OrdersComponent } from './navigation/orders/orders.component';
import { InboxComponent } from './navigation/inbox/inbox.component';
import { OrganizationDetailsComponent } from './organization-settings/organization-details/organization-details.component';
import { OrganizationUsersComponent } from './organization-settings/organization-users/organization-users.component';
import { DropDownComponent } from 'src/app/shared/components/drop-down/drop-down.component';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';
import { BrutalismBadgeComponent } from 'src/app/shared/components/brutalism-badge/brutalism-badge.component';


@NgModule({
  declarations: [
    ProductsComponent,
    OrdersComponent,
    InboxComponent,
    OrganizationDetailsComponent,
    OrganizationUsersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // Standalone components
    DropDownComponent,
    AvatarComponent,
    BrutalismBadgeComponent
  ]
})
export class HomeModule { }
