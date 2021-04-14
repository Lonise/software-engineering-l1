import { FilterCoursesByInputPipe } from './filter-courses-by-input.pipe';
import { Course } from '../course';

describe('FilterCoursesByInputPipe transform()', () => {
	let filterCoursesByInputPip: FilterCoursesByInputPipe;
	let inputExample: string;
	const courseListExample: Course[] = [
		{
			id: 1,
			title: 'HTML course',
			creationDate: new Date(2021, 5, 28),
			duration: 90,
			description: 'HTML course HTML course',
			isTopRated: true
		},
		{
			id: 2,
			title: 'CSS course',
			creationDate: new Date(2021, 2, 25),
			duration: 115,
			description: 'CSS course CSS course',
			isTopRated: false
		},
		{
			id: 3,
			title: 'JS course',
			creationDate: new Date(2021, 2, 15),
			duration: 25,
			description: 'JS course JS course',
			isTopRated: true
		}
	];

	beforeEach(() => {
		filterCoursesByInputPip = new FilterCoursesByInputPipe();
	});

	it('should return courses with current input in the title', () => {
		inputExample = 's';
		expect(filterCoursesByInputPip.transform(courseListExample, inputExample).length).toBe(2);
	});

	it('should return an empty array if the course list does not contain a course with a title for the current input', () => {
		inputExample = 'nonexistent course title';
		expect(filterCoursesByInputPip.transform(courseListExample, inputExample)).toEqual([]);
	});

	it('should return courses array without changes if current input is empty', () => {
		inputExample = '';
		expect(filterCoursesByInputPip.transform(courseListExample, inputExample)).toEqual(courseListExample);
	});
});
