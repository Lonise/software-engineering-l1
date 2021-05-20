import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-search-add',
	templateUrl: './search-add.component.html',
	styleUrls: ['./search-add.component.scss'],
})

export class SearchAddComponent {
	@Output() searchCourses = new EventEmitter<string>();
	@Output() toggleAddNewCourse = new EventEmitter<string>();

	public inputSearchCourses = '';
	public newCourseFormVisible = false;

	public emitTextForSearching(): void {
		console.log(`Input value \'${this.inputSearchCourses}\'`);
		this.searchCourses.emit(this.inputSearchCourses);
	}

	public showAddCoursePage(): void {
		this.toggleAddNewCourse.emit();
	}
}
