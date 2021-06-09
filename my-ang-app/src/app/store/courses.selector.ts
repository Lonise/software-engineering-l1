import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./courses.reducer";

export namespace CoursesSelectors {
	export const state = createFeatureSelector<State>('coursesStore');

	export const activeCourse = createSelector(state, (state) => state.activeCourse);

	export const courses = createSelector(state, (state) => state.courseList);
}
