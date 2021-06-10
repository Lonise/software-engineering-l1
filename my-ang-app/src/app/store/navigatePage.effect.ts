import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CoursesHttpService } from '../http/courses-http.service';
import { CoursesActions } from './courses.action';

@Injectable()
export class NavigatePage {
	getCourses$ = createEffect(() =>
		this.action$.pipe(
			ofType(CoursesActions.goToPage),
			switchMap((page) =>
				this.coursesHttpService.getPathOfCourses(page.start, page.count).pipe(
					map( (data) => CoursesActions.getCoursesDataSuccess({ data })),
					catchError(() => EMPTY)
				)
			)
		)
	);

	constructor( private action$: Actions, private coursesHttpService: CoursesHttpService) {}
}
