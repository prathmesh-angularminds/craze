import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrutalismBadgeComponent } from './brutalism-badge.component';

describe('BrutalismBadgeComponent', () => {
  let component: BrutalismBadgeComponent;
  let fixture: ComponentFixture<BrutalismBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrutalismBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrutalismBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
