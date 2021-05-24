import { Component } from '@angular/core';
import { Course } from 'src/app/components/Interfaces-and-classes/course/course';
import { CoursesStreamService } from 'src/app/http/courses-stream.service';
import { CoursesListService } from '../courses-list.service';

@Component({
	selector: 'app-courses-buffer',
	templateUrl: './courses-buffer.component.html',
	styleUrls: ['./courses-buffer.component.scss']
})
export class CoursesBufferComponent {

	constructor(
		public coursesStreamService: CoursesStreamService,
		public coursesList: CoursesListService ) { }

	public searchCourses(currentInput: string): void {
		this.coursesStreamService.Courses$.next(currentInput);
	}
	public openEditToCourse( course: Course ): void {
		this.coursesList.openEditCourse(course);
	}
	public toggleAddNewCourse(): void {
		this.coursesList.toggleAddNewCourse();
	}
}
