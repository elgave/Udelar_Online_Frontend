import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadSidebarComponent } from './sidebar.component';

describe('FacultadFooterComponent', () => {
  let component: FacultadSidebarComponent;
  let fixture: ComponentFixture<FacultadSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
