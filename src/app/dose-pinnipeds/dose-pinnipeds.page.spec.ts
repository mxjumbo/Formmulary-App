import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DosePinnipedsPage } from './dose-pinnipeds.page';

describe('DosePinnipedsPage', () => {
  let component: DosePinnipedsPage;
  let fixture: ComponentFixture<DosePinnipedsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosePinnipedsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DosePinnipedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
