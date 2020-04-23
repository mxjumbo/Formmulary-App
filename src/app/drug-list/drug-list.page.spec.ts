import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrugListPage } from './drug-list.page';

describe('DrugListPage', () => {
  let component: DrugListPage;
  let fixture: ComponentFixture<DrugListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrugListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
