import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFacultadComponent } from './main.component';

describe('HomeComponent', () => {
  let component: MainFacultadComponent;
  let fixture: ComponentFixture<MainFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFacultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
