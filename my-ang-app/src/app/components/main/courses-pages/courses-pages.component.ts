import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-courses-pages',
	templateUrl: './courses-pages.component.html',
	styleUrls: ['./courses-pages.component.scss']
})
export class CoursesPagesComponent implements OnInit {

	constructor( private router: Router) { }

	ngOnInit(): void {
	}

}
