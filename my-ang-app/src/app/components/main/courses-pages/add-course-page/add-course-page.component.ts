import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CoursesHttpService } from 'src/app/http/courses-http.service';
import { Course, ICourseProperties } from '../../../Interfaces-and-classes/course/course';
import { CoursesListService } from '../courses-list.service';
import { DateValidator } from './input-date/date-validator';
import { DurationValidator } from './input-duration/duration-validator';

@Component({
	selector: 'app-add-course-page',
	templateUrl: './add-course-page.component.html',
	styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {

	public courseControl!: FormGroup;
	public dateControl!: FormControl;
	public durationControl!: FormControl;

	constructor(
		public coursesListService: CoursesListService,
		private route: ActivatedRoute,
		private coursesHttpService: CoursesHttpService,
		private formBuilder: FormBuilder
		) {

			this.courseControl = this.formBuilder.group({
				title: ['',[
					Validators.required,
					Validators.maxLength(50)
				]],
				description: ['',[
					Validators.required,
					Validators.maxLength(500)
				]],
				authors: ['',[
					Validators.required,
					Validators.minLength(5)
				]]
			 })

			 this.dateControl = new FormControl('', [Validators.required, DateValidator()]);
			 this.durationControl = new FormControl('', [Validators.required, DurationValidator()]);
		}

		ngOnInit(): void {
			this.route.params.subscribe(params => {
				this.checkCurrentRoute(params.id);
			});

			this.durationControl.valueChanges.subscribe( duration => {
				this.newCourse.duration = duration;
			});
		}

		get _title() {
			return this.courseControl.get('title')
		}
		get _description() {
			return this.courseControl.get('description')
		}
		get _date() {
			return this.dateControl
		}
		get _duration() {
			return this.durationControl
		}
		get _authors() {
			return this.courseControl.get('authors')
		}


	public newCourse: ICourseProperties = {
		id: '',
		title: '',
		description: '',
		creationDate: new Date(),
		duration: 0,
		isTopRated: false,
	};
	private currentCourse!: string | Course;
	private isNewCourse = true;

	private checkCurrentRoute(id: string | undefined): void {
		this.coursesListService.isAddCourseVisible = true;
		this.coursesListService.isCourseListVisible = false;

		if ( typeof id !== 'undefined' ) {
			this.currentCourse = this.coursesListService.getActiveCourse();
			if ( typeof this.currentCourse !== 'string') {
				this.isNewCourse = false;
				this.newCourse = this.currentCourse;
			}
		}
	}



	public createNewCourse(): void {
		if (this.isNewCourse) {
			this.coursesListService.addCourse(new Course(this.newCourse));
			this.coursesListService.toggleAddNewCourse();
		} else {
			this.newCourse.creationDate = new Date(this.newCourse.creationDate);
			this.coursesHttpService.putCourse(this.newCourse.id, this.newCourse).subscribe(
				val => {
					this.coursesListService.toggleAddNewCourse();
				}
			);
		}
	}
}
