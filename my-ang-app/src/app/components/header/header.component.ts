import { Component } from '@angular/core';
import { AuthorizationService } from '../authorization/authorization.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

	constructor( public authorization: AuthorizationService ) { }

}
