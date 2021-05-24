import { TestBed } from '@angular/core/testing';

import { CoursesStreamService } from './courses-stream.service';

describe('CoursesStreamService', () => {
	let service: CoursesStreamService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CoursesStreamService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
