import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { TablestyleComponent } from './tablestyle.component';

describe('TablestyleComponent', () => {
  let component: TablestyleComponent;
  let fixture: ComponentFixture<TablestyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablestyleComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
