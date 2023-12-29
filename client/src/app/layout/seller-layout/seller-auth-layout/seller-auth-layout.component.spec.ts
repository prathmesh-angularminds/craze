import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAuthLayoutComponent } from './seller-auth-layout.component';

describe('AuthLayoutComponent', () => {
  let component: SellerAuthLayoutComponent;
  let fixture: ComponentFixture<SellerAuthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAuthLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
