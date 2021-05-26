import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../components/Interfaces-and-classes/course/course';

@Injectable()
export class CoursesHttpService {

	constructor( private httpClient: HttpClient ) { }
	// private url = 'https://super-courses.herokuapp.com/courses/';
	private url = 'http://localhost:3000/courses/';

	public isLoading = false;

	public getCourses( url: string = this.url ): Observable<Course[]>{
		return this.httpClient.get<Course[]>( url );
	}

	public getPathOfCourses( start: number, count: number ): Observable<Course[]>{
		return this.httpClient.get<Course[]>( `${this.url}?page=${start}&size=${count}` );
	}

	public postCourse( course: Course ): Observable<Course[]>{
		return this.httpClient.post<Course[]>( this.url, course );
	}

	public putCourse( courseId: string, course: Course ): Observable<Course[]>{
		course._id = undefined;
		return this.httpClient.put<Course[]>( this.url + courseId, course );
	}

	public deleteCourse( courseId: string ): Observable<Course[]>{
		return this.httpClient.delete<Course[]>( this.url + courseId );
	}

	public show(): void {
		this.isLoading = true;
	}
	public hide(): void {
		this.isLoading = false;
	}
}
