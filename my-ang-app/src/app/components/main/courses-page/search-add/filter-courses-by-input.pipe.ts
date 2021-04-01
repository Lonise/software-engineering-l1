import { Pipe, PipeTransform } from '@angular/core';

import { CourseInterface } from '../course';

@Pipe({
  name: 'filterCoursesByInput',
})

export class FilterCoursesByInputPipe implements PipeTransform {

  transform(coursesList: CourseInterface[], inputValue: string): CourseInterface[] {
		return coursesList.filter(course =>	course.title.indexOf(inputValue.toUpperCase()) > -1);
  };
}
