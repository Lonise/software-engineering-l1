import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from './course';
import { FilterCoursesByInputPipe } from './course-list-page/search-add/filter-courses-by-input.pipe';

@Injectable()

export class CoursesListService {

	constructor( private filterCoursesByInputPipe: FilterCoursesByInputPipe, private router: Router ) { }

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

	public getCourseById(courseId: number): Course | string {
		for (let i = 0; i < this.courseListData.length; i++) {
			if ( this.courseListData[i].id === courseId ) {
				return this.courseListData[i];
			}
		}
		return 'incorrect id';
	}

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
