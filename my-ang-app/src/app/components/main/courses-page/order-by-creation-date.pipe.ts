import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course';

@Pipe({
	name: 'orderByCreationDate'
})
export class OrderByCreationDatePipe implements PipeTransform {

	transform(coursesList: Course[]): Course[] {
		return coursesList.sort((currentCourse: Course, nextCourse: Course) => {

			/*
			if (currentCourse.creationDate < nextCourse.creationDate) {
				return -1;
			}
			if (currentCourse.creationDate > nextCourse.creationDate) {
				return 1;
			}
			return 0;
			*/

			return (currentCourse.creationDate < nextCourse.creationDate) ? -1
			: (currentCourse.creationDate > nextCourse.creationDate) ? 1 : 0;
		});
	}
}
