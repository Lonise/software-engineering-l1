import { Component } from '@angular/core';
import { AuthorizationService } from './components/authorization/authorization.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor( public authorization: AuthorizationService) {
		this.authorization.takeUserLoginFromLocalStorage();
	}
	title = 'my-ang-app';
}
