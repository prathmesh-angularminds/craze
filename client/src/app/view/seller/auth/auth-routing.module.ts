import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

// Components
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegistrationPlanComponent } from '../../../shared/components/registration-plan/registration-plan.component';

const routes:  Routes = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    },
    {
        path: "registration-plans",
        component: RegistrationPlanComponent,
    },
    {
        path: "sign-in",
        component: SignInComponent,
    },
    {
        path: "sign-up",
        component: SignUpComponent,
    },
    {
        path: "forget-password",
        component: ForgetPasswordComponent,
    },
    {
        path: "reset-password/:sellerId",
        component: ResetPasswordComponent,
    },
] 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }

