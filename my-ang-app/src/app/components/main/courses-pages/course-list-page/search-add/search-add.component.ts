import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoursesActions } from 'src/app/store/courses.action';

@Component({
	selector: 'app-search-add',
	templateUrl: './search-add.component.html',
	styleUrls: ['./search-add.component.scss'],
})

export class SearchAddComponent {
	@Output() toggleAddNewCourse = new EventEmitter<string>();

	constructor( private store: Store ) {}
	public inputSearchCourses = '';
	public newCourseFormVisible = false;

	public inputSearching(): void {
		this.store.dispatch(CoursesActions.searchCourses({ userInput:this.inputSearchCourses }));
	}

	public showAddCoursePage(): void {
		this.toggleAddNewCourse.emit();
	}
}
