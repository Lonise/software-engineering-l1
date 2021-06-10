import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CoursesHttpService } from '../http/courses-http.service';
import { CoursesActions } from './courses.action';

@Injectable()
export class DeleteCourseEffects {
	deleteCourses$ = createEffect(() =>
		this.action$.pipe(
			ofType(CoursesActions.deleteCourse),
			switchMap((id) =>
				this.coursesHttpService.deleteCourse(id.courseId).pipe(
					map( () => CoursesActions.getCoursesData()),
					catchError(() => EMPTY)
				)
			)
		)
	);

	constructor( private action$: Actions, private coursesHttpService: CoursesHttpService) {}
}
