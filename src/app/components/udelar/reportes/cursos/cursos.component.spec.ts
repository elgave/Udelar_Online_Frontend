import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCursos } from './cursos.component';

describe('ReporteCursos', () => {
  let component: ReporteCursos;
  let fixture: ComponentFixture<ReporteCursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteCursos ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCursos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
