import { Component, OnInit } from '@angular/core';
import { User, UserInterface } from '../user/user'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userExample: UserInterface = new User(1, 'Nikita', 'Loshkarev');
	constructor() { }

	ngOnInit(): void {
	}

}
