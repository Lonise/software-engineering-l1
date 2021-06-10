import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./courses.reducer";

export namespace CoursesSelectors {
	export const state = createFeatureSelector<State>('coursesStore');

	export const activeCourse = createSelector(state, (state) => state.activeCourse);

	export const currentPage = createSelector(state, (state) => state.currentPage);

	export const pagesNumbers = createSelector(state, (state) => state.pagesNumbers);

	export const courses = createSelector(state, (state) => state.courseList);
}
