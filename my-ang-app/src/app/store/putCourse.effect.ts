import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { CoursesHttpService } from "../http/courses-http.service";
import { ExampleActions } from "./courses.action";

@Injectable()
export class PutCourseEffects {
	putCourse$ = createEffect(() =>
		this.action$.pipe(
			ofType(ExampleActions.putCourse),
			switchMap((course) =>
				this.coursesHttpService.putCourse(course.id, course.course).pipe(
					map( () => {
						return ExampleActions.getCoursesData()
					}),
					catchError(() => EMPTY)
				)
			)
		)
	);
	constructor( private action$: Actions, private coursesHttpService: CoursesHttpService) {}
}
