import { Component, OnInit } from '@angular/core';

import { Course } from './course';
import { CoursesListService } from './courses-list.service';
import { FilterCoursesByInputPipe } from './search-add/filter-courses-by-input.pipe';

@Component({
	selector: 'app-courses-page',
	templateUrl: './courses-page.component.html',
	styleUrls: ['./courses-page.component.scss'],
	providers: [ CoursesListService, FilterCoursesByInputPipe ]
})

export class CoursesPageComponent implements OnInit{

	constructor( private coursesList: CoursesListService ) { }

	public coursesCatalog: Course[] = this.coursesList.getCourseList();
	public isCourseListEmpty: boolean = this.coursesList.isCourseListDataEmpty;

	ngOnInit(): void {
	}

	public showMoreCourses(): void {
		console.log('Load more');
	}

	public removeCourse( id: number | string ): void {
		this.coursesList.removeCourse(id);
		this.isCourseListEmpty = this.coursesList.isCourseListDataEmpty;
	}

	public searchCourses(currentInput: string): void {
			this.coursesCatalog = this.coursesList.getFilteredCourseList(currentInput);
	}
}
