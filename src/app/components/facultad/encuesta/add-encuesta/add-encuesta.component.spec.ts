import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEncuestaComponent } from './add-encuesta.component';

describe('AddEncuestaComponent', () => {
  let component: AddEncuestaComponent;
  let fixture: ComponentFixture<AddEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEncuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
