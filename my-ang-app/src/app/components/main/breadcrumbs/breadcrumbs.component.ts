import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoursesSelectors } from 'src/app/store/courses.selector';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

	constructor( private router: Router, private store: Store ) {
		this.store.select(CoursesSelectors.activeCourse).subscribe(activeCourse => {
			if (typeof activeCourse === 'object') {
				this.activeCourseTitle =  activeCourse.title;
			} else {
				this.activeCourseTitle =  undefined;
			}
		})
	}
	private activeCourseTitle: string | undefined;
	public breadcrumbsPath!: string | string[];

	public updateBreadcrumbsPath(event: Event): void {

		if (event instanceof NavigationEnd) {
			this.breadcrumbsPath = event.urlAfterRedirects.slice(1).split('/');
			if ( this.activeCourseTitle ) {
				this.breadcrumbsPath[this.breadcrumbsPath.length - 1] = this.activeCourseTitle;
			}
			this.breadcrumbsPath = this.breadcrumbsPath.join(' > ').toUpperCase();
		}
	}

	ngOnInit(): void {
		this.router.events.subscribe(event => this.updateBreadcrumbsPath(event));
	}

}
