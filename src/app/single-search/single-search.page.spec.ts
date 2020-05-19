import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleSearchPage } from './single-search.page';

describe('SingleSearchPage', () => {
  let component: SingleSearchPage;
  let fixture: ComponentFixture<SingleSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
