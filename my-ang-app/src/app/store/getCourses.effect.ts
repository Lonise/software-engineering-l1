import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { CoursesHttpService } from "../http/courses-http.service";
import { ExampleActions } from "./courses.action";

@Injectable()
export class GetCoursesEffect {
	getCourses$ = createEffect(() =>
		this.action$.pipe(
			ofType(ExampleActions.getCoursesData),
			switchMap(() =>
				this.coursesHttpService.getCourses().pipe(
					map( (data) => {
						return ExampleActions.getCoursesDataSuccess({ data: data })
					}),
					catchError(() => EMPTY)
				)
			)
		)
	);

	constructor( private action$: Actions, private coursesHttpService: CoursesHttpService) {}
}
