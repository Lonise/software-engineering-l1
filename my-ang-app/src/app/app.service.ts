import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from './components/authorization/authorization.service';
import { AuthorizationHttpService } from './http/authorization-http.service';

@Injectable()
export class AppService {

	constructor(
		private router: Router,
		public authorizationService: AuthorizationService,
		private authorizationHttpService: AuthorizationHttpService ) { }

	public appStart(): void {
		const cookieToken: string | undefined = this.authorizationService.getTokenInCookie();

		if ( typeof cookieToken !== 'undefined' ) {
			this.authorizationHttpService.getUserByActiveSessionToken( cookieToken ).subscribe( (userData) => {
				this.authorizationService.userDataFromBE = userData;
				this.authorizationService.userLogin = userData.name;
				this.authorizationService.isAuthorized = true;
				this.router.navigate(['courses']);
			},
			error => {
				console.log('current error is ', error);
				this.router.navigate(['authorization']);
			});
		} else {
				this.router.navigate(['authorization']);
		}
	}
}
