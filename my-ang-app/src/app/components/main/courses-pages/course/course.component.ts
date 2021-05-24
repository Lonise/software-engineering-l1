import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { Course } from '../../../Interfaces-and-classes/course/course';

@Component({
	selector: 'app-course',
	templateUrl: './course.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./course.component.scss'],
})

export class CourseComponent implements OnInit {

	@Input() course!: Course;
	@Output() deletedCourse = new EventEmitter<string>();
	@Output() editToCourse = new EventEmitter<Course>();

	ngOnInit(): void {
		this.course.creationDate = new Date(this.course.creationDate);
	}

	public deleteCourse(id: string): void {
		this.deletedCourse.emit(id);
	}

	public editCourse(course: Course): void {
		this.editToCourse.emit(course);
	}
}
