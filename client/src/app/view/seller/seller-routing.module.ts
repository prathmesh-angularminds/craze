import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AuthLayoutComponent } from 'src/app/layout/auth-layout/auth-layout.component';
import { HomeLayoutComponent } from 'src/app/layout/home-layout/home-layout.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: "auth",
        pathMatch: "full"
    },
    {
        path: "auth",
        component: AuthLayoutComponent,
        children: [
            {
                path: "",
                loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
            }
        ],
    },
    {
        path: "app",
        component: HomeLayoutComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SellerRoutingModule { }

