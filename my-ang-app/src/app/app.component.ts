import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from './components/authorization/authorization.service';
import { AuthorizationHttpService } from './http/authorization-http.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(	public authorizationService: AuthorizationService,
								private router: Router,
								private authorizationHttpService:AuthorizationHttpService) {

		const cookieToken: string | undefined = this.authorizationService.getTokenInCookie();

		if ( typeof cookieToken !== 'undefined' ) {
			this.authorizationHttpService.getUserByActiveSessionToken( cookieToken ).subscribe( userData => {
				console.log('current user is ', userData);
				this.authorizationService.user = userData;
				this.router.navigate(['courses']);
			},
			error => {
				console.log('current error is ', error);
				this.router.navigate(['authorization']);
			})
		} else {
				this.router.navigate(['authorization']);
		}
	}
	title = 'my-ang-app';
}
