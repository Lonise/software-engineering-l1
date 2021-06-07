import { Component } from '@angular/core';
import { Course } from 'src/app/components/Interfaces-and-classes/course/course';
import { CoursesListService } from '../courses-list.service';

@Component({
	selector: 'app-courses-buffer',
	templateUrl: './courses-buffer.component.html',
	styleUrls: ['./courses-buffer.component.scss']
})
export class CoursesBufferComponent {

	constructor( public coursesList: CoursesListService ) { }

	public openEditToCourse( course: Course ): void {
		this.coursesList.openEditCourse(course);
	}
	public toggleAddNewCourse(): void {
		this.coursesList.toggleAddNewCourse();
	}
}
