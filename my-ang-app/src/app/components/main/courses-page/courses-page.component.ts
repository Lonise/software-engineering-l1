import { Component, OnInit } from '@angular/core';
import { CourseInterface, Course } from './course';

const coursesExample: CourseInterface[] = [
	new Course( 1, 'HTML course', new Date(2020, 1, 28), 45, 'HTML course HTML course' ),
	new Course( 2, 'CSS course', new Date(2020, 2, 10), 35, 'CSS course CSS course' ),
	new Course( 3, 'JS course', new Date(2020, 3, 13), 25, 'JS course JS course' ),
];

@Component({
	selector: 'app-courses-page',
	templateUrl: './courses-page.component.html',
	styleUrls: ['./courses-page.component.scss']
})

export class CoursesPageComponent implements OnInit{
	public coursesCatalog: CourseInterface[] = coursesExample;

	constructor() { }

	ngOnInit(): void {
	}

}
