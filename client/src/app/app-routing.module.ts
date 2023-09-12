import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildCardComponent } from './view/wild-card/wild-card.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  },
  // {
  //   path: "",
  //   loadChildren: () => import('./view/seller/seller.module').then(m => m.SellerModule)
  // },
  {
    path: "seller",
    // component: AuthLayoutComponent,
    loadChildren: () => import('./view/seller/seller.module').then(m => m.SellerModule),
  },
  {
    path: "**",
    component: WildCardComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
