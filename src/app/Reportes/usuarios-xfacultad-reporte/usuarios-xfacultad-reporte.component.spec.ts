import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosXFacultadReporteComponent } from './usuarios-xfacultad-reporte.component';

describe('UsuariosXFacultadReporteComponent', () => {
  let component: UsuariosXFacultadReporteComponent;
  let fixture: ComponentFixture<UsuariosXFacultadReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosXFacultadReporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosXFacultadReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
