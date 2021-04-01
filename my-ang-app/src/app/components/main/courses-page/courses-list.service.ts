import { Injectable } from '@angular/core';

import { Course, ICourseProperties } from './course';
import { FilterCoursesByInputPipe } from './search-add/filter-courses-by-input.pipe';

@Injectable({
		providedIn: 'root'
})

export class CoursesListService {

	constructor(private filterCoursesByInputPipe: FilterCoursesByInputPipe) { }

	private courseListData: ICourseProperties[] = [
		new Course({
			id: 1,
			title: 'HTML course',
			creationDate: new Date(2021, 5, 28),
			duration: 90,
			description: 'HTML course HTML course',
			isTopRated: true
		}),
		new Course({
			id: 2,
			title: 'CSS course',
			creationDate: new Date(2021, 2, 25),
			duration: 115,
			description: 'CSS course CSS course',
			isTopRated: false
		}),
		new Course({
			id: 3,
			title: 'JS course',
			creationDate: new Date(2021, 2, 15),
			duration: 25,
			description: 'JS course JS course',
			isTopRated: true
		}),
		new Course({
			id: 4,
			title: 'JSX course',
			creationDate: new Date(2021, 3, 10),
			duration: 75,
			description: 'JSX course JSX course',
			isTopRated: false
		}),
		new Course({
			id: 5,
			title: 'TS course',
			creationDate: new Date(2021, 1, 20),
			duration: 40,
			description: 'TS course TS course',
			isTopRated: true
		}),
	];

	public isCourseListDataEmpty = false;

	public getCourseList(): ICourseProperties[] {
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

	public getFilteredCourseList(inputValue: string): ICourseProperties[] {
		if ( inputValue.trim() === '' ) {
			return this.getCourseList();
		} else {
			return this.filterCoursesByInputPipe.transform(this.courseListData, inputValue);
		}
	}
}
