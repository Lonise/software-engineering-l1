import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CourseInterface } from '../course';

@Component({
	selector: 'app-course',
	templateUrl: './course.component.html',
	styleUrls: ['./course.component.scss']
})
export class CourseComponent {
	@Input() coursesCatalog: CourseInterface[] = [];
	@Output() deletedCourse = new EventEmitter<number|string>();

	deleteCourse(id: number | string): void {
		this.deletedCourse.emit(id)
	}
}
