import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoursesActions } from 'src/app/store/courses.action';

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

	constructor( private store: Store ) {}

	public deleteCourse(id: string): void {
		this.deletedCourse.emit(id);
	}

	public editCourse(course: Course): void {
		this.store.dispatch(CoursesActions.activateCourse({activeCourse: course}));
		this.editToCourse.emit(course);
	}
}
