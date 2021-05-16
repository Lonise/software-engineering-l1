import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../../Interfaces-and-classes/course/course';
import { FilterCoursesByInputPipe } from './course-list-page/search-add/filter-courses-by-input.pipe';

@Injectable()

export class CoursesListService {

	constructor( private filterCoursesByInputPipe: FilterCoursesByInputPipe, private router: Router ) { }

	public courseListData: any

	public activeCourse: Course | undefined;
	public isCourseListVisible = true;
	public isAddCourseVisible = false;
	public isCourseListDataEmpty = false;

	public getCourseListLength(): number {
		return this.courseListData.length;
	}

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
		this.courseListData.push(course);
		this.isCourseListDataEmpty = false;
	}

	public getCourseById(courseId: string): Course | string {
		for (let i = 0; i < this.courseListData.length; i++) {
			if ( this.courseListData[i].id === courseId ) {
				return this.courseListData[i];
			}
		}
		return 'incorrect id';
	}

	public removeCourse( id: string ): void {
		if(Array.isArray( this.courseListData)) {
			this.courseListData.forEach( (element, index) => {
				if ( element.id === id ) {
					this.courseListData.splice(index, 1);
				}
			});
		}
		if (this.courseListData.length === 0) {
			this.isCourseListDataEmpty = true;
		}
	}

	public getCourseList(): Course[] {
		return this.courseListData;
	}

	public getFilteredCourseList(inputValue: string): Course[] {
		if ( inputValue.trim() === '' ) {
			return this.getCourseList();
		} else {
			return this.filterCoursesByInputPipe.transform(this.courseListData, inputValue);
		}
	}
}
