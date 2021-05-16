import { Component, Input, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { Course } from '../../../Interfaces-and-classes/course/course';

@Component({
	selector: 'app-course',
	templateUrl: './course.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./course.component.scss'],
})

export class CourseComponent implements OnDestroy {
constructor () {}
	@Input() course!: Course;
	@Output() deletedCourse = new EventEmitter<string>();
	@Output() editToCourse = new EventEmitter<Course>();

	public deleteCourse(id: string): void {
		this.deletedCourse.emit(id);
	}

	public editCourse(course: Course): void {
		this.editToCourse.emit(course);
	}

	ngOnDestroy(): void {
		console.log('Removed course id ' + this.course.id);
	}
}
