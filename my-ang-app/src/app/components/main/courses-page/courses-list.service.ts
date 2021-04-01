import { Injectable } from '@angular/core';

import { Course, CourseInterface } from './course';
import { FilterCoursesByInputPipe } from './search-add/filter-courses-by-input.pipe';

@Injectable({
		providedIn: 'root'
})

export class CoursesListService {

	constructor(private filterCoursesByInputPipe: FilterCoursesByInputPipe) { }

	private courseListData: CourseInterface[] = [
		new Course( 1, 'HTML course', new Date(2021, 5, 28), 90, 'HTML course HTML course', true ),
		new Course( 2, 'CSS course', new Date(2021, 2, 25), 115, 'CSS course CSS course', false ),
		new Course( 3, 'JS course', new Date(2021, 2, 15), 25, 'JS course JS course', true ),
		new Course( 4, 'JSX course', new Date(2021, 3, 10), 75, 'JSX course JSX course', false ),
		new Course( 5, 'TS course', new Date(2021, 1, 20), 40, 'TS course TS course', true ),
	];

	public isCourseListDataEmpty = false;

	public getCourseList(): CourseInterface[] {
		return this.courseListData;
	}

	public getIsEmptyCourseList(): boolean {
		return this.isCourseListDataEmpty;
	}
	// public addCourse(course: CourseInterface) {
	// 	this.courseListData.push(course);
	// };

	public removeCourse( id: number | string ): void {
		this.courseListData.forEach( (element, index) => {
			if ( element.id === id ) {
				this.courseListData.splice(index, 1);
			}
		});
		if (this.courseListData.length === 0) {
			this.isCourseListDataEmpty = true;
		}
	}

	public getFilteredCourseList(inputValue: string): CourseInterface[] {
		if ( inputValue.trim() === '' ) {
			return this.getCourseList();
		} else {
			return this.filterCoursesByInputPipe.transform(this.courseListData, inputValue);
		}
	}
}
