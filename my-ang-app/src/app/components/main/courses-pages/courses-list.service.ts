import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../../Interfaces-and-classes/course/course';

@Injectable()

export class CoursesListService {

	constructor( private router: Router ) { }

	public courseListData: Course[] = [];

	public activeCourse: Course | undefined;
	public isCourseListVisible = true;
	public isAddCourseVisible = false;
	public isCourseListDataEmpty = false;

	public toggleAddNewCourse(): void {
		this.activeCourse = undefined;
		this.isCourseListVisible = !this.isCourseListVisible;
		this.isAddCourseVisible = !this.isAddCourseVisible;

		if (this.isCourseListVisible) {
			this.router.navigate(['courses']);
		} else {
			this.router.navigate(['courses/new']);
		}
	}

	public openEditCourse(course: Course): void {
		this.activeCourse = course;
		this.router.navigate(['courses', `${course.id}`]);
	}

	public getIsEmptyCourseList(): boolean {
		this.isCourseListDataEmpty = !this.courseListData.length;
		return this.isCourseListDataEmpty;
	}

	public getActiveCourse(): Course | string {
		if ( typeof this.activeCourse !== 'undefined') {
			return this.activeCourse;
		} else {
			return 'incorrect id';
		}
	}
}
