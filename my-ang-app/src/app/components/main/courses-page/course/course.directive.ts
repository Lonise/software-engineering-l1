import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourse]'
})
export class CourseDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef, render: Renderer2) { }

	@Input() courseCreationDate!: Date;
	private currentDate = new Date();

	ngAfterViewInit():void {
		let differenceDatesInDay: number =  Math.floor((+this.currentDate - +this.courseCreationDate)/86400000);

		if ( differenceDatesInDay > 0 && differenceDatesInDay <= 14 ) {
			this.elementRef.nativeElement.style.border = '5px solid green'
		} else if ( differenceDatesInDay < 0 ) {
			this.elementRef.nativeElement.style.border = '5px solid blue'
		}
	}
}
