import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCursosComponent } from './info-cursos.component';

describe('InfoCursosComponent', () => {
  let component: InfoCursosComponent;
  let fixture: ComponentFixture<InfoCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
