import { ElementRef } from '@angular/core';

import { CourseDirective } from './course.directive';

let elementRef: ElementRef;
describe('CourseDirective', () => {
	it('should create an instance', () => {
		const directive = new CourseDirective(elementRef);
		expect(directive).toBeTruthy();
	});
});
