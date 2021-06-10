import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CoursesHttpService } from '../http/courses-http.service';
import { CoursesActions } from './courses.action';

@Injectable()
export class PutCourseEffects {
	putCourse$ = createEffect(() =>
		this.action$.pipe(
			ofType(CoursesActions.putCourse),
			switchMap((course) =>
				this.coursesHttpService.putCourse(course.id, course.course).pipe(
					map( () =>  CoursesActions.getCoursesData()),
					catchError(() => EMPTY)
				)
			)
		)
	);
	constructor( private action$: Actions, private coursesHttpService: CoursesHttpService) {}
}
