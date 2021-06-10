import { Component } from '@angular/core';
import { CoursesListService } from '../courses-list.service';

@Component({
	selector: 'app-courses-buffer',
	templateUrl: './courses-buffer.component.html',
	styleUrls: ['./courses-buffer.component.scss']
})
export class CoursesBufferComponent {

	constructor( public coursesList: CoursesListService ) { }
	public toggleAddNewCourse(): void {
		this.coursesList.toggleAddNewCourse();
	}
}
