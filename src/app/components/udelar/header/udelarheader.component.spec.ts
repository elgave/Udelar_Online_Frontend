import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdelarHeaderComponent } from './udelarheader.component';

describe('UdelarHeaderComponent', () => {
  let component: UdelarHeaderComponent;
  let fixture: ComponentFixture<UdelarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdelarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdelarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
