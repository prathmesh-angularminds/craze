import { TestBed } from '@angular/core/testing';

import { CanAccessOrganizationSettingsGuard } from './can-access-organization-settings.guard';

describe('CanAccessOrganizationSettingsGuard', () => {
  let guard: CanAccessOrganizationSettingsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAccessOrganizationSettingsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
