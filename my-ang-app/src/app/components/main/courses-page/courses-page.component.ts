import { Component, OnInit } from '@angular/core';
import { CourseInterface, Course } from './course';

const coursesExample: CourseInterface[] = [
	new Course( 1, 'HTML course', new Date(2021, 1, 28), 45, 'HTML course HTML course', true ),
	new Course( 2, 'CSS course', new Date(2021, 2, 15), 35, 'CSS course CSS course', false ),
	new Course( 3, 'JS course', new Date(2021, 2, 25), 25, 'JS course JS course', true ),
	new Course( 4, 'JSX course', new Date(2021, 4, 10), 30, 'JSX course JSX course', false ),
	new Course( 5, 'TS course', new Date(2021, 5, 20), 40, 'TS course TS course', true ),
];

@Component({
	selector: 'app-courses-page',
	templateUrl: './courses-page.component.html',
	styleUrls: ['./courses-page.component.scss']
})

export class CoursesPageComponent implements OnInit{
	public coursesCatalog: CourseInterface[] = coursesExample;
	public isCourseListEmpty: boolean = false;
	showMoreCourses(): void {
		console.log('Load more');
	}

	removeCourse( id: number | string ): void {
		coursesExample.forEach( (element, index) => {
			if ( element.id === id ) {
				coursesExample.splice(index, 1);
				return;
			}
		});
		if (coursesExample.length === 0) {
			this.isCourseListEmpty = true;
		};
	}

	constructor() { }

	ngOnInit(): void {
	}

}
