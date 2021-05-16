import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../../../Interfaces-and-classes/course/course';
import { CoursesListService } from '../courses-list.service';

@Component({
	selector: 'app-course-list-page',
	templateUrl: './course-list-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./course-list-page.component.scss']
})

export class CoursesListPageComponent {

	constructor( public coursesList: CoursesListService ) { }

	public coursesCatalog: Course[] = this.coursesList.getCourseList();
	public isCourseListEmpty: boolean = this.coursesList.isCourseListDataEmpty;
	public isDeleteCourseContainerVisible = false;
	private currentDeletionCourseId!: string;

	public showMoreCourses(): void {
		console.log('Load more');
	}

	public toggleConfirmModalToDeleteCourse( id?: string ): void {
		this.isDeleteCourseContainerVisible = !this.isDeleteCourseContainerVisible;

		if ( id ) {
			this.currentDeletionCourseId = id;
		}
	}

	public openEditToCourse( course: Course ): void {
		this.coursesList.openEditCourse(course);
	}

	public removeCourse(): void {
		this.isDeleteCourseContainerVisible = false;
		this.coursesList.removeCourse(this.currentDeletionCourseId);
		this.isCourseListEmpty = this.coursesList.isCourseListDataEmpty;
	}

	public searchCourses(currentInput: string): void {
			this.coursesCatalog = this.coursesList.getFilteredCourseList(currentInput);
	}

	public toggleAddNewCourse(): void {
		this.coursesList.toggleAddNewCourse();
	}
}
