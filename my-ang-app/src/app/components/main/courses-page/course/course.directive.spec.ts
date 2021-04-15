import { ElementRef } from '@angular/core';

import { CourseDirective } from './course.directive';

let elementRef: ElementRef;
describe('CourseDirective', () => {
	let courseDirective: CourseDirective;
	beforeEach(() => {
		courseDirective = new CourseDirective(elementRef);
		spyOn(courseDirective, 'ngAfterViewInit');
		courseDirective.ngAfterViewInit();
	})

	it('should call courseDirective.ngAfterViewInit', () => {
		expect(courseDirective.ngAfterViewInit).toHaveBeenCalled();
	});
});
