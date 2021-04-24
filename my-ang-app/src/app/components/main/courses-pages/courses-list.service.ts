import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from './course';
import { FilterCoursesByInputPipe } from './course-list-page/search-add/filter-courses-by-input.pipe';

@Injectable({
		providedIn: 'root'
})

export class CoursesListService {

	constructor( /*private filterCoursesByInputPipe: FilterCoursesByInputPipe,*/ private router: Router ) { }

	public isCourseListVisible = true;
	public isAddCourseVisible = false;

	public toggleAddNewCourse(): void {
		this.isCourseListVisible = !this.isCourseListVisible;
		this.isAddCourseVisible = !this.isAddCourseVisible;

		if (this.isCourseListVisible) {
			this.router.navigate(['courses']);
		} else {
			this.router.navigate(['courses/new']);
		}
	}


	public courseListData: Course[] = [
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

	public getCourseList(): Course[] {
		return this.courseListData;
	}

	public getIsEmptyCourseList(): boolean {
		this.isCourseListDataEmpty = !this.courseListData.length;
		return this.isCourseListDataEmpty;
	}

	// TO DO
	// public addCourse(course: ICourseProperties) {
	// 	this.courseListData.push(new Course(course));
	// };

	public getCourseById(courseId: number): Course | string {
		for (let i = 0; i < this.courseListData.length; i++) {
			if ( this.courseListData[i].id === courseId ) {
				return this.courseListData[i];
			}
		}
		return 'incorrect id';
	}
	// TO DO
	// public updateCourse( course: Course, id: number ) {
	// }

	public removeCourse( id: number ): void {
		this.courseListData.forEach( (element, index) => {
			if ( element.id === id ) {
				this.courseListData.splice(index, 1);
			}
		});
		if (this.courseListData.length === 0) {
			this.isCourseListDataEmpty = true;
		}
	}

	public getFilteredCourseList(inputValue: string): Course[] {
		if ( inputValue.trim() === '' ) {
			return this.getCourseList();
		} else {
			return this.courseListData //this.filterCoursesByInputPipe.transform(this.courseListData, inputValue);
		}
	}
}
