import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationCourse'
})
export class DurationCoursePipe implements PipeTransform {

  transform(duration: number): string {

		if ( duration >= 60 ) {
			const hours: number = Math.floor(duration / 60);
			const minutes: number = duration % 60;
			return hours + 'h ' + minutes + 'min'
		};
			return duration + 'min';
  }
}
