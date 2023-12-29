import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Standalone components
import { ToasterComponent } from './components/toaster/toaster.component';
import { RegistrationPlanComponent } from './components/registration-plan/registration-plan.component';
import { VerticalSidebarComponent } from './components/vertical-sidebar/vertical-sidebar.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ToasterComponent,
    VerticalSidebarComponent,
    RegistrationPlanComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [ToasterComponent,RegistrationPlanComponent,VerticalSidebarComponent]
})
export class SharedModule { }
