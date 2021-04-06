import { Component, Input } from '@angular/core';

import { User, UserInterface } from '../user/user';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
	@Input() logOut!: () => void;
	public userExample: UserInterface = new User(1, 'Nikita', 'Loshkarev');
}
