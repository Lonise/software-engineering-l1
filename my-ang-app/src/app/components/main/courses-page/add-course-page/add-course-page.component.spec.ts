import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursePageComponent } from './add-course-page.component';

describe('AddCoursePageComponent', () => {
	let component: AddCoursePageComponent;
	let fixture: ComponentFixture<AddCoursePageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AddCoursePageComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddCoursePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
