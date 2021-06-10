import { Action, createReducer, on } from "@ngrx/store";
import { Course } from "../components/Interfaces-and-classes/course/course";
import { CoursesActions } from './courses.action'


export type activeCourseType = Course | 'NEW' | undefined;

export interface State {
	courseList: Course[];
	activeCourse: activeCourseType;
	pageSize: number;
	pagesNumbers: number[];
	currentPage: number;
}

const initialState: State = {
	courseList: [],
	activeCourse: undefined,
	pageSize: 5,
	pagesNumbers:[1,2],
	currentPage: 1,
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
		...state, courseList: data.list, pagesNumbers:data.pagesNumbers
	}))
);

export function reducer(state: State | undefined, action: Action) {
	return exampleReducer(state, action)
}
