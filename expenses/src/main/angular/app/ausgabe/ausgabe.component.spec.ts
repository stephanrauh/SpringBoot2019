import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AusgabeComponent } from './ausgabe.component';

describe('AusgabeComponent', () => {
  let component: AusgabeComponent;
  let fixture: ComponentFixture<AusgabeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusgabeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AusgabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
