import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadFooterComponent } from './footer.component';

describe('FacultadFooterComponent', () => {
  let component: FacultadFooterComponent;
  let fixture: ComponentFixture<FacultadFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
