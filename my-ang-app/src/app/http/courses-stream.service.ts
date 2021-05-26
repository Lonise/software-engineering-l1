import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Course } from '../components/Interfaces-and-classes/course/course';
import { CoursesHttpService } from './courses-http.service';

@Injectable()
export class CoursesStreamService {

	// private BaseUrl = 'https://super-courses.herokuapp.com/courses';
	private BaseUrl = 'http://localhost:3000/courses';

	private coursesSearchUrl = `search=`;

	public cC$: Course[] | undefined;
	public Courses$: Subject<string> = new BehaviorSubject('');

	constructor( private coursesHttpService: CoursesHttpService ) {

		this.Courses$.pipe(
			debounceTime(1000),
			distinctUntilChanged((prev, curr) => curr === '#getAllCourses' ? false : prev === curr),
			switchMap( v => v.trim() === '' ?
				this.coursesHttpService.getCourses() :
				this.coursesHttpService.getCourses(`${this.BaseUrl}?${this.coursesSearchUrl}${v}`))
		).subscribe(
			val => this.cC$ = val
		);
	}
}
