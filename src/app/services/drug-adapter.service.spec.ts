import { TestBed } from '@angular/core/testing';

import { DrugAdapterService } from './drug-adapter.service';

describe('DrugAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrugAdapterService = TestBed.get(DrugAdapterService);
    expect(service).toBeTruthy();
  });
});
