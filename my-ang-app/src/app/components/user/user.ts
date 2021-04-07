export interface IUserProperties {
	id: number | string;
	firstName: string;
	lastName: string;
}

export class User {
	public id: string | number;
	public firstName: string;
	public lastName: string;

	constructor( user: IUserProperties ) {
		this.id = user.id;
		this.firstName = user.firstName;
		this.lastName = user.lastName;
	}
}
