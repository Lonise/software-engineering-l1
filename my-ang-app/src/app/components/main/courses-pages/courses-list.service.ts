import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesHttpService } from 'src/app/http/courses-http.service';
import { CoursesStreamService } from 'src/app/http/courses-stream.service';
import { Course } from '../../Interfaces-and-classes/course/course';

@Injectable()

export class CoursesListService {

	constructor( private router: Router,
		private coursesHttpService: CoursesHttpService, private coursesStreamService: CoursesStreamService ) { }

	public courseListData: Course[] = []

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

	public addCourse(course: Course): void {
		course.creationDate = new Date(course.creationDate);
		this.coursesHttpService.postCourse(course).subscribe(
			val => {
				this.coursesStreamService.Courses$.next('#getAllCourses')
				this.router.navigate(['courses']);
			}
		)
	}

	public getActiveCourse(): Course | string {
		if ( typeof this.activeCourse !== 'undefined') {
			return this.activeCourse;
		} else {
			return 'incorrect id';
		}
	}

	public removeCourse( id: string ): void {
		if (this.courseListData.length -1 <= 0) {
			this.isCourseListDataEmpty = false;
		}
		this.coursesHttpService.deleteCourse(id).subscribe(
			val => {
				this.coursesStreamService.Courses$.next('#getAllCourses');
			}
		)
	}
}
