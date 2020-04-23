import { TestBed } from '@angular/core/testing';

import { DrugListService } from './drug-list.service';

describe('DrugListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrugListService = TestBed.get(DrugListService);
    expect(service).toBeTruthy();
  });
});
