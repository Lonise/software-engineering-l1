import { Component, Input, OnInit } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Component({
	selector: 'app-authorization',
	templateUrl: './authorization.component.html',
	styleUrls: ['./authorization.component.scss', './login-signup-toggle.scss']
})
export class AuthorizationComponent {

	constructor( public authorizationService: AuthorizationService ) { }

	public switchCheckbox() {
		this.authorizationService.isLogIn = !this.authorizationService.isLogIn;
		console.log('isLogIn',this.authorizationService.isLogIn);
	}

	public toggleLogIn(): void {

	}

	public closeLogIn(): void {
		if ( this.authorizationService.isAuthorized) {
			this.authorizationService.closeLogIn();
		}
	}
}
