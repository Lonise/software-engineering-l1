import { Action, createReducer, on } from "@ngrx/store";
import { Course, ICourseProperties } from "../components/Interfaces-and-classes/course/course";
import { IUserProperties } from "../components/Interfaces-and-classes/user/user";
import { CoursesActions } from './courses.action'


export type activeCourseType = Course | 'NEW' | undefined;

export interface State {
	courseList: Course[];
	activeCourse: activeCourseType;
	page: number;
	size:number;
}

const initialState: State = {
	courseList: [],
	activeCourse: undefined,
	page: 1,
	size: 5,
}

const exampleReducer = createReducer(
	initialState,
	on(CoursesActions.activateCourse, (state, data) => ({
		...state,
		activeCourse: data.activeCourse,
	})),
	on(CoursesActions.deactivateCourse, (state) => ({
		...state,
		activeCourse: undefined,
	})),

	on(CoursesActions.getCoursesDataSuccess,  (state, { data }) => ({
		...state, courseList: data,
	}))
);

export function reducer(state: State | undefined, action: Action) {
	return exampleReducer(state, action)
}
