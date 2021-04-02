import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICourseProperties } from '../course';

@Component({
	selector: 'app-search-add',
	templateUrl: './search-add.component.html',
	styleUrls: ['./search-add.component.scss']
})

export class SearchAddComponent {

	@Input() coursesCatalog!: ICourseProperties[];
	@Output() searchCourses = new EventEmitter<string>();

	public inputSearchCourses = '';

	searchingCourses(): void {
		console.log(`Input value \'${this.inputSearchCourses}\'`);
		this.searchCourses.emit(this.inputSearchCourses);
	}
}
