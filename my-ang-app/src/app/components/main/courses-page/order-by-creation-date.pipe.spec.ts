import { OrderByCreationDatePipe } from './order-by-creation-date.pipe';
import { Course } from './course';

describe('OrderByCreationDatePipe', () => {
	const orderByCreationDatePipe = new OrderByCreationDatePipe();
	let courseWithMinimalCreationDate: Course = {
			id: 99,
			title: 'course With Minimal CreationDate',
			creationDate: new Date(2050, 10, 10),
			duration: 90,
			description: 'course With Minimal CreationDate',
			isTopRated: true
	};

	let courseWithMaximalCreationDate: Course = {
		id: 99,
		title: 'course With Maximal CreationDate',
		creationDate: new Date(200, 10, 10),
		duration: 90,
		description: 'course With Maximal CreationDate',
		isTopRated: true
};

	let courseListExample: Course[] = [
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
			creationDate: new Date(2021, 3, 15),
			duration: 25,
			description: 'JS course JS course',
			isTopRated: true
		}
	];;

	it('create an instance', () => {
		expect(orderByCreationDatePipe).toBeTruthy();
	});

	it('should return courseListExample array', () => {
		expect(orderByCreationDatePipe.transform(courseListExample)).toEqual(courseListExample);
	});

	it('should return sorted courseListExample. First item is course with minimal creation date', () => {

		courseListExample.forEach(course => {
			if ( courseWithMinimalCreationDate.creationDate > course.creationDate ){
				courseWithMinimalCreationDate = course;
			}
		})
		expect(orderByCreationDatePipe.transform(courseListExample)[0]).toEqual(courseWithMinimalCreationDate);
	});

	it('should return sorted courseListExample. Last item is course with maximal creation date', () => {
		const lastItemId: number = courseListExample.length - 1;

		courseListExample.forEach(course => {
			if ( courseWithMaximalCreationDate.creationDate < course.creationDate ){
				courseWithMaximalCreationDate = course;
			}
		})

		expect(orderByCreationDatePipe.transform(courseListExample)[lastItemId]).toEqual(courseWithMaximalCreationDate);
	});
});
