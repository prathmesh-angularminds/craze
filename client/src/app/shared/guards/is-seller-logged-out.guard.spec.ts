import { TestBed } from '@angular/core/testing';

import { IsSellerLoggedOutGuard } from './is-seller-logged-out.guard';

describe('IsSellerLoggedOutGuard', () => {
  let guard: IsSellerLoggedOutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsSellerLoggedOutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
