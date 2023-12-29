import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-plan-card',
  templateUrl: './subscription-plan-card.component.html',
  styleUrls: ['./subscription-plan-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SubscriptionPlanCardComponent implements OnInit {

  // Input variables
  @Input()
  subscriptionPlanAmount: number = 0;
  @Input()
  routerLink!: string;
  @Input()
  contentProvidedInPlan!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
