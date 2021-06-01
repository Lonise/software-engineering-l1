import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IAuthorProperties } from 'src/app/components/Interfaces-and-classes/author/author';

@Component({
	selector: 'app-input-authors',
	templateUrl: './input-authors.component.html',
	styleUrls: ['./input-authors.component.scss'],
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => InputAuthorsComponent ),
		multi: true
	}]
})
export class InputAuthorsComponent implements ControlValueAccessor {
	@Input() authorsArray!: IAuthorProperties[];
	@Input() authorsControl!: FormArray;

	public suggestAuthors: IAuthorProperties[] = [];

	public removeAuthorTag( index: number ): void {
		this.suggestAuthors.push(this.authorsControl.controls[index].value);
		this.authorsControl.removeAt(index);
	}

	public pushAuthorToArray( author: IAuthorProperties, index: number ): void {
		this.authorsControl.push(new FormControl(author));
		this.suggestAuthors.splice(index, 1);
	}

	private isSuggestAuthor( value: string, author: IAuthorProperties ): boolean {

		let resultOfFirstName: boolean = !!author.firstName.match(new RegExp(value, 'i'));
		resultOfFirstName = resultOfFirstName && !this.authorsControl.value.includes(author.firstName);

		let resultOfSecondName: boolean = !!author.lastName.match(new RegExp(value, 'i'));
		resultOfSecondName = resultOfSecondName  && !this.authorsControl.value.includes(author.lastName);

		return resultOfFirstName || resultOfSecondName;
	}

	public searchAuthorsInArray( searchingValue: string ): void {
		if ( searchingValue.trim() === '') {
			this.suggestAuthors = [];
		} else {
			this.suggestAuthors = this.authorsArray.filter( author => this.isSuggestAuthor( searchingValue, author ) );
		}
	}

	writeValue(): void {}
	registerOnChange(fn: any): void {}
	registerOnTouched(fn: any): void {}
}
