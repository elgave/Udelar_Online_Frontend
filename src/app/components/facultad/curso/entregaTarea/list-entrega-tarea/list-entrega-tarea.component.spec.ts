import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntregaTareaComponent } from './list-entrega-tarea.component';

describe('ListEntregaTareaComponent', () => {
  let component: ListEntregaTareaComponent;
  let fixture: ComponentFixture<ListEntregaTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEntregaTareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntregaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
