import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterCombinedSearchPage } from './filter-combined-search.page';

describe('FilterCombinedSearchPage', () => {
  let component: FilterCombinedSearchPage;
  let fixture: ComponentFixture<FilterCombinedSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCombinedSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterCombinedSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
