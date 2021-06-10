import { Course } from "./course/course";

export interface IServerResponse {
	list: Course[],
	pagesNumbers: number[]
}
