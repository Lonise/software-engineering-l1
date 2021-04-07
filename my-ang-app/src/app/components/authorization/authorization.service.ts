export class AuthorizationService {

	public userKey = 'user';
	public userLogin!: string | null;
	public userNameInput = '';
	public userPasswordInput = '';
	public isErrorModalVisible = false;

	public validationUserName: RegExp = new RegExp(/^([\w\-\.])+\@([\w\-\.])+\.([A-Za-z]{2,4})$/);
	public validationPassword: RegExp = new RegExp(/^\w{1,5}$/);

	public checkUserIsAuthorized(): void {
		this.userLogin = window.localStorage.getItem(this.userKey);
	}

	private validationIsPass(): boolean {
		return (
			!this.validationUserName.test(this.userNameInput) ||
			!this.validationPassword.test(this.userPasswordInput)
		);
	}

	public submitAuthorization(): void {
		if ( this.validationIsPass() ) {
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
			return;
		} else {
			window.localStorage.setItem(this.userKey, login);
			this.userLogin = login;
			console.log(this.userLogin);
		}
	}

	public logout(): void {
		window.localStorage.clear();
		this.userLogin = null;
	}

	public getUserInfo(): string | null {
		return this.userLogin;
	}
}
