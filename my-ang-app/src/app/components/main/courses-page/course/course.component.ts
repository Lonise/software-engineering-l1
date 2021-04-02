import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

import { Course } from '../course';

@Component({
	selector: 'app-course',
	templateUrl: './course.component.html',
	styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnDestroy{

	@Input() course!: Course;
	@Output() deletedCourse = new EventEmitter<number|string>();

	public deleteCourse(id: number | string): void {
		this.deletedCourse.emit(id);
	}

	ngOnDestroy(): void {
		console.log('Removed course id ' + this.course.id);
	}
}
