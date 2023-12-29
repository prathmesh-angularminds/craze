import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SellerAuthLayoutComponent } from 'src/app/layout/seller-layout/seller-auth-layout/seller-auth-layout.component';
import { SellerHomeLayoutComponent } from 'src/app/layout/seller-layout/seller-home-layout/seller-home-layout.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: "auth",
        pathMatch: "full"
    },
    {
        path: "auth",
        component: SellerAuthLayoutComponent,
        children: [
            {
                path: "",
                loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
            }
        ],
    },
    {
        path: "app",
        component: SellerHomeLayoutComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SellerRoutingModule { }

