import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { blueBorderClass, daysInTwoWeek, greenBorderClass, millisecondsInDay } from 'src/app/constants';

@Directive({
	selector: '[appCourse]'
})
export class CourseDirective implements AfterViewInit {

	constructor(private elementRef: ElementRef, render: Renderer2) { }

	@Input() courseCreationDate!: Date;
	private currentDate = new Date();

	ngAfterViewInit(): void {
		const differenceDatesInDay: number =  Math.floor((+this.currentDate - +this.courseCreationDate) / millisecondsInDay);

		if ( differenceDatesInDay > 0 && differenceDatesInDay <= daysInTwoWeek ) {
			this.elementRef.nativeElement.className = this.elementRef.nativeElement.className + greenBorderClass;
		} else if ( differenceDatesInDay < 0 ) {
			this.elementRef.nativeElement.className = this.elementRef.nativeElement.className + blueBorderClass;
		}
	}
}
