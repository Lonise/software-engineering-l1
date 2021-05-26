import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDateValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true}]
})
export class DateValidatorDirective implements Validator {


	validate(control: AbstractControl): ValidationErrors | null {
		const currentYear = (new Date()).getFullYear();
		const incomingValue = new Date( control.value );

		return (
			incomingValue.getFullYear() < currentYear ||
			incomingValue.getFullYear() > (currentYear + 2)
		) ? {'invalid': true} : null
	}
}
