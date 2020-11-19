import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeccionTemplateComponent } from './edit-seccion-template.component';

describe('EditSeccionTemplateComponent', () => {
  let component: EditSeccionTemplateComponent;
  let fixture: ComponentFixture<EditSeccionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSeccionTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSeccionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
