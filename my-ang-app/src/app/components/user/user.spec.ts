import { User, IUserProperties } from './user';

let userProperties: IUserProperties;

describe('User', () => {
	it('should create an instance', () => {
		expect(new User(userProperties)).toBeTruthy();
	});
});
