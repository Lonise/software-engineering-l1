import { Course, ICourseProperties } from './course';
let courseProperties: ICourseProperties = {
	id: 0,
	title: '',
	description: '',
	duration: 0,
	creationDate: new Date(),
	isTopRated: false,
}
let course: Course = new Course(courseProperties);

describe('Course', () => {
	it('should create an instance', () => {
		expect(course).toBeTruthy();
	});
});
