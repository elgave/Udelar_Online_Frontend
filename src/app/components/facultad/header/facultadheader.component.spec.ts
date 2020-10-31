import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadHeaderComponent } from './facultadheader.component';

describe('FacultadHeaderComponent', () => {
  let component: FacultadHeaderComponent;
  let fixture: ComponentFixture<FacultadHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
