import { TestBed } from '@angular/core/testing';

import { DrugMockService } from './drug-mock.service';

describe('DrugMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrugMockService = TestBed.get(DrugMockService);
    expect(service).toBeTruthy();
  });
});
