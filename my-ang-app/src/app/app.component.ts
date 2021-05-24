import { Component } from '@angular/core';

import { AuthorizationService } from './components/authorization/authorization.service';
import { AppService } from './app.service';
import { CoursesHttpService } from './http/courses-http.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(
		public authorizationService: AuthorizationService,
		public coursesHttpService: CoursesHttpService,
		private appService: AppService ) {

		this.appService.appStart();
	}
	title = 'my-ang-app';
}
