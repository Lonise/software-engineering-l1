import { Component, Input, OnInit } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Component({
	selector: 'app-authorization',
	templateUrl: './authorization.component.html',
	styleUrls: ['./authorization.component.scss', './login-signup-toggle.scss']
})
export class AuthorizationComponent {

	constructor( public authorizationService: AuthorizationService ) { }

	public backDropClick(event: MouseEvent): void {
		console.log(event.currentTarget);
	}

	public toggleLogIn(): void {
		this.authorizationService.login();
	}

	public closeLogIn(): void {
		if ( this.authorizationService.isAuthorized) {
			this.authorizationService.closeLogIn();
		}
	}
}
