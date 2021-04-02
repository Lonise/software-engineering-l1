import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course';

@Pipe({
	name: 'orderByCreationDate'
})
export class OrderByCreationDatePipe implements PipeTransform {

	transform(coursesList: Course[]): Course[] {
		return coursesList.sort((currentCourse: Course, nextCourse: Course) => {
			return (currentCourse.creationDate < nextCourse.creationDate) ? -1
			: (currentCourse.creationDate > nextCourse.creationDate) ? 1 : 0;
		});
	}
}
