import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCoursePageComponent } from './components/main/courses-pages/add-course-page/add-course-page.component';
import { CoursesListPageComponent } from './components/main/courses-pages/course-list-page/course-list-page.component';
import { NotFoundPageComponent } from './components/main/not-found-page/not-found-page.component';

const routes: Routes = [
	// { path: '', redirectTo: 'courses', pathMatch:'full' },
	{ path: 'courses', component: CoursesListPageComponent },
	{ path: 'courses/new', component: AddCoursePageComponent },
	{ path: 'courses/:id', component: AddCoursePageComponent},
//	{ path: '**', component: NotFoundPageComponent },
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
