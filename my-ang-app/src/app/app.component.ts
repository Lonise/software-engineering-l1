import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

import { LogInSignUpComponent } from './components/log-in-sign-up/log-in-sign-up.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'my-ang-app';

	@ViewChild('logInSignUpPopup', { read: ViewContainerRef }) logInSignUpPopup!: ViewContainerRef;

	constructor( private componentFactoryResolver: ComponentFactoryResolver) {}

	private LogInSignUpFactoryComponent = this.componentFactoryResolver.resolveComponentFactory(LogInSignUpComponent);
	private isLogInSignUpVisible = false;

	public toggleLogInSignUp = (): void => {
		this.isLogInSignUpVisible = !this.isLogInSignUpVisible;
		if (this.isLogInSignUpVisible) {
			const LogInSignUpComponentRef = this.logInSignUpPopup.createComponent(this.LogInSignUpFactoryComponent);
			((LogInSignUpComponentRef.instance)).toggleLogInSignUp = this.toggleLogInSignUp;
		} else {
			this.logInSignUpPopup.clear();
		}
	}
}
