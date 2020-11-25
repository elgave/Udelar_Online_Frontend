import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFechaCalendarioComponent } from './add-fecha-calendario.component';

describe('AddFechaCalendarioComponent', () => {
  let component: AddFechaCalendarioComponent;
  let fixture: ComponentFixture<AddFechaCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFechaCalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFechaCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
