import { Component } from '@angular/core';
import { AuthorizationService } from '../authorization/authorization.service';

import { User } from '../user/user';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

	constructor( public authorization: AuthorizationService ) { }

	public userExample: User = new User({ id: 1, firstName: 'Nikita', lastName: 'Loshkarev' });
}
