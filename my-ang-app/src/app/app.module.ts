import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { CoursesPageComponent } from './components/main/courses-page/courses-page.component';
import { CourseComponent } from './components/main/courses-page/course/course.component';
import { SearchAddComponent } from './components/main/courses-page/search-add/search-add.component';
import { BreadcrumbsComponent } from './components/main/breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { CourseDirective } from './components/main/courses-page/course/course.directive';
import { DurationCoursePipe } from './components/main/courses-page/course/duration-course.pipe';
import { OrderByCreationDatePipe } from './components/main/courses-page/order-by-creation-date.pipe';
import { FilterCoursesByInputPipe } from './components/main/courses-page/search-add/filter-courses-by-input.pipe';
import { ValidationDirective } from './components/authorization/validation.directive';
import { AuthorizationErrorComponent } from './components/authorization/authorization-error/authorization-error.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AuthorizationService } from './components/authorization/authorization.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		MainComponent,
		CoursesPageComponent,
		CourseComponent,
		SearchAddComponent,
		BreadcrumbsComponent,
		CourseDirective,
		DurationCoursePipe,
		OrderByCreationDatePipe,
		FilterCoursesByInputPipe,
		ValidationDirective,
		AuthorizationErrorComponent,
		AuthorizationComponent
	],
	entryComponents: [AuthorizationComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [ AuthorizationService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
