import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course, ICourseProperties } from '../course';
import { CoursesListService } from '../courses-list.service';

@Component({
	selector: 'app-add-course-page',
	templateUrl: './add-course-page.component.html',
	styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {

	constructor( public coursesListService: CoursesListService, private route: ActivatedRoute ) {}

	public newCourse: Course = {
		id: 0,
		title: '',
		description: '',
		creationDate: new Date(),
		duration: 0,
		isTopRated: false,
	};
	private currentCourse!: string | Course;
	private isNewCourse: boolean = true;

	private checkCurrentRoute(id: string | undefined) {
		if( typeof id !== 'undefined' ) {
			this.currentCourse = this.coursesListService.getCourseById(+id);
			if( typeof this.currentCourse !== 'string') {
				this.isNewCourse = false;
				this.newCourse = this.currentCourse;
			}
		}
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.checkCurrentRoute(params.id)
		});
	}

	public createNewCourse(): void {
		if (this.isNewCourse) {
			this.coursesListService.addCourse(this.newCourse)
		} else {
			this.currentCourse = this.newCourse;
		}
		this.coursesListService.toggleAddNewCourse()
	}
}
