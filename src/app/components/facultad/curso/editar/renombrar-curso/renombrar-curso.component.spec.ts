import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenombrarCursoComponent } from './renombrar-curso.component';

describe('RenombrarCursoComponent', () => {
  let component: RenombrarCursoComponent;
  let fixture: ComponentFixture<RenombrarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenombrarCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenombrarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
