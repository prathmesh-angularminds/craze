import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SubscriptionPlanCardComponent } from '../subscription-plan-card/subscription-plan-card.component';

@Component({
  selector: 'app-registration-plan',
  templateUrl: './registration-plan.component.html',
  styleUrls: ['./registration-plan.component.scss'],
  standalone: true,
  imports: [SubscriptionPlanCardComponent,CommonModule],
})
export class RegistrationPlanComponent implements OnInit {

  registrationCard1: string[] = ["Access on all devices","One-to-one sharing","Save & fill password","Password generator","Secure notes","Multi factor authentication"];

  constructor() { }

  ngOnInit(): void {
  }

}
