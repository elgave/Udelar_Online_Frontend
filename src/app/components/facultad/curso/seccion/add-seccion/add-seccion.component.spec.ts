import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeccionComponent } from './add-seccion.component';

describe('AddSeccionComponent', () => {
  let component: AddSeccionComponent;
  let fixture: ComponentFixture<AddSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
