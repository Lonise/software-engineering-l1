import { Component } from '@angular/core';

import { Course } from './course';
import { CoursesListService } from './courses-list.service';
import { FilterCoursesByInputPipe } from './search-add/filter-courses-by-input.pipe';

@Component({
	selector: 'app-courses-page',
	templateUrl: './courses-page.component.html',
	styleUrls: ['./courses-page.component.scss'],
	providers: [ CoursesListService, FilterCoursesByInputPipe ]
})

export class CoursesPageComponent {

	constructor( private coursesList: CoursesListService ) { }

	public coursesCatalog: Course[] = this.coursesList.getCourseList();
	public isCourseListEmpty: boolean = this.coursesList.isCourseListDataEmpty;
	public isDeleteCourseContainerVisible = false;
	private currentDeletionCourseId!: number | string;

	public showMoreCourses(): void {
		console.log('Load more');
	}

	public toggleConfirmModalToDeleteCourse( id?: number | string ): void {
		this.isDeleteCourseContainerVisible = !this.isDeleteCourseContainerVisible;

		if ( id ) {
			this.currentDeletionCourseId = id;
		}
	}

	public removeCourse(): void {
		this.isDeleteCourseContainerVisible = false;
		this.coursesList.removeCourse(this.currentDeletionCourseId);
		this.isCourseListEmpty = this.coursesList.isCourseListDataEmpty;
	}

	public searchCourses(currentInput: string): void {
			this.coursesCatalog = this.coursesList.getFilteredCourseList(currentInput);
	}
}
