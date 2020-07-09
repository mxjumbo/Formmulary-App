import { TestBed } from '@angular/core/testing';

import { ReportYourExperienceService } from './report-your-experience.service';

describe('ReportYourExperienceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportYourExperienceService = TestBed.get(ReportYourExperienceService);
    expect(service).toBeTruthy();
  });
});
