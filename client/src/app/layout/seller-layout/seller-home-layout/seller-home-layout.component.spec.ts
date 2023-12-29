import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerHomeLayoutComponent } from './seller-home-layout.component';

describe('HomeLayoutComponent', () => {
  let component: SellerHomeLayoutComponent;
  let fixture: ComponentFixture<SellerHomeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerHomeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerHomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
