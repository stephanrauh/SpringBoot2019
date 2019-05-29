import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EingabeComponent } from './eingabe.component';

describe('EingabeComponent', () => {
  let component: EingabeComponent;
  let fixture: ComponentFixture<EingabeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EingabeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EingabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
