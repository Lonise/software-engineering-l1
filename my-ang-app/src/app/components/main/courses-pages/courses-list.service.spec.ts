import { Course } from '../../Interfaces-and-classes/course/course';
import { CoursesListService } from './courses-list.service';
import { FilterCoursesByInputPipe } from './course-list-page/search-add/filter-courses-by-input.pipe';

describe('CoursesListService', () => {
	let coursesListService: CoursesListService;
	const fakeFilterCoursesByInputPipe = {
		transform: (coursesList: Course[], inputValue: string): Course[] => {
		return coursesList;
	}};

	// beforeEach(() => {
	// 	coursesListService = new CoursesListService(fakeFilterCoursesByInputPipe);
	// });

	describe('CoursesListService.getCourseList()', () => {

		it('should return courseListData', () => {
			expect(coursesListService.getCourseList()).toEqual(coursesListService.courseListData);
		});
	});

	describe('CoursesListService.getIsEmptyCourseList()', () => {

		it('should return false if course list no empty', () => {
			expect(coursesListService.getIsEmptyCourseList()).toBeFalse();
		});

		it('should return true if course list empty', () => {
			coursesListService.courseListData = [];
			expect(coursesListService.getIsEmptyCourseList()).toBeTrue();
		});
	});

	describe('CoursesListService.getCourseById(courseId: number)', () => {

		it('should return course if current id is correct', () => {
			const correctId = 5;
			expect(coursesListService.getCourseById(correctId)).toBeInstanceOf(Course);
		});

		it('should return string "incorrect id" if current id is incorrect', () => {
			const incorrectId = 0;
			expect(coursesListService.getCourseById(incorrectId)).toEqual('incorrect id');
		});
	});

	describe('CoursesListService.removeCourse( id: number )', () => {

		it('should remove course by id', () => {
			const currentId = 5;
			expect(coursesListService.getCourseById(currentId)).toBeDefined();
			coursesListService.removeCourse(currentId);
			expect(coursesListService.getCourseById(currentId)).toEqual('incorrect id');
		});

		describe('CoursesListService.removeCourse( id: number ), courseListData contain only one course', () => {

			beforeEach(() => {
				coursesListService.courseListData = [{
						id: 5,
						title: 'TS course',
						creationDate: new Date(2021, 1, 20),
						duration: 40,
						description: 'TS course TS course',
						isTopRated: true
				}];
			});

			it('should change coursesListService.isCourseListDataEmpty value to true if all courses was be removed', () => {
				expect(coursesListService.isCourseListDataEmpty).toBeFalse();
				coursesListService.removeCourse(5);
				expect(coursesListService.isCourseListDataEmpty).toBeTruthy();
			});
		});
	});

	describe('CoursesListService.getFilteredCourseList(inputValue: string)', () => {

		let inputValue: string;
		it(' should return coursesListService.courseListData if inputValue.trim()  === "" ', () => {

			inputValue = '';
			expect(coursesListService.getFilteredCourseList(inputValue)).toEqual(coursesListService.courseListData);

			inputValue = '        ';
			expect(coursesListService.getFilteredCourseList(inputValue)).toEqual(coursesListService.courseListData);
		});

		it(' should call filterCoursesByInputPipe.transform(this.courseListData, inputValue) if inputValue.trim()  !== "" ', () => {
			inputValue = 's';
			spyOn(fakeFilterCoursesByInputPipe, 'transform');
			coursesListService.getFilteredCourseList(inputValue);
			expect(fakeFilterCoursesByInputPipe.transform).toHaveBeenCalledOnceWith(coursesListService.courseListData, inputValue);
		});
	});
});
