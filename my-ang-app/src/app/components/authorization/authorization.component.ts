import { Component, Input, OnInit } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Component({
	selector: 'app-authorization',
	templateUrl: './authorization.component.html',
	styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {

	constructor( public authorization: AuthorizationService ) { }

	public backDropClick(event: MouseEvent): void {
		console.log(event.currentTarget);
	}

	public toggleLogIn(): void {
		this.authorization.login();
	}

	public closeLogIn(): void {
		if ( this.authorization.isAuthorized) {
			this.authorization.closeLogIn();
		}
	}
}
