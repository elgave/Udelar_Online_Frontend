import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteEstFacultades } from './est-facultades.component';

describe('ReporteEstFacultades', () => {
  let component: ReporteEstFacultades;
  let fixture: ComponentFixture<ReporteEstFacultades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteEstFacultades ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteEstFacultades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
