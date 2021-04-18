import { Component, EventEmitter, Output } from '@angular/core';
import { ICourseProperties } from '../course';

@Component({
	selector: 'app-add-course-page',
	templateUrl: './add-course-page.component.html',
	styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent {

	@Output() toggleAddNewCourse = new EventEmitter<string>();

	public newCourse: ICourseProperties = {
		id: 0,
		title: '',
		description: '',
		creationDate: new Date(),
		duration: 0,
		isTopRated: false,
	};

	public createNewCourse(): void {
		console.log(this.newCourse);
	}

	public closeNewCourseForm(): void {
		this.toggleAddNewCourse.emit();
	}
}
