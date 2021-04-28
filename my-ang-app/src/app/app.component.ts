import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from './components/authorization/authorization.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor( public authorization: AuthorizationService, private router: Router) {
		this.authorization.takeUserLoginFromLocalStorage();
		if ( !this.authorization.isAuthorized ) {
			this.router.navigate(['authorization']);
		}
	}
	title = 'my-ang-app';
}
