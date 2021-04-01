export interface ICourseProperties {
	id: string | number;
	title: string;
	creationDate: Date;
	duration: number;
	description: string;
	isTopRated: boolean;
}

export class Course {
	public id: string | number;
	public title: string;
	public creationDate: Date;
	public duration: number;
	public description: string;
	public isTopRated: boolean;

	constructor( course: ICourseProperties ) {
		this.id = course.id;
		this.title = course.title;
		this.creationDate = course.creationDate;
		this.duration = course.duration;
		this.description = course.description;
		this.isTopRated = course.isTopRated;
	}
}
