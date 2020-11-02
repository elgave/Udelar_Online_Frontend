import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteFacultades } from './facultades.component';

describe('ReporteFacultades', () => {
  let component: ReporteFacultades;
  let fixture: ComponentFixture<ReporteFacultades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteFacultades ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteFacultades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
