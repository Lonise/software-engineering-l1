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

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		MainComponent,
		CoursesPageComponent,
		CourseComponent,
		SearchAddComponent,
		BreadcrumbsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
