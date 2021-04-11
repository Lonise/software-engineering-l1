import { TemplateRef, ViewContainerRef } from '@angular/core';

import { ValidationDirective } from './validation.directive';

 let templateRef: TemplateRef<any>;
 let viewContainerRef: ViewContainerRef;

describe('ValidationDirective.appValidation()', () => {
	let validationDirective: ValidationDirective;
	beforeEach(() => {
		validationDirective = new ValidationDirective(templateRef, viewContainerRef);
	})

	it('should create validationDirective ', () => {
		expect(validationDirective).toBeTruthy();
	});
});
