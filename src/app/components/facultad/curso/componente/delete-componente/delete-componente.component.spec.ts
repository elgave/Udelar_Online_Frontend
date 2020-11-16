import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComponenteComponent } from './delete-componente.component';

describe('DeleteComponenteComponent', () => {
  let component: DeleteComponenteComponent;
  let fixture: ComponentFixture<DeleteComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
