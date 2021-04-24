import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICourseProperties } from '../../course';
import { CoursesListService } from '../../courses-list.service';

@Component({
	selector: 'app-search-add',
	templateUrl: './search-add.component.html',
	styleUrls: ['./search-add.component.scss'],
})

export class SearchAddComponent {
	@Input() coursesCatalog!: ICourseProperties[];
	@Output() searchCourses = new EventEmitter<string>();
	@Output() toggleAddNewCourse = new EventEmitter<string>();

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

	public emitTextForSearching(): void {
		console.log(`Input value \'${this.inputSearchCourses}\'`);
		this.searchCourses.emit(this.inputSearchCourses);
	}

	public showAddCoursePage(): void {
		this.toggleAddNewCourse.emit();
	}
}
