export interface IAuthorProperties {
	firstName: string;
	lastName: string;
}

export class Author {
	public firstName: string;
	public lastName: string;

	constructor( author: IAuthorProperties ) {
		this.firstName = author.firstName;
		this.lastName = author.lastName;
	}
}
