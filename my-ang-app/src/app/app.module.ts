import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { CoursesListPageComponent } from './components/main/courses-pages/course-list-page/course-list-page.component';
import { CourseComponent } from './components/main/courses-pages/course/course.component';
import { SearchAddComponent } from './components/main/courses-pages/course-list-page/search-add/search-add.component';
import { BreadcrumbsComponent } from './components/main/breadcrumbs/breadcrumbs.component';
import { CourseDirective } from './components/main/courses-pages/course/coming-courses.directive';
import { DurationCoursePipe } from './components/main/courses-pages/course/duration-course.pipe';
import { OrderByCreationDatePipe } from './components/main/courses-pages/course-list-page/order-by-creation-date.pipe';
import { FilterCoursesByInputPipe } from './components/main/courses-pages/course-list-page/search-add/filter-courses-by-input.pipe';
import { ValidationDirective } from './components/authorization/validation.directive';
import { AuthorizationErrorComponent } from './components/authorization/authorization-error/authorization-error.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AuthorizationService } from './components/authorization/authorization.service';
import { AddCoursePageComponent } from './components/main/courses-pages/add-course-page/add-course-page.component';
import { NotFoundPageComponent } from './components/main/not-found-page/not-found-page.component';
import { CoursesPagesComponent } from './components/main/courses-pages/courses-pages.component';
import { CoursesListService } from './components/main/courses-pages/courses-list.service';
import { AuthGuard } from './auth-guard';
import { CoursesModule } from './modules/courses.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		MainComponent,
		BreadcrumbsComponent,
		ValidationDirective,
		AuthorizationErrorComponent,
		AuthorizationComponent,
		NotFoundPageComponent,
	],
	entryComponents: [AuthorizationComponent],
	imports: [
		CoursesModule,
		BrowserModule,
		FormsModule
	],
	providers: [ AuthorizationService, CoursesListService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
