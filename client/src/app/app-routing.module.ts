import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildCardComponent } from './view/wild-card/wild-card.component';

const routes: Routes = [
  // {
  //   path: "",
  //   loadChildren: () => import('./view/seller/seller.module').then(m => m.SellerModule);
  // },
  {
    path: "seller",
    loadChildren: () => import('./view/seller/seller.module').then(m => m.SellerModule),
    pathMatch: 'full'
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
