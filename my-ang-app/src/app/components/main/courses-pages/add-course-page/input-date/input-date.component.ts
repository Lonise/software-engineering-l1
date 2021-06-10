import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-input-date',
	templateUrl: './input-date.component.html',
	styleUrls: ['./input-date.component.scss'],
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => InputDateComponent ),
		multi: true
	}]
})
export class InputDateComponent implements ControlValueAccessor {
	@Input() dateControl!: FormControl;
	writeValue(): void {}
	registerOnChange(fn: any): void {}
	registerOnTouched(fn: any): void {}
}
