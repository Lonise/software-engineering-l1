import { Course, ICourseProperties } from './course';

let courseProperties: ICourseProperties;

describe('Course', () => {
	it('should create an instance', () => {
		expect(new Course(courseProperties)).toBeTruthy();
	});
});
