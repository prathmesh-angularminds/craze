import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPlanCardComponent } from './subscription-plan-card.component';

describe('SubscriptionPlanCardComponent', () => {
  let component: SubscriptionPlanCardComponent;
  let fixture: ComponentFixture<SubscriptionPlanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionPlanCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionPlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
