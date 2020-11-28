import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntregaTareaComponent } from './add-entrega-tarea.component';

describe('AddEntregaTareaComponent', () => {
  let component: AddEntregaTareaComponent;
  let fixture: ComponentFixture<AddEntregaTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEntregaTareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntregaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
