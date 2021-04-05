import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICourseProperties } from '../course';
import { CoursesListService } from '../courses-list.service';

@Component({
	selector: 'app-search-add',
	templateUrl: './search-add.component.html',
	styleUrls: ['./search-add.component.scss'],
	providers: [ CoursesListService ],
})

export class SearchAddComponent {
	@Input() coursesCatalog!: ICourseProperties[];
	@Output() searchCourses = new EventEmitter<string>();

	constructor( private coursesListService: CoursesListService ) {}

	public inputSearchCourses = '';
	public newCourseFormVisible = false;

	public newCourse: ICourseProperties = {
		id: 10,
		title: '',
		creationDate: new Date(),
		duration: 0,
		description: '',
		isTopRated: false,
	};

	searchingCourses(): void {
		console.log(`Input value \'${this.inputSearchCourses}\'`);
		this.searchCourses.emit(this.inputSearchCourses);
	};

	toggleNewCourseForm(): void {
		this.newCourseFormVisible = !this.newCourseFormVisible;
	};

	createNewCourse(): void {
		this.coursesListService.addCourse(this.newCourse)
		this.toggleNewCourseForm();
	}
}
