import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationHttpService } from 'src/app/http/authorization-http.service';
import { IUserProperties } from '../Interfaces-and-classes/user/user';

@Injectable()
export class AuthorizationService {

	constructor( private router: Router, private authorizationHttpService:AuthorizationHttpService ) {}

	private nameTokenInCookie = 'coursesCookie';
	public userKey = 'user';
	public userLogin!: string | null;
	public userInput: IUserProperties = {
		id: '',
		name: '',
		email: '',
		password: '',
	};
  public user: any;
	public isErrorModalVisible = false;
	public isAuthorized = false;
	public isLogIn = true;

	public validationUserEmail: RegExp = new RegExp(/^([\w\-\.])+\@([\w\-\.])+\.([A-Za-z]{2,4})$/);
	public validationUserName: RegExp = new RegExp(/^\w{1,5}$/);
	public validationPassword: RegExp = new RegExp(/^\w{1,5}$/);

	public getTokenInCookie(): string | undefined {
		const currentCookies = document.cookie.match( new RegExp("(?:^|; )" + this.nameTokenInCookie.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))
		return  currentCookies ? decodeURIComponent(currentCookies[1]) : undefined;
	}

	public validationIsNoPass(): boolean {
		let resultValidation = (
			!this.validationUserEmail.test(this.userInput.email) ||
			!this.validationPassword.test(this.userInput.password)
		);
		if (!this.isLogIn) {
			resultValidation = resultValidation || !this.validationUserName.test(this.userInput.name)
		}
		return resultValidation;
	}

	public toggleErrorComponent(): void {
		this.isErrorModalVisible = !this.isErrorModalVisible;
	}

	public closeLogIn(): void {
		this.router.navigate(['courses']);
	}

	public submitAuth( isLogIn: boolean ): void {

		if ( this.validationIsNoPass() ) {
			this.toggleErrorComponent();
			return
		}

		if ( !isLogIn ) {

			this.authorizationHttpService.postAuthentication( this.userInput ).subscribe( value => {
				if ( value === 'login') {
				} else {
					this.toggleErrorComponent();
				}
			},
			error => {
				console.log('authentication error ', error);
				this.toggleErrorComponent()
			})

		} else {

			this.authorizationHttpService.postAuthorization( this.userInput).subscribe( value => {
				this.userLogin = this.userInput.email;
				this.isAuthorized = true;
				this.closeLogIn();
			},
			error => {
				console.log('authorization error ', error);
				this.toggleErrorComponent()
			})
		}
	}

	public logout(): void {
		this.userLogin = null;
		this.isAuthorized = false;
		this.router.navigate(['authorization']);
	}

	public getUserInfo(): string | null {
		return this.userLogin;
	}
}
