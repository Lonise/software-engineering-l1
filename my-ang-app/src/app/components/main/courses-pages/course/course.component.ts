import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Course } from '../../../Interfaces-and-classes/course/course';

@Component({
	selector: 'app-course',
	templateUrl: './course.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./course.component.scss'],
})

export class CourseComponent {

	@Input() course!: Course;
	@Output() deletedCourse = new EventEmitter<string>();
	@Output() editToCourse = new EventEmitter<Course>();

	public deleteCourse(id: string): void {
		this.deletedCourse.emit(id);
	}

	public editCourse(course: Course): void {
		this.editToCourse.emit(course);
	}
}
