import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesActions } from 'src/app/store/courses.action';
import { CoursesSelectors } from 'src/app/store/courses.selector';

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
	public pageSize = 5;
	public pagesCount!: Observable<number[]>;
	public isCourseListEmpty!: boolean;
	public isDeleteCourseContainerVisible = false;
	public pagesNumbers!: number[];
	public currentPage!: number;
	private currentDeletionCourseId!: string;

	constructor( public coursesList: CoursesListService, private store: Store ) {
		this.courseStream$ = this.store.select(CoursesSelectors.courses);
		this.store.select(CoursesSelectors.currentPage).subscribe(v => this.currentPage = v);
		this.pagesCount = this.store.select(CoursesSelectors.pagesNumbers);

		this.courseStream$.subscribe(courses => this.isCourseListEmpty = courses ? courses.length === 0 : true);
		this.store.dispatch(CoursesActions.getCoursesData());
	}

	public goToPage(page: number) {
		const coursesStart = (page - 1) * this.pageSize;
		this.currentPage = page;
		this.store.dispatch(CoursesActions.goToPage({start: coursesStart, count: this.pageSize}));
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
	}
}
