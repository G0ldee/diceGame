import { TestBed } from '@angular/core/testing';

import { PointsSystemService } from './points-system.service';

describe('PointsSystemService', () => {
  let service: PointsSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointsSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
