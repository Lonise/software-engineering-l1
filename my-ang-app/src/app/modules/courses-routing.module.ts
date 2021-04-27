import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListPageComponent } from '../components/main/courses-pages/course-list-page/course-list-page.component';
import { AddCoursePageComponent } from '../components/main/courses-pages/add-course-page/add-course-page.component';

const coursesRoutes: Routes = [
	{ path: '', component: CoursesListPageComponent },
	{ path: 'new', component: AddCoursePageComponent },
	{ path: ':id', component: AddCoursePageComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(coursesRoutes)
	],
	exports: [RouterModule]
})
export class CoursesRoutingModule { }
