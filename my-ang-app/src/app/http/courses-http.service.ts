import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../components/Interfaces-and-classes/course/course';
import { IServerResponse } from '../components/Interfaces-and-classes/server-response';



@Injectable()
export class CoursesHttpService {

	constructor( private httpClient: HttpClient ) { }
	private url = 'https://super-courses.herokuapp.com/courses/';

	public isLoading = false;

	public getCourses( url: string = this.url ): Observable<IServerResponse>{
		return this.httpClient.get<IServerResponse>( url );
	}

	public getPathOfCourses( start: number, count: number ): Observable<IServerResponse>{
		return this.httpClient.get<IServerResponse>( `${this.url}?start=${start}&count=${count}` );
	}

	public postCourse( course: Course ): Observable<Course[]>{
		return this.httpClient.post<Course[]>( this.url, course );
	}

	public putCourse( courseId: string, course: Course ): Observable<Course[]>{
		const changedCourse = new Course({...course, _id:undefined})
		return this.httpClient.put<Course[]>( this.url + courseId, changedCourse );
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
