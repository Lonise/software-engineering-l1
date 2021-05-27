import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-duration',
  templateUrl: './input-duration.component.html',
  styleUrls: ['./input-duration.component.scss'],
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => InputDurationComponent ),
		multi: true
	}]
})
export class InputDurationComponent implements ControlValueAccessor {
	@Input() durationControl!: FormControl;
	writeValue(): void {};
	registerOnChange(fn: any): void {};
	registerOnTouched(fn: any): void {};
}
