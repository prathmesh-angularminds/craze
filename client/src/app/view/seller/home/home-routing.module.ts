import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './navigation/products/products.component';
import { InboxComponent } from './navigation/inbox/inbox.component';
import { OrdersComponent } from './navigation/orders/orders.component';
import { OrganizationDetailsComponent } from './organization-settings/organization-details/organization-details.component';
import { OrganizationUsersComponent } from './organization-settings/organization-users/organization-users.component';
import { CanAccessOrganizationSettingsGuard } from 'src/app/shared/guards/can-access-organization-settings.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'inbox',
    component: InboxComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'organization-settings/details',
    component: OrganizationDetailsComponent,
    canActivate: [CanAccessOrganizationSettingsGuard]
  },
  {
    path: 'organization-settings/',
    component: OrganizationUsersComponent,
    canActivate: [CanAccessOrganizationSettingsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
