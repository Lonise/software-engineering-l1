import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./courses.reducer";

export namespace ExampleSelectors {
	export const state = createFeatureSelector<State>('coursesStore');

	export const courses = createSelector(state, (state) => state.courseList);
}
