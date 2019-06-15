import { TestBed, async, inject } from '@angular/core/testing';

import { LockedGuard } from './locked.guard';

describe('LockedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LockedGuard]
    });
  });

  it('should ...', inject([LockedGuard], (guard: LockedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
