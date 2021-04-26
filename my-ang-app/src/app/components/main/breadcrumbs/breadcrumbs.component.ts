import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

	constructor ( private router: Router ) {}
	public breadcrumbsPass!: string;

	public updateBreadcrumbsPath(event: Event) {
		if (event instanceof NavigationEnd) {
			this.breadcrumbsPass = event.urlAfterRedirects.slice(1).split('/').join(' > ').toUpperCase();
		}
	}

	ngOnInit(): void {
		this.router.events.subscribe(event => this.updateBreadcrumbsPath(event));
	}

}
