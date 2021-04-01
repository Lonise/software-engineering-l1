import { Component } from '@angular/core';

@Component({
	selector: 'app-log-in-sign-up',
	templateUrl: './log-in-sign-up.component.html',
	styleUrls: ['./log-in-sign-up.component.scss']
})

export class LogInSignUpComponent {

	public userNameInput = '';
	public userPasswordInput = '';
	public validationUserName: RegExp = new RegExp(/^([\w\-\.])+\@([\w\-\.])+\.([A-Za-z]{2,4})$/);
	public validationPassword: RegExp = new RegExp(/^\w{1,5}$/);

	public isError = false;

	public toggleErrorComponent(): void {
		this.isError = !this.isError;
	};

	public toggleLogInSignUp = (): void => {};

	public backDropClick(event: MouseEvent): void {
		console.log(event.currentTarget);
	};

// change any type DRY
	public onUserNameInputChange(event: any): void {
		this.userNameInput = event.target.value;
	};
//add extends
	public onPasswordInputChange(event: any): void {
		this.userPasswordInput = event.target.value;
	};

	public submitAuthorization(): void {
		if (!this.validationUserName.test(this.userNameInput) || !this.validationPassword.test(this.userPasswordInput)) {
			this.toggleErrorComponent();
		} else {
			this.toggleLogInSignUp();
		};
	};

	constructor() { }
}
