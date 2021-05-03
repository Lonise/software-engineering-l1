import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPagesComponent } from './courses-pages.component';

describe('CoursesPagesComponent', () => {
	let component: CoursesPagesComponent;
	let fixture: ComponentFixture<CoursesPagesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ CoursesPagesComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CoursesPagesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
