import { Component, Input, OnInit } from '@angular/core';
import { CourseInterface } from '../course';

@Component({
	selector: 'app-course',
	templateUrl: './course.component.html',
	styleUrls: ['./course.component.scss']
})
export class CourseComponent {
	@Input() coursesCatalog: CourseInterface[] = [];
}
