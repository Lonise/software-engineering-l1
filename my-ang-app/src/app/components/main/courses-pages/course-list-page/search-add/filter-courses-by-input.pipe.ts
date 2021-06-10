import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../../../../Interfaces-and-classes/course/course';

@Pipe({
	name: 'filterCoursesByInput',
})

export class FilterCoursesByInputPipe implements PipeTransform {

	transform(coursesList: Course[], inputValue: string): Course[] {
		return coursesList.filter(course =>	course.title.indexOf(inputValue.toUpperCase()) > -1);
	}
}
