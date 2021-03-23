import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-log-in-sign-up',
	templateUrl: './log-in-sign-up.component.html',
	styleUrls: ['./log-in-sign-up.component.scss']
})
export class LogInSignUpComponent {
	@ViewChild('BD', { read: ViewContainerRef }) BackDrop!: ViewContainerRef;
	public toggleLogInSignUp = (): void => {};
	public backDropClick(event: MouseEvent): void {
		console.log(event.currentTarget);
	}
	constructor() { }
}
