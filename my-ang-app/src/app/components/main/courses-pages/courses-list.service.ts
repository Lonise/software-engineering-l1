import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../../Interfaces-and-classes/course/course';

@Injectable()

export class CoursesListService {

	constructor( private router: Router ) { }

	public isCourseListVisible = true;

	public toggleAddNewCourse(): void {
		this.isCourseListVisible = !this.isCourseListVisible;
		if (this.isCourseListVisible) {
			this.router.navigate(['courses']);
		} else {
			this.router.navigate(['courses/new']);
		}
	}

	public openEditCourse(course: Course): void {
		this.router.navigate(['courses', `${course.id}`]);
	}
}
