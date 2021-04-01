import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appValidation]'
})
export class ValidationDirective {

	constructor ( private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef ) { }

	@Input() set appValidation (isError: boolean) {
		if (isError) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		} else {
			this.viewContainer.clear();
		};
	};

}
