import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponenteComponent } from './edit-componente.component';

describe('EditComponenteComponent', () => {
  let component: EditComponenteComponent;
  let fixture: ComponentFixture<EditComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
