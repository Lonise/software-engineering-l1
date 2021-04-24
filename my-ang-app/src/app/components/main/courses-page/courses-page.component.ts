import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from './course';
import { CoursesListService } from './courses-list.service';
import { FilterCoursesByInputPipe } from './search-add/filter-courses-by-input.pipe';

@Component({
	selector: 'app-courses-page',
	templateUrl: './courses-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./courses-page.component.scss'],
	providers: [ CoursesListService, FilterCoursesByInputPipe ]
})

export class CoursesPageComponent {

	constructor( public coursesList: CoursesListService, private router: Router ) { }

	public coursesCatalog: Course[] = this.coursesList.getCourseList();
	public isCourseListEmpty: boolean = this.coursesList.isCourseListDataEmpty;
	public isDeleteCourseContainerVisible = false;
	private currentDeletionCourseId!: number;

	public showMoreCourses(): void {
		console.log('Load more');
	}

	public toggleConfirmModalToDeleteCourse( id?: number ): void {
		this.isDeleteCourseContainerVisible = !this.isDeleteCourseContainerVisible;

		if ( id ) {
			this.currentDeletionCourseId = id;
		}
	}

	public openEditToCourse( id: number ): void {
		console.log('open edit to course', id);
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
