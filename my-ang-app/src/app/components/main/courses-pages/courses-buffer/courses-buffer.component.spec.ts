import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesBufferComponent } from './courses-buffer.component';

describe('CoursesBufferComponent', () => {
  let component: CoursesBufferComponent;
  let fixture: ComponentFixture<CoursesBufferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesBufferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesBufferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
