import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { EMPTY } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, map, mergeMap, switchMap } from "rxjs/operators";
import { CoursesHttpService } from "../http/courses-http.service";
import { CoursesActions } from "./courses.action";

@Injectable()
export class SearchEffects {
	private url = 'https://super-courses.herokuapp.com/courses?search='
	searchCourses$ = createEffect(() =>
		this.action$.pipe(
			debounceTime(1000),
			ofType(CoursesActions.searchCourses),
			switchMap((action) =>
			this.coursesHttpService.getCourses(this.url + action.userInput).pipe(
					map( (data) => CoursesActions.getCoursesDataSuccess({ data: data })),
					catchError(() => EMPTY)
				)
			)
		)
	);

	constructor( private action$: Actions, private coursesHttpService: CoursesHttpService) {}
}
