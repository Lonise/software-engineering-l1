import { DurationCoursePipe } from './duration-course.pipe';

describe('DurationCoursePipe', () => {
	const durationCoursePipe = new DurationCoursePipe();
	let durationExample: number;

	it('create an instance', () => {
		expect(durationCoursePipe).toBeTruthy();
	});
	it('should return duration with "min" if duration less than 1h', () => {
		durationExample = 50;
		expect(durationCoursePipe.transform(durationExample)).toEqual('50min');
	});
	it('Should return duration in minutes and hours if duration more than 59', () => {
		durationExample = 70;
		expect(durationCoursePipe.transform(durationExample)).toEqual('1h 10min');
	});
});
