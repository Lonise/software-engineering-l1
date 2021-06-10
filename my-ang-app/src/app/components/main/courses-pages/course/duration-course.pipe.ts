import { Pipe, PipeTransform } from '@angular/core';

import { minutesInHour } from 'src/app/constants';

@Pipe({
	name: 'durationCourse'
})
export class DurationCoursePipe implements PipeTransform {

	transform(duration: number): string {

		if ( duration >= 60 ) {
			const hours: number = Math.floor(duration / minutesInHour);
			const minutes: number = duration % minutesInHour;
			return hours + 'h ' + minutes + 'min';
		}
		return duration + 'min';
	}
}
