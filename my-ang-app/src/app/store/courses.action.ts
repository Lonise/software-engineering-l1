import { createAction, props } from '@ngrx/store';
import { Course } from '../components/Interfaces-and-classes/course/course';

export namespace ExampleActions {

	export const addNewCourse = createAction('ADD_NEW_COURSE', props<{course: Course}>());

	export const deleteCourse = createAction('DELETE_COURSE', props<{courseId: string}>());

	export const putCourse = createAction('PUT_COURSE', props<{course: Course, id: string}>());

	export const getCoursesData = createAction('GET_COURSES_DATA');

	export const searchCourses = createAction('SEARCH_COURSES', props<{userInput: string}>());

	export const getCoursesDataSuccess = createAction('GET_COURSES_DATA_SUCCESS', props<{ data: Course[] }>());
}
