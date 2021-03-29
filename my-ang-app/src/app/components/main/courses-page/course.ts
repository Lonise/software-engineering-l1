export interface CourseInterface {
	id: string | number;
	title: string;
	creationDate: Date;
	duration: number;
	description: string;
	isTopRated: boolean;
}

export class Course implements CourseInterface {
	public id: string | number;
	public title: string;
	public creationDate: Date;
	public duration: number;
	public description: string;
	public isTopRated: boolean;

	constructor(id: string | number, title: string, creationDate: Date, duration: number, description: string, isTopRated: boolean) {
		this.id = id;
		this.title = title;
		this.creationDate = creationDate;
		this.duration = duration;
		this.description = description;
		this.isTopRated = isTopRated;
	}
}
