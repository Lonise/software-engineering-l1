import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesActions } from 'src/app/store/courses.action';
import { ExampleSelectors } from 'src/app/store/courses.selector';

import { Course } from '../../../Interfaces-and-classes/course/course';
import { CoursesListService } from '../courses-list.service';

@Component({
	selector: 'app-course-list-page',
	templateUrl: './course-list-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./course-list-page.component.scss']
})

export class CoursesListPageComponent {

	public courseStream$!: Observable<Course[]>;

	constructor( public coursesList: CoursesListService, private store: Store ) {

		this.courseStream$ = this.store.select(ExampleSelectors.courses);

		this.store.dispatch(CoursesActions.getCoursesData());
	}

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
		this.store.dispatch(CoursesActions.deleteCourse({courseId: this.currentDeletionCourseId}));
		this.isCourseListEmpty = this.coursesList.isCourseListDataEmpty;
	}
}
