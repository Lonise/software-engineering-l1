import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function DurationValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const incomingValue = control.value;
		const minimumDuration = 30;
		const maximumDuration = 1200;
		return (
			incomingValue > maximumDuration ||
			incomingValue < minimumDuration
		) ? { incomingValue: {invalid: true} } : null;
	};
}
