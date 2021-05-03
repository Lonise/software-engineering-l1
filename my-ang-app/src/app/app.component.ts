import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from './components/authorization/authorization.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor( public authorizationService: AuthorizationService, private router: Router) {
		this.authorizationService.takeUserLoginFromLocalStorage();
		if ( !this.authorizationService.isAuthorized ) {
			this.router.navigate(['authorization']);
		}
	}
	title = 'my-ang-app';
}
