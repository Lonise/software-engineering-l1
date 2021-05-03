import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, throwError } from 'rxjs';
import { catchError, multicast, retry } from 'rxjs/operators';
import { Course } from './components/main/courses-pages/course';

@Injectable()
export class HttpService {

	constructor( private http: HttpClient) {}

	private BackEndUrl = 'https://super-courses.herokuapp.com/courses/';

	private exampleCourseList: any;

	private activeCourse!: object | string;

	private coursesDataFromBackEnd: object | undefined;

	public GETCourseList(): void {
		this.http.get(this.BackEndUrl).pipe(retry(3)).subscribe(
			(courseList) => {
				this.coursesDataFromBackEnd = courseList;
				console.log(this.coursesDataFromBackEnd);
			},
			(err) => console.log('GET error :', err)
		)
	}

	public GETCourseById(courseId: number): void {
		this.http.get(this.BackEndUrl + courseId).pipe(retry(3)).subscribe(
			(v) => {
				console.log('GET by id ', v);
				this.activeCourse = v;
			},
			(err) => {
				console.log('GET by id Error', err);
				this.activeCourse = 'incorrect id';
			}
		)
	}

	public POSTAddNewCourse(course: Course):void {
		this.http.post(this.BackEndUrl, course).pipe(retry(3)).subscribe(
			v => console.log('POST new course : ', v),
			err => console.log('POST error : ', err)
		)
	}

	public PUTEditCourse(course: Course) {
		this.http.put(this.BackEndUrl + course.id, course).pipe(retry(3)).subscribe(
			v => console.log('PUT : ', v),
			err => console.log('PUT error : ', err)
		)
	}

	public DELETECourseById(courseId: number): void {
		this.http.delete(this.BackEndUrl + courseId)
		.pipe(retry(3))
		.subscribe(
			(v) => console.log('course del: ', v),
			(err) => console.log('DELETE error :', err)
		)
	}


}
