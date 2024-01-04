import { TestBed } from '@angular/core/testing';

import { IsSellerLoggedInGuard } from './is-seller-logged-in.guard';

describe('IsSellerLoggedInGuard', () => {
  let guard: IsSellerLoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsSellerLoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
