import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { WildCardComponent } from './view/wild-card/wild-card.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent
  },
  {
    path: "auth",
    component: AuthLayoutComponent
  },
  {
    path: "**",
    component: WildCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
