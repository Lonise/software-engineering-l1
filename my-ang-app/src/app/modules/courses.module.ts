import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoursesListPageComponent } from '../components/main/courses-pages/course-list-page/course-list-page.component';
import { CourseComponent } from '../components/main/courses-pages/course/course.component';
import { SearchAddComponent } from '../components/main/courses-pages/course-list-page/search-add/search-add.component';
import { DurationCoursePipe } from '../components/main/courses-pages/course/duration-course.pipe';
import { OrderByCreationDatePipe } from '../components/main/courses-pages/course-list-page/order-by-creation-date.pipe';
import { CourseDirective } from '../components/main/courses-pages/course/coming-courses.directive';
import { FilterCoursesByInputPipe } from '../components/main/courses-pages/course-list-page/search-add/filter-courses-by-input.pipe';
import { AddCoursePageComponent } from '../components/main/courses-pages/add-course-page/add-course-page.component';
import { CoursesPagesComponent } from '../components/main/courses-pages/courses-pages.component';
import { AuthGuard } from '../auth-guard';
import { CoursesHttpService } from '../http/courses-http.service';
import { CoursesBufferComponent } from '../components/main/courses-pages/courses-buffer/courses-buffer.component';
import { CoursesStreamService } from '../http/courses-stream.service';
import { InputDateComponent } from '../components/main/courses-pages/add-course-page/input-date/input-date.component';
import { DateValidatorDirective } from '../components/main/courses-pages/add-course-page/input-date/date-validator.directive';

@NgModule({
	declarations: [
		CoursesBufferComponent,
		CoursesPagesComponent,
		CoursesListPageComponent,
		CourseComponent,
		CourseDirective,
		SearchAddComponent,
		DurationCoursePipe,
		OrderByCreationDatePipe,
		FilterCoursesByInputPipe,
		AddCoursePageComponent,
		InputDateComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [CoursesPagesComponent],
	providers: [ FilterCoursesByInputPipe, AuthGuard, CoursesHttpService, CoursesStreamService, DateValidatorDirective ],
})
export class CoursesModule { }
