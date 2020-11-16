import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSeccionComponent } from './delete-seccion.component';

describe('DeleteSeccionComponent', () => {
  let component: DeleteSeccionComponent;
  let fixture: ComponentFixture<DeleteSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
