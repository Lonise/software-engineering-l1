import { Pipe, PipeTransform } from '@angular/core';
import { CourseInterface } from './course';

@Pipe({
	name: 'orderByCreationDate'
})
export class OrderByCreationDatePipe implements PipeTransform {

	transform(coursesList: CourseInterface[]): CourseInterface[] {
		return coursesList.sort((currentCourse: CourseInterface, nextCourse: CourseInterface) => {

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
