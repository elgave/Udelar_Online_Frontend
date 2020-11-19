import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSeccionTemplateComponent } from './list-seccion-template.component';

describe('ListSeccionTemplateComponent', () => {
  let component: ListSeccionTemplateComponent;
  let fixture: ComponentFixture<ListSeccionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSeccionTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSeccionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
