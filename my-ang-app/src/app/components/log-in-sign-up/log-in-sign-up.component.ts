import { Component, Output, ViewChild, ViewContainerRef, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-log-in-sign-up',
	templateUrl: './log-in-sign-up.component.html',
	styleUrls: ['./log-in-sign-up.component.scss']
})

export class LogInSignUpComponent {

	@ViewChild('backdrop', { read: ViewContainerRef }) backdrop!: ViewContainerRef;
	@Output() userName = new EventEmitter<string>();

	public userNameInput: string = '';
	public userPasswordInput: string = '';
	public validationUserName: RegExp = new RegExp(/^([\w\-\.])+\@([\w\-\.])+\.([A-Za-z]{2,4})$/);
	public validationPassword: RegExp = new RegExp(/^\w{1,5}$/);

	public isError: boolean = false;

	public toggleErrorComponent(): void {
		this.isError = !this.isError;
	}

	public toggleLogInSignUp = (): void => {};

	public backDropClick(event: MouseEvent): void {
		console.log(event.currentTarget);
	};

	public submitAuthorization(): void {
		if (!this.validationUserName.test(this.userNameInput) || !this.validationPassword.test(this.userPasswordInput)) {
			this.toggleErrorComponent();
		} else {
			this.toggleLogInSignUp();
		}
	};

	constructor() { }
}
