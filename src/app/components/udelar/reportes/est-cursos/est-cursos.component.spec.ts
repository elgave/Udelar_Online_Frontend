import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteEstCursos } from './est-cursos.component';

describe('ReporteEstCursos', () => {
  let component: ReporteEstCursos;
  let fixture: ComponentFixture<ReporteEstCursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteEstCursos ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteEstCursos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
