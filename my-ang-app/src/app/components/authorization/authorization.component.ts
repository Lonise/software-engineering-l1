import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from './authorization.service';

@Component({
	selector: 'app-authorization',
	templateUrl: './authorization.component.html',
	styleUrls: ['./authorization.component.scss', './login-signup-toggle.scss']
})
export class AuthorizationComponent {

	constructor(
		public authorizationService: AuthorizationService,
		private formBuilder: FormBuilder ) {

		this.authControl = this.formBuilder.group({
			userName: ['', [
				Validators.required,
				Validators.minLength(5)
			]],
			userEmail: ['', [
				Validators.required,
				Validators.email,
				Validators.pattern(this.authorizationService.validationUserEmail)
			]],
			userPassword: ['', [
				Validators.required,
				Validators.minLength(5)
			]],
		});
	}

	get _name(): AbstractControl | null {
		return this.authControl.get('userName');
	}

	get _email(): AbstractControl | null {
		return this.authControl.get('userEmail');
	}

	get _password(): AbstractControl | null {
		return this.authControl.get('userPassword');
	}
	public authControl!: FormGroup;

	public isButtonDisabled = true;

	public switchCheckbox(): void {
		this.authorizationService.isLogIn = !this.authorizationService.isLogIn;
		this.checkUserInput();
	}

	public checkUserInput(): void {
		this.isButtonDisabled = !!this._password?.invalid;
		this.isButtonDisabled = this.isButtonDisabled || !!this._email?.invalid;
		if (! this.authorizationService.isLogIn ) {
			this.isButtonDisabled = this.isButtonDisabled || !!this._name?.invalid;
		}
	}

	public submitAuth(): void {
			this.authorizationService.submitAuth( this.authControl );
	}

	public closeLogIn(): void {
		if ( this.authorizationService.isAuthorized ) {
			this.authorizationService.closeLogIn();
		}
	}
}
