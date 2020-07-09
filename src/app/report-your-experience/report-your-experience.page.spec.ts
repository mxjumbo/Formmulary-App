import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportYourExperiencePage } from './report-your-experience.page';

describe('ReportYourExperiencePage', () => {
  let component: ReportYourExperiencePage;
  let fixture: ComponentFixture<ReportYourExperiencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportYourExperiencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportYourExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
