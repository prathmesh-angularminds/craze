import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

// Layout Components
import { SellerAuthLayoutComponent } from 'src/app/layout/seller-layout/seller-auth-layout/seller-auth-layout.component';
import { SellerHomeLayoutComponent } from 'src/app/layout/seller-layout/seller-home-layout/seller-home-layout.component';

// Guards
import { IsSellerLoggedInGuard } from 'src/app/shared/guards/is-seller-logged-in.guard';
import { IsSellerLoggedOutGuard } from 'src/app/shared/guards/is-seller-logged-out.guard';

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
                canLoad: [IsSellerLoggedOutGuard]
            }
        ],
    },
    {
        path: "app",
        component: SellerHomeLayoutComponent,
        children: [
            {
                path: "",
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
                canLoad: [IsSellerLoggedInGuard]
            }
        ],
        canDeactivate: [IsSellerLoggedOutGuard]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SellerRoutingModule { }

