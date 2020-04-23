import { TestBed } from '@angular/core/testing';

import { FilterCombinedSearchService } from './filter-combined-search.service';

describe('FilterCombinedSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterCombinedSearchService = TestBed.get(FilterCombinedSearchService);
    expect(service).toBeTruthy();
  });
});
