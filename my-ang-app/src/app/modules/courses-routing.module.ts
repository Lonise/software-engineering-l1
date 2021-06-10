import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCoursePageComponent } from '../components/main/courses-pages/add-course-page/add-course-page.component';
import { CoursesBufferComponent } from '../components/main/courses-pages/courses-buffer/courses-buffer.component';

const coursesRoutes: Routes = [
	{ path: '', component: CoursesBufferComponent },
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
