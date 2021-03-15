export interface CourseInterface {
	id: string | number;
	title: string;
	creationDate: Date;
	duration: number;
	description: string;
}

export class Course implements CourseInterface {
	public id: string | number;
	public title: string;
	public creationDate: Date;
	public duration: number;
	public description: string;

	constructor(id: string | number, title: string, creationDate: Date, duration: number, description: string) {
		this.id = id;
		this.title = title;
		this.creationDate = creationDate;
		this.duration = duration;
		this.description = description;
	}
}
