import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { CoursesListService } from '../courses-pages/courses-list.service';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

	constructor( private router: Router, private coursesListService: CoursesListService ) {}
	public breadcrumbsPath!: string | string[];

	public updateBreadcrumbsPath(event: Event): void {

		if (event instanceof NavigationEnd) {
			this.breadcrumbsPath = event.urlAfterRedirects.slice(1).split('/');

			if ( this.coursesListService.activeCourse ) {
				this.breadcrumbsPath[this.breadcrumbsPath.length - 1] = this.coursesListService.activeCourse.title;
			}
			this.breadcrumbsPath = this.breadcrumbsPath.join(' > ').toUpperCase();
		}
	}

	ngOnInit(): void {
		this.router.events.subscribe(event => this.updateBreadcrumbsPath(event));
	}

}
