import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarEncuestaComponent } from './publicar-encuesta.component';

describe('PublicarEncuestaComponent', () => {
  let component: PublicarEncuestaComponent;
  let fixture: ComponentFixture<PublicarEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicarEncuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
