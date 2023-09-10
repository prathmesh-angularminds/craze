import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes:  Routes = [
    {
        path: "",
        redirectTo: "sign-in",
        pathMatch: "full"
    },
    {
        path: "sign-in",
        component: SignInComponent,
        pathMatch: 'full'
    },
    {
        path: "sign-up",
        component: SignUpComponent,
        pathMatch: 'full'
    },
    {
        path: "forget-password",
        component: ForgetPasswordComponent,
        pathMatch: 'full'
    }
] 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }

