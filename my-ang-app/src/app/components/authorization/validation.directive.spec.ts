import { TemplateRef, ViewContainerRef } from '@angular/core';

import { ValidationDirective } from './validation.directive';

 let templateRef: TemplateRef<any>;
 let viewContainerRef: ViewContainerRef;

describe('ValidationDirective', () => {

	it('should create an instance', () => {
		const directive = new ValidationDirective(templateRef, viewContainerRef);
		expect(directive).toBeTruthy();
	});
});
