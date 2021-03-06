import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-authorization-error',
	templateUrl: './authorization-error.component.html',
	styleUrls: ['./authorization-error.component.scss']
})
export class AuthorizationErrorComponent {

	@Output() closeErrorComponent = new EventEmitter<number|string>();

	public closeError(): void {
		this.closeErrorComponent.emit();
	}
}
