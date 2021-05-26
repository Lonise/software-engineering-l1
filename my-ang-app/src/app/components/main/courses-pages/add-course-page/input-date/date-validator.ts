import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function DateValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const currentYear = (new Date()).getFullYear();
		const incomingValue = new Date( control.value );
		console.log('incomingValue',incomingValue);
    return (
			incomingValue.getFullYear() < currentYear ||
			incomingValue.getFullYear() > (currentYear + 2)
		) ? {incomingValue:{'invalid': true}} : null;
	};
}
