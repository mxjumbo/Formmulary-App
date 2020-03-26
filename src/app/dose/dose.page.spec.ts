import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DosePage } from './dose.page';

describe('DosePage', () => {
  let component: DosePage;
  let fixture: ComponentFixture<DosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
