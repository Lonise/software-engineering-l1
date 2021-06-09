import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Course } from '../../../Interfaces-and-classes/course/course';
import { CoursesListService } from '../courses-list.service';
import { DateValidator } from './input-date/date-validator';
import { DurationValidator } from './input-duration/duration-validator';
import { AuthorsHttpService } from 'src/app/http/authors-http.service';
import { IAuthorProperties } from 'src/app/components/Interfaces-and-classes/author/author';
import { CoursesActions } from 'src/app/store/courses.action';
import { activeCourseType } from 'src/app/store/courses.reducer';
import { CoursesSelectors } from 'src/app/store/courses.selector';

@Component({
	selector: 'app-add-course-page',
	templateUrl: './add-course-page.component.html',
	styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {

	public courseControl!: FormGroup;
	public dateControl!: FormControl;
	public durationControl!: FormControl;
	public authorsInputControl!: FormControl;
	public authorsControl!: FormArray;
	public authorsArray: IAuthorProperties[] = [];

	private currentCourse: activeCourseType;
	private isNewCourse = true;
	private authorsFromBackEnd = this.authorsHttpService.getAuthors();

	constructor(
		private store: Store,
		public coursesListService: CoursesListService,
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private authorsHttpService: AuthorsHttpService
		) {

			this.store.select(CoursesSelectors.activeCourse).subscribe(activeCourse => {
				this.currentCourse = activeCourse;
			})


			this.courseControl = this.formBuilder.group({
				_id: [''],
				id: [''],
				title: ['', [
					Validators.required,
					Validators.maxLength(50)
				]],
				description: ['', [
					Validators.required,
					Validators.maxLength(500)
				]],
				creationDate: ['', [Validators.required, DateValidator()]],
				duration: ['', [Validators.required, DurationValidator()]],
				authors: this.formBuilder.array([], [Validators.required]),
				isTopRated: [false],
			});

			this.dateControl = this.courseControl.controls.creationDate as FormControl;
			this.durationControl = this.courseControl.controls.duration as FormControl;
			this.authorsControl = this.courseControl.controls.authors as FormArray;

			this.authorsFromBackEnd.subscribe( value => {
					value.forEach(author => {
						this.authorsArray.push(author);
					});
				});
		}

		ngOnInit(): void {
			this.route.params.subscribe(params => {
				this.checkCurrentRoute(params.id);
			});
		}

		get _title() {
			return this.courseControl.get('title');
		}
		get _description() {
			return this.courseControl.get('description');
		}
		get _date() {
			return this.courseControl.get('creationDate');
		}
		get _duration() {
			return this.courseControl.get('duration');
		}
		get _authors() {
			return this.courseControl.get('authors');
		}
		get _isTopRated() {
			return this.courseControl.get('isTopRated');
		}

	private checkCurrentRoute(id: string | undefined): void {
		this.coursesListService.isCourseListVisible = false;

		if ( typeof this.currentCourse !== 'undefined' ) {

			if ( typeof this.currentCourse !== 'string') {

				this.isNewCourse = false;
				this.courseControl.controls.id.setValue(this.currentCourse.id);
				this.courseControl.controls.title.setValue(this.currentCourse.title);
				this.courseControl.controls.description.setValue(this.currentCourse.description);
				this.courseControl.controls.creationDate.setValue(this.currentCourse.creationDate);
				this.courseControl.controls.duration.setValue(this.currentCourse.duration);
				this.courseControl.controls.isTopRated.setValue(this.currentCourse.isTopRated);
				this.currentCourse.authors.forEach(author => {
					(this.courseControl.controls.authors as FormArray ).controls.push(new FormControl(author));
				});
			}
		}
	}

	public closeAddCoursePage() {
		this.store.dispatch(CoursesActions.deactivateCourse());
		this.coursesListService.toggleAddNewCourse();
	}

	public createNewCourse(): void {
		if (this.isNewCourse) {
			this.store.dispatch(CoursesActions.addNewCourse({course: new Course(this.courseControl.value)}));
		} else {
			this.store.dispatch(CoursesActions.putCourse({course: this.courseControl.value, id: this.courseControl.value.id}));
		}
		this.closeAddCoursePage();
	}
}
