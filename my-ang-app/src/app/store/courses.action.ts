import { createAction, props } from '@ngrx/store';
import { Course } from '../components/Interfaces-and-classes/course/course';
import { activeCourseType } from './courses.reducer';

export namespace CoursesActions {

	export const activateCourse = createAction('ACTIVATE_COURSE', props<{activeCourse: activeCourseType}>());

	export const deactivateCourse = createAction('DEACTIVATE_COURSE');

	export const addNewCourse = createAction('ADD_NEW_COURSE', props<{course: Course}>());

	export const deleteCourse = createAction('DELETE_COURSE', props<{courseId: string}>());

	export const putCourse = createAction('PUT_COURSE', props<{course: Course, id: string}>());

	export const getCoursesData = createAction('GET_COURSES_DATA');

	export const searchCourses = createAction('SEARCH_COURSES', props<{userInput: string}>());

	export const getCoursesDataSuccess = createAction('GET_COURSES_DATA_SUCCESS', props<{ data: Course[] }>());
}
