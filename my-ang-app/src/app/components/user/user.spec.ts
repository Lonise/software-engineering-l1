import { User, IUserProperties } from './user';
let userProperties: IUserProperties = {
	id: 0,
	firstName: '',
	lastName: ''
}
let user = new User(userProperties)
describe('User', () => {
	it('should create an instance', () => {
		expect(user).toBeTruthy();
	});
});
