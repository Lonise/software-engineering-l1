import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-search-add',
	templateUrl: './search-add.component.html',
	styleUrls: ['./search-add.component.scss']
})
export class SearchAddComponent implements OnInit {

	public inputSearchCourses:string = '';
	searchingCourses():void {
		console.log(`Input value \'${this.inputSearchCourses}\'`);
	}
	constructor() { }

	ngOnInit(): void {
	}

}
