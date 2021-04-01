import { Pipe, PipeTransform } from '@angular/core';

import { ICourseProperties } from '../course';

@Pipe({
	name: 'filterCoursesByInput',
})

export class FilterCoursesByInputPipe implements PipeTransform {

	transform(coursesList: ICourseProperties[], inputValue: string): ICourseProperties[] {
		return coursesList.filter(course =>	course.title.indexOf(inputValue.toUpperCase()) > -1);
	}
}
