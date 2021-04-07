import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthorizationService {

	public userKey = 'user';
	public userLogin!: string | null;
	public userNameInput = '';
	public userPasswordInput = '';
	public isAuthenticated = false;
	public isErrorModalVisible = false;

	public validationUserName: RegExp = new RegExp(/^([\w\-\.])+\@([\w\-\.])+\.([A-Za-z]{2,4})$/);
	public validationPassword: RegExp = new RegExp(/^\w{1,5}$/);

	public checkUserIsAuthorized(): void {
		this.userLogin = window.localStorage.getItem(this.userKey);
		if ( typeof this.userLogin === 'string' ) {
			this.isAuthenticated = true;
		} else {
			this.isAuthenticated = false;
		}
	}

	public submitAuthorization(): void {
		if (!this.validationUserName.test(this.userNameInput) || !this.validationPassword.test(this.userPasswordInput)) {
			this.toggleErrorComponent();
		} else {
			this.login(this.userNameInput);
		}
	}

	public toggleErrorComponent(): void {
		this.isErrorModalVisible = !this.isErrorModalVisible;
	}

	public login( login?: string ): void {
		if (!login) {
			console.log('isAuthenticated = false');
			this.isAuthenticated = true;
			return;
		} else {
			window.localStorage.setItem(this.userKey, login);
			this.isAuthenticated = true;
			this.userLogin = login;
			console.log(this.userLogin);
		}
	}

	public logout(): void {
		window.localStorage.clear();
		this.isAuthenticated = false;
		this.userLogin = null;
	}

	public getUserInfo(): string | null {
		return this.userLogin;
	}
}
