import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ICourseProperties } from '../course';

@Component({
	selector: 'app-search-add',
	templateUrl: './search-add.component.html',
	styleUrls: ['./search-add.component.scss']
})

export class SearchAddComponent implements OnInit {

	@Input() coursesCatalog!: ICourseProperties[];
	@Output() searchCourses = new EventEmitter<string>();

	public inputSearchCourses = '';
	constructor() { }

	searchingCourses(): void {
		console.log(`Input value \'${this.inputSearchCourses}\'`);
		this.searchCourses.emit(this.inputSearchCourses);
	}

	ngOnInit(): void {
	}

}
