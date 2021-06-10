export interface IUserProperties {
	id: string;
	name: string;
	email: string;
	password: string;
}

export class User {
	public id: string;
	public name: string;
	public email: string;
	public password: string;

	constructor( user: IUserProperties ) {
		this.id = user.id;
		this.password = user.password;
		this.email = user.email;
		this.name = user.name;
	}
}
