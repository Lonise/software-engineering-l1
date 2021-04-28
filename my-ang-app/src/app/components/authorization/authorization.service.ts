export class AuthorizationService {

	public userKey = 'user';
	public userLogin!: string | null;
	public userNameInput = '';
	public userPasswordInput = '';
	public isErrorModalVisible = false;
	public isAuthorized = false;

	public validationUserName: RegExp = new RegExp(/^([\w\-\.])+\@([\w\-\.])+\.([A-Za-z]{2,4})$/);
	public validationPassword: RegExp = new RegExp(/^\w{1,5}$/);

	public takeUserLoginFromLocalStorage(): void {
		this.userLogin = window.localStorage.getItem(this.userKey);
		this.isAuthorized = !!this.userLogin;
	}

	public validationIsNoPass(): boolean {
		return (
			!this.validationUserName.test(this.userNameInput) ||
			!this.validationPassword.test(this.userPasswordInput)
		);
	}

	public submitAuthorization(): void {
		if ( this.validationIsNoPass() ) {
			this.toggleErrorComponent();
		} else {
			this.login(this.userNameInput);
			this.isAuthorized = true;
		}
	}

	public toggleErrorComponent(): void {
		this.isErrorModalVisible = !this.isErrorModalVisible;
	}

	public login( login?: string ): void {
		if (!login) {
			console.log('isAuthenticated = false');
			return;
		} else {
			window.localStorage.setItem(this.userKey, login);
			this.userLogin = login;
		}
	}

	public logout(): void {
		window.localStorage.clear();
		this.userLogin = null;
		this.isAuthorized = false;
	}

	public getUserInfo(): string | null {
		return this.userLogin;
	}
}
