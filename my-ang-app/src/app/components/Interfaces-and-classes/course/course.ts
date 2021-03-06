import { IAuthorProperties } from '../author/author';

export interface ICourseProperties {
	_id?: string;
	id: string;
	title: string;
	creationDate: Date;
	duration: number;
	description: string;
	isTopRated: boolean;
	authors: IAuthorProperties[];
}

export class Course {
	public _id?: string;
	public id: string;
	public title: string;
	public creationDate: Date;
	public duration: number;
	public description: string;
	public isTopRated: boolean;
	public authors: IAuthorProperties[];


	constructor( course: ICourseProperties ) {
		this._id = course._id;
		this.id = course.id;
		this.title = course.title;
		this.creationDate = new Date(course.creationDate);
		this.duration = course.duration;
		this.description = course.description;
		this.isTopRated = course.isTopRated;
		this.authors = course.authors;
	}
}
