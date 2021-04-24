import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course, ICourseProperties } from '../course';
import { CoursesListService } from '../courses-list.service';

@Component({
	selector: 'app-add-course-page',
	templateUrl: './add-course-page.component.html',
	styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent {

	constructor( public coursesListService: CoursesListService) {}

	// @Input() currentEditCourse?: Course;


	public newCourse: ICourseProperties = {
		id: 0,
		title: '',
		description: '',
		creationDate: new Date(),
		duration: 0,
		isTopRated: false,
	};
	// public currentCourse = this.currentEditCourse ? this.currentEditCourse : this.newCourse;

	public createNewCourse(): void {
		console.log(this.newCourse);
	}

	// public closeNewCourseForm(): void {
	// 	this.toggleAddNewCourse.emit();
	// }
}
