import { Action, createReducer, on } from "@ngrx/store";
import { Course, ICourseProperties } from "../components/Interfaces-and-classes/course/course";
import { IUserProperties } from "../components/Interfaces-and-classes/user/user";
import { CoursesActions } from './courses.action'


type activeCourseType = Course | 'NEW' | undefined;

export interface State {
	courseList: Course[];
	activeCourse: activeCourseType;
}

const initialState: State = {
	courseList: [],
	activeCourse: undefined,
}

const exampleReducer = createReducer(
	initialState,
	on(CoursesActions.getCoursesDataSuccess,  (state, { data }) => ({
		...state, courseList: data,
	}))
);

export function reducer(state: State | undefined, action: Action) {
	return exampleReducer(state, action)
}
