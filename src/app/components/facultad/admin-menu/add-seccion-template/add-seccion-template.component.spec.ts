import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeccionTemplateComponent } from './add-seccion-template.component';

describe('AddSeccionTemplateComponent', () => {
  let component: AddSeccionTemplateComponent;
  let fixture: ComponentFixture<AddSeccionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSeccionTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSeccionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
